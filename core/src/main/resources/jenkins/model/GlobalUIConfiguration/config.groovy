package jenkins.model.GlobalUIConfiguration

def f=namespace(lib.FormTagLib)

f.section() {
    f.optionalBlock(field: "useNewUI", checked: app.useNewUI, title: _("useNewUIDescription"))
}
