# Project Guide

This file documents the complete creation of this repository, starting from an empty directory.

## Workspace Setup

```console
$ echo "bazel-*" > .gitignore            # ignore bazel ouput symlinks
$ echo "node_modules" >> .gitignore     # ignore node dependencies
$ touch BUILD                           # will be filled in later, but must exist
$ echo "{}" > package.json              # same; will be init by yarn but needed to bootstrap
$ touch yarn.lock              # same;
```
Create [`WORKSPACE`](WORKSPACE). See that file for more information.

## Project Setup

Now, set up the basic Node project:

```console
$ bazel run @nodejs//:yarn -- init -y
```

Add infrastructure dependencies. These are needed for the general bazel/typescript/closure setup
```console
$ bazel run @nodejs//:yarn -- add --dev @bazel/typescript typescript tsickle
```

Add project dependencies. These are only needed because they are used by the sample project code.
```
$ bazel run @nodejs//:yarn -- add --dev @bazel/concatjs @types/react @types/react-dom html-insert-assets http-server
$ bazel run @nodejs//:yarn -- add react react-dom
```

Create [`tsconfig.json`](tsconfig.json). See that file for more information.

Create application sources in `src/`, see those files for details.

Expose `tsconfig.json` in [`BUILD.bazel`](BUILD). Add targets for compiling
sources and running the prod/dev server. See that file for more information.

Update package.json with scripts to run prod/dev servers.