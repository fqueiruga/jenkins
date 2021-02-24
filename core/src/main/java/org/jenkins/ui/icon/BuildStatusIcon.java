package org.jenkins.ui.icon;

import org.kohsuke.accmod.Restricted;
import org.kohsuke.accmod.restrictions.NoExternalUse;

@Restricted(NoExternalUse.class)
public class BuildStatusIcon extends Icon {
    enum BuildStatus {
        NEVER_BUILT("build-status/build-status-sprite.svg#never-built"),
        LAST_DISABLED("build-status/build-status-sprite.svg#last-disabled"),
        LAST_ABORTED("build-status/build-status-sprite.svg#last-aborted"),
        LAST_UNSTABLE("build-status/build-status-sprite.svg#last-unstable"),
        LAST_FAILED("build-status/build-status-sprite.svg#last-failed"),
        LAST_SUCCESSFUL("build-status/build-status-sprite.svg#last-successful");

        private String url;

        BuildStatus(String url) {
            this.url = url;
        }
    }

    private boolean inProgress;

    public BuildStatusIcon(String classSpec, String style, BuildStatus status) {
        this(classSpec, style, status, false);
    }

    public BuildStatusIcon(String classSpec, String style, BuildStatus status, boolean inProgress) {
        super(classSpec, status.url, style, IconFormat.EXTERNAL_SVG_SPRITE);
        this.inProgress = inProgress;
    }

    @Override
    public boolean isSvgSprite() {
        return super.isSvgSprite();
    }

    public boolean isBuildStatus() {
        return true;
    }

    public boolean isInProgress() {
       return inProgress;
    }
}
