load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

def closure_js_extern_library(name, srcs = [], supress = [], **kwargs):
    """closure_js_extern_library is used to incorporate externs into
    a Closure build.

    It suppresses most checks.
    """
    suppress = [
        "lintChecks",
        "undefinedVars",
        "unusedLocalVariables",
        "uselessCode",
        "reportUnknownTypes",
        "strictMissingProperties",
        "checkTypes",
        "analyzerChecks",
        "suspiciousCode",
        "nonStandardJsDocs",
        "superfluousSuppress",
        "strictPrimitiveOperators",
        "missingOverride",
    ] + supress
    if len(srcs) == 0:
        suppress = []
    closure_js_library(
        name = name,
        srcs = srcs,
        convention = "NONE",
        suppress = suppress,
        no_closure_library = True,
        **kwargs
    )