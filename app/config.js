System.config({
    "bundles": {
        "admin.js": [
            "app/admin.js",
            "github:eonasdan/bootstrap-datetimepicker@0.0.10.js",
            "github:eonasdan/bootstrap-datetimepicker@0.0.10/build/js/bootstrap-datetimepicker.min.js"
        ],
        "main.js": [
            "app/main.js",
            "feature/clipboardButtons/main.js",
            "feature/codeSidebar/main.js",
            "feature/filterableList/attributeMatcher.js",
            "feature/filterableList/filter.js",
            "feature/filterableList/filterableList.js",
            "feature/filterableList/getUrlFilter.js",
            "feature/filterableList/main.js",
            "feature/formWidgets/main.js",
            "feature/hide-show-guide/main.js",
            "feature/hide-show-guide/storage.js",
            "feature/homepage/main.js",
            "feature/infoPopups/main.js",
            "feature/map/main.js",
            "feature/mobileSupport/main.js",
            "feature/platformDownloads/main.js",
            "feature/prettify/main.js",
            "feature/search/SearchController.js",
            "feature/search/main.js",
            "feature/searchFacets/filterForm.js",
            "feature/searchFacets/main.js",
            "feature/stsImport/main.js",
            "feature/timeAgo/main.js",
            "github:jspm/nodelibs-process@0.1.2.js",
            "github:jspm/nodelibs-process@0.1.2/index.js",
            "github:rmm5t/jquery-timeago@1.5.3.js",
            "github:rmm5t/jquery-timeago@1.5.3/jquery.timeago.js",
            "github:tcollard/google-code-prettify@1.0.4/bin/prettify.min.js",
            "github:twbs/bootstrap@2.3.2/js/bootstrap-collapse.js",
            "github:twbs/bootstrap@2.3.2/js/bootstrap-tooltip.js",
            "npm:clipboard@1.5.12.js",
            "npm:clipboard@1.5.12/lib/clipboard-action.js",
            "npm:clipboard@1.5.12/lib/clipboard.js",
            "npm:closest@0.0.1.js",
            "npm:closest@0.0.1/index.js",
            "npm:delegate@3.0.1.js",
            "npm:delegate@3.0.1/src/delegate.js",
            "npm:good-listener@1.1.7.js",
            "npm:good-listener@1.1.7/src/is.js",
            "npm:good-listener@1.1.7/src/listen.js",
            "npm:jquery@1.12.4.js",
            "npm:jquery@1.12.4/dist/jquery.js",
            "npm:matches-selector@0.0.1.js",
            "npm:matches-selector@0.0.1/index.js",
            "npm:most@0.2.4.js",
            "npm:most@0.2.4/Stream.js",
            "npm:most@0.2.4/async.js",
            "npm:most@0.2.4/most.js",
            "npm:process@0.11.5.js",
            "npm:process@0.11.5/browser.js",
            "npm:select@1.0.6.js",
            "npm:select@1.0.6/src/select.js",
            "npm:tiny-emitter@1.1.0.js",
            "npm:tiny-emitter@1.1.0/index.js",
            "platform/os.js"
        ],
        "maps.js": [
            "app/maps.js",
            "npm:gmaps@0.4.24.js",
            "npm:gmaps@0.4.24/gmaps.js"
        ],
        "pages/projects/show.js": [
            "app/pages/projects/show.js",
            "github:jspm/nodelibs-process@0.1.2.js",
            "github:jspm/nodelibs-process@0.1.2/index.js",
            "github:twbs/bootstrap@2.3.2/js/bootstrap-tab.js",
            "npm:jquery@1.12.4.js",
            "npm:jquery@1.12.4/dist/jquery.js",
            "npm:process@0.11.5.js",
            "npm:process@0.11.5/browser.js"
        ]
    },
    "defaultJSExtensions": true,
    "map": {
        "FortAwesome/font-awesome": "github:FortAwesome/font-awesome@3.2.1",
        "bootstrap": "github:twbs/bootstrap@2.3.2",
        "clipboard": "npm:clipboard@1.5.12",
        "eonasdan/bootstrap-datetimepicker": "github:eonasdan/bootstrap-datetimepicker@0.0.10",
        "font-awesome": "github:FortAwesome/font-awesome@3.2.1",
        "github:jspm/nodelibs-assert@0.1.0": {
            "assert": "npm:assert@1.4.1"
        },
        "github:jspm/nodelibs-buffer@0.1.0": {
            "buffer": "npm:buffer@3.6.0"
        },
        "github:jspm/nodelibs-process@0.1.2": {
            "process": "npm:process@0.11.5"
        },
        "github:jspm/nodelibs-util@0.1.0": {
            "util": "npm:util@0.10.3"
        },
        "github:jspm/nodelibs-vm@0.1.0": {
            "vm-browserify": "npm:vm-browserify@0.0.4"
        },
        "gmaps": "npm:gmaps@0.4.24",
        "google-code-prettify": "github:tcollard/google-code-prettify@1.0.4",
        "jquery": "npm:jquery@1.12.4",
        "jquery-timeago": "github:rmm5t/jquery-timeago@1.5.3",
        "most": "npm:most@0.2.4",
        "npm:assert@1.4.1": {
            "assert": "github:jspm/nodelibs-assert@0.1.0",
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "util": "npm:util@0.10.3"
        },
        "npm:buffer@3.6.0": {
            "base64-js": "npm:base64-js@0.0.8",
            "child_process": "github:jspm/nodelibs-child_process@0.1.0",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "ieee754": "npm:ieee754@1.1.6",
            "isarray": "npm:isarray@1.0.0",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:clipboard@1.5.12": {
            "good-listener": "npm:good-listener@1.1.7",
            "select": "npm:select@1.0.6",
            "tiny-emitter": "npm:tiny-emitter@1.1.0"
        },
        "npm:closest@0.0.1": {
            "matches-selector": "npm:matches-selector@0.0.1"
        },
        "npm:delegate@3.0.1": {
            "closest": "npm:closest@0.0.1"
        },
        "npm:good-listener@1.1.7": {
            "delegate": "npm:delegate@3.0.1"
        },
        "npm:inherits@2.0.1": {
            "util": "github:jspm/nodelibs-util@0.1.0"
        },
        "npm:jquery@1.12.4": {
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:most@0.2.4": {
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:process@0.11.5": {
            "assert": "github:jspm/nodelibs-assert@0.1.0",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "vm": "github:jspm/nodelibs-vm@0.1.0"
        },
        "npm:util@0.10.3": {
            "inherits": "npm:inherits@2.0.1",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:vm-browserify@0.0.4": {
            "indexof": "npm:indexof@0.0.1"
        },
        "traceur": "github:jmcriffey/bower-traceur@0.0.93",
        "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.93"
    },
    "paths": {
        "github:*": "jspm_packages/github/*",
        "npm:*": "jspm_packages/npm/*"
    },
    "transpiler": "traceur"
});