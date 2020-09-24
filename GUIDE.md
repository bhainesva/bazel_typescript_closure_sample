# Project Guide

This file documents the complete creation of this repository, starting from an empty directory.

## Workspace Setup

```console
$ ech "bazel-*" > .gitignore            # ignore bazel ouput symlinks
$ echo "node_modules" >> .gitignore     # ignore node dependencies
$ touch BUILD                           # will be filled in later, but must exist
$ echo "{}" > package.json              # same; will be init by yarn but needed to bootstrap
```
Create [`WORKSPACE`](WORKSPACE). See that file for more information.

## Project Setup

Now, set up the basic Node project:

```console
$ bazel run @nodejs//:yarn -- init -y
```

Add infrastructure dependencies. These are not project-specific and are needed for any instance of
the bazel/typescript rules as noted.
```console
$ # needed for ts_library, for basic typescript compilation support
$ bazel run @nodejs//:yarn -- add --dev @bazel/typescript typescript
```

Add project dependencies. These are only needed because they are used by the sample project code.
```
$ bazel run @nodejs//:yarn -- add lodash @types/lodash express @types/express
```

Create [`tsconfig.json`](tsconfig.json). See that file for more information.

Expose `tsconfig.json` in [`BUILD.bazel`](BUILD). See that file for more information.