# bazel typescript closure sample

This repository holds a sample frontend application using bazel, typescript, and closure compiler including:

* Using a vendored dependency / extern, specifically react
* Minified build with closure compiler, unminified build with concatjs_devserver

It does not include an example of using NPM dependencies directly in your bundle. In general,
compiling external dependencies with Closure Compiler's advanced optimizations may not work.

The intention is to serve as a personal reference for standing up similar projects in the future.
The starting point is a Bazel installation.

See the [guide](GUIDE.md) for a step-by-step breakdown of the sample project.

## Usage

Run `yarn dev` to start the devserver, access it at `http://localhost:8080/index.html`

Run `yarn prod` to serve the compiled assets, access it at `http://localhost:8080/index.html`

## Notes / Questions

I initially thought that the simplest path would be to compile TS -> ES6 modules -> Closure but this was not true for some reasons:
* I think there's a bug w/ es6_outputs that errors because it tries to write the externs twice sometimes
* es6_sources always writes .mjs files which closure won't accept
* The way the imports work is slightly different in typescript vs. what closure expects.
  * We'd like to use absolute imports but TS expects the project name at the beginning and closure doesn't
  * closure doesn't accept extensionless imports
* Tsickle will try to output to es modules, but they aren't fully featured. For example: https://github.com/google/closure-compiler/issues/3041

Some of these were patchable but it was easier to just let tsickle handle converting things to goog modules.

I had to make a manual edit to the react-dom.ext.js because the type of ReactDOM was `{?}` which made CC unhappy.

I manually edited vendor/tslib.js to have `goog.provide('tslib')` because the generated closure js files always look for it at that name.

Not related to ts/closure but I don't know how I would handle it if I wanted different assets (minified css? minified vs unminified vendor bundle?) for the dev vs prod server. Can't have separate dev/prod targets both generate an index.html, don't know how to 'switch'.

This was updated on 2021-03-26 and has not been verified to be up-to-date beyond that point.

Disclaimer: I don't know much about typescript, closure, or bazel. The things I've done here might not be 'good'.