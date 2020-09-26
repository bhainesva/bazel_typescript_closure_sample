load("@io_bazel_rules_closure//closure:defs.bzl",  "closure_js_library")

def closure_js_thirdparty_library(name, srcs, suppress = [], **kwargs):
    """closure_js_thirdparty_library is used to incorporate thirdparty code into
    a Closure build.

    It performs these functions:

    - Suppress most checks

    - Omits closure library

    """
    suppress = suppress + [
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
        "deprecated",
        "jsdocMissingType",
        "misplacedTypeAnnotation",
        "checkVars",
        "missingReturn",
    ]
    if len(srcs) == 0:
        suppress = []

    closure_js_library(
        name = name,
        srcs = srcs,
        suppress = suppress,
        no_closure_library = True,
        **kwargs
    )
