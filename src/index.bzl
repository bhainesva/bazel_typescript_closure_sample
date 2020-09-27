"""Generate a file using a template."""

# Label of the template file to use.
_TEMPLATE = "//src:index_tpl.html"

def _index_html_impl(ctx):
    ctx.actions.expand_template(
        template = ctx.file._template,
        output = ctx.outputs.source_file,
        substitutions = {
            "{VENDOR}": ctx.attr.vendorPath,
            "{BUNDLE}": ctx.attr.bundlePath,
        },
    )

index_html = rule(
    implementation = _index_html_impl,
    attrs = {
        "vendorPath": attr.string(mandatory = True),
        "bundlePath": attr.string(mandatory = True),
        "path": attr.string(mandatory = True),
        "_template": attr.label(
            default = Label(_TEMPLATE),
            allow_single_file = True,
        ),
    },
    outputs = {"source_file": "%{path}"},
)