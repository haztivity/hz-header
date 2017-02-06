(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) {
            module.exports = v;
        }
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@haztivity/core", "./6611.html!text", "../../../../../src/HzHeaderService"],
               factory);
    }
})(function (require, exports) {
    "use strict";
    /**
     * @license
     * Copyright Davinchi. All Rights Reserved.
     */
    var core_1 = require("@haztivity/core");
    var _6611_html_text_1 = require("./6611.html!text");
    var HzHeaderService_1 = require("../../../../../src/HzHeaderService");
    var page = core_1.PageFactory.createPage({
                                                 name: "6611",
                                                 resources: [],
                                                 template: _6611_html_text_1.default
                                             });
    exports.page6611 = page;
    page.on(core_1.PageController.ON_RENDERING, null, function (eventObject, template, pageController) {
        console.log(pageController.options.name + " rendering");
        debugger;
        var hzHeaderService = pageController.InjectorService.get(HzHeaderService_1.HzHeaderService);
        hzHeaderService.setTitle("Test");
    });
    page.on(core_1.PageController.ON_RENDERED, null, function (eventObject, $page, pageController) {
        console.log(pageController.options.name + " rendered");
        if (pageController.isCompleted()) {
            $page.find("#myResource").data("hzResourceInstance").disable();
        }
    });
    page.on(core_1.PageController.ON_SHOW,
            null,
            function (eventObject, $page, $oldPage, oldPageRelativePosition, pageController) {
                console.log(pageController.options.name + " show start");
            });
    page.on(core_1.PageController.ON_SHOWN,
            null,
            function (eventObject, $page, $oldPage, oldPageRelativePosition, pageController) {
                console.log(pageController.options.name + " show end");
            });
    page.on(core_1.PageController.ON_COMPLETE_CHANGE, null, function (eventObject, isCompleted, $page, pageController) {
        console.log(pageController.options.name + " complete change");
    });
    page.on(core_1.PageController.ON_DESTROY, null, function (eventObject, $page, pageController) {
        console.log(pageController.options.name + " destroy");
    });
});
//# sourceMappingURL=6611.js.map