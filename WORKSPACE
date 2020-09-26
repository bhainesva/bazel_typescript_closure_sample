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

# Install the nodejs "bootstrap" package
# This provides the basic tools for running and packaging nodejs programs in Bazel
load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")
load("@bazel_tools//tools/build_defs/repo:git.bzl", "git_repository")

git_repository(
    name = "build_bazel_rules_nodejs",
    remote = "https://github.com/bazelbuild/rules_nodejs.git",
    commit = "9fd49927aa9565e606a81ae84d3847c1d0151cfa",
    patches = ["//thirdparty/rules_nodejs:0001-no-externs.patch"],
    shallow_since = "1599756951 -0700",
)

git_repository(
    name = "build_bazel_rules_typescript",
    commit = "10a5a86885f95ab788fd841ade47b6a16e0c13d6",
    patches = [
        "@build_bazel_rules_nodejs//:rules_typescript_pr_494.patch",
        "@build_bazel_rules_nodejs//:rules_typescript_pr_496.patch",
        "@build_bazel_rules_nodejs//:rules_typescript_pr_499.patch",
        "@build_bazel_rules_nodejs//:rules_typescript_pr_508.patch",
        "//thirdparty/rules_typescript:0001-remove-mjs-default-js-outputs.patch",
    ],
    remote = "http://github.com/bazelbuild/rules_typescript.git",
    shallow_since = "1582757372 -0800",
)

load("@build_bazel_rules_nodejs//:package.bzl", "rules_nodejs_dev_dependencies")

rules_nodejs_dev_dependencies()

load("@build_bazel_rules_typescript//:package.bzl", "rules_typescript_dev_dependencies")

rules_typescript_dev_dependencies()

load("@io_bazel_rules_go//go:deps.bzl", "go_register_toolchains", "go_rules_dependencies")
go_rules_dependencies()
go_register_toolchains()

# The npm_install rule runs yarn anytime the package.json or package-lock.json file changes.
# It also extracts any Bazel rules distributed in an npm package.
load("@build_bazel_rules_nodejs//:index.bzl", "npm_install")
npm_install(
    # Name this npm so that Bazel Label references look like @npm//package
    name = "npm",
    package_json = "//:package.json",
    package_lock_json = "//:package-lock.json",
)

# Closure Compiler
http_archive(
    name = "io_bazel_rules_closure",
    sha256 = "7d206c2383811f378a5ef03f4aacbcf5f47fd8650f6abbc3fa89f3a27dd8b176",
    strip_prefix = "rules_closure-0.10.0",
    patches = ["//thirdparty/rules_closure:0001-gen-module-resolution.patch"],
    urls = [
        "https://mirror.bazel.build/github.com/bazelbuild/rules_closure/archive/0.10.0.tar.gz",
        "https://github.com/bazelbuild/rules_closure/archive/0.10.0.tar.gz",
    ],
)
load("@io_bazel_rules_closure//closure:repositories.bzl", "rules_closure_dependencies", "rules_closure_toolchains")
rules_closure_dependencies()
rules_closure_toolchains()