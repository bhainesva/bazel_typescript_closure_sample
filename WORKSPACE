####
# Declare workspace name.
#
# This is used as the root for absolute module imports.
# e.g.: import { x } from 'bazel_typescript_closure_sample/src/lib';
# If we were following official best practice this would be a full reverse-domain string like
# com_github_bhaines_bazel_typescript_closure_sample, but that's just too long.
#
# ref: https://docs.bazel.build/versions/master/be/functions.html#workspace
####
workspace(name = "bazel_typescript_closure_sample")

## Default bazel repo tools
load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

####
# Pull in rules_typescript.
####
http_archive(
    name = "build_bazel_rules_typescript",
    sha256 = "b5b5b55247d858539ad6fbd5241361a662dde16867bb601da006a9c79c15069b",
    url = "https://github.com/bazelbuild/rules_typescript/archive/0.25.1.zip",
    strip_prefix = "rules_typescript-0.25.1",
)


load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")
http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "4952ef879704ab4ad6729a29007e7094aef213ea79e9f2e94cbe1c9a753e63ef",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/2.2.0/rules_nodejs-2.2.0.tar.gz"],
)
####
# Pull in rules_typescript dependencies.
# This adds additional repositories needed by rules_typescript
####
load("@build_bazel_rules_typescript//:package.bzl", "rules_typescript_dev_dependencies")
rules_typescript_dev_dependencies()

# NOTE: this rule installs nodejs, npm, and yarn, but does NOT install
# your npm dependencies into your node_modules folder.
# You must still run the package manager to do this.
load("@build_bazel_rules_nodejs//:index.bzl", "node_repositories")
node_repositories(package_json = ["//:package.json"])

load("@build_bazel_rules_nodejs//:index.bzl", "npm_install")
npm_install(
    # Name this npm so that Bazel Label references look like @npm//package
    name = "npm",
    package_json = "//:package.json",
    package_lock_json = "//:package-lock.json",
)

####
# Set up dependency management.
#
# This exposes dependencies from package.json under @npm//...
# We can run binaries provided by deps, and, more importantly, make them available as deps to
# targets we write. This won't work until we actually create yarn.lock by adding dependencies.
#
# ref: https://github.com/bazelbuild/rules_nodejs/blob/0.15.0/internal/npm_install/npm_install.bzl#L140
####
load("@build_bazel_rules_nodejs//:index.bzl", "yarn_install")
yarn_install(
    name = "npm",
    package_json = "//:package.json",
    yarn_lock = "//:yarn.lock",
)