package org.jenkins.ui.icon;

public class SvgIcon extends Icon {
    private boolean spriteSymbol;

    public SvgIcon(String classSpec, String url, String style) {
        this(classSpec, url, style, false);
    }

    public SvgIcon(String classSpec, String url, String style, boolean spriteSymbol) {
        super(classSpec, url, style);
        this.spriteSymbol = spriteSymbol;
    }

    public boolean isSpriteSymbol() {
        return spriteSymbol;
    }

    public boolean isInlineSvg() {
        return true;
    }
}
