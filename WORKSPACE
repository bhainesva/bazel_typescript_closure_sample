# Bazel workspace created by @bazel/create 2.2.0

# Declares that this directory is the root of a Bazel workspace.
# See https://docs.bazel.build/versions/master/build-ref.html#workspace
workspace(
    # How this workspace would be referenced with absolute labels from another workspace
    name = "bazel_typescript_closure_sample",
    # Map the @npm bazel workspace to the node_modules directory.
    # This lets Bazel use the same node_modules as other local tooling.
    managed_directories = {"@npm": ["node_modules"]},
)
load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")


#########################
# JS / TS
#########################
# This provides the basic tools for running and packaging nodejs programs in Bazel
http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "dd7ea7efda7655c218ca707f55c3e1b9c68055a70c31a98f264b3445bc8f4cb1",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/3.2.3/rules_nodejs-3.2.3.tar.gz"],
)

load("@build_bazel_rules_nodejs//:package.bzl", "rules_nodejs_dev_dependencies")
rules_nodejs_dev_dependencies()

# The yarn_install rule runs yarn anytime the package.json or yarn.lock file changes.
# It also extracts any Bazel rules distributed in an npm package.
load("@build_bazel_rules_nodejs//:index.bzl", "yarn_install")
yarn_install(
    # Name this npm so that Bazel Label references look like @npm//package
    name = "npm",
    package_json = "//:package.json",
    yarn_lock = "//:yarn.lock",
)

#########################
# Closure Compiler
#########################
http_archive(
    name = "io_bazel_rules_closure",
    sha256 = "7d206c2383811f378a5ef03f4aacbcf5f47fd8650f6abbc3fa89f3a27dd8b176",
    strip_prefix = "rules_closure-0.10.0",
    urls = [
        "https://mirror.bazel.build/github.com/bazelbuild/rules_closure/archive/0.10.0.tar.gz",
        "https://github.com/bazelbuild/rules_closure/archive/0.10.0.tar.gz",
    ],
)
load("@io_bazel_rules_closure//closure:repositories.bzl", "rules_closure_dependencies", "rules_closure_toolchains")
rules_closure_dependencies()
rules_closure_toolchains()

#########################
# SCSS
#########################
http_archive(
    name = "io_bazel_rules_sass",
    url = "https://github.com/bazelbuild/rules_sass/archive/1.26.3.zip",
    strip_prefix = "rules_sass-1.26.3",
    sha256 = "9dcfba04e4af896626f4760d866f895ea4291bc30bf7287887cefcf4707b6a62",
)

load("@io_bazel_rules_sass//:package.bzl", "rules_sass_dependencies")
rules_sass_dependencies()

load("@io_bazel_rules_sass//:defs.bzl", "sass_repositories")
sass_repositories()