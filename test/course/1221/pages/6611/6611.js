System.register(["davinchi_finsi", "./6611.html!text", "../../../../../src/HzHeaderService"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var davinchi_finsi_1, _6611_html_text_1, HzHeaderService_1;
    var page;
    return {
        setters: [
            function (davinchi_finsi_1_1) {
                davinchi_finsi_1 = davinchi_finsi_1_1;
            },
            function (_6611_html_text_1_1) {
                _6611_html_text_1 = _6611_html_text_1_1;
            },
            function (HzHeaderService_1_1) {
                HzHeaderService_1 = HzHeaderService_1_1;
            }],
        execute: function () {
            page = davinchi_finsi_1.PageFactory.createPage({
                name: "6611",
                resources: [],
                template: _6611_html_text_1.default
            });
            page.on(davinchi_finsi_1.PageController.ON_RENDERING, null, function (eventObject, template, pageController) {
                console.log(pageController.options.name + " rendering");
                debugger;
                var hzHeaderService = pageController.InjectorService.get(HzHeaderService_1.HzHeaderService);
                hzHeaderService.setTitle("Test");
            });
            page.on(davinchi_finsi_1.PageController.ON_RENDERED, null, function (eventObject, $page, pageController) {
                console.log(pageController.options.name + " rendered");
                if (pageController.isCompleted()) {
                    $page.find("#myResource").data("hzResourceInstance").disable();
                }
            });
            page.on(davinchi_finsi_1.PageController.ON_SHOW, null, function (eventObject, $page, $oldPage, oldPageRelativePosition, pageController) {
                console.log(pageController.options.name + " show start");
            });
            page.on(davinchi_finsi_1.PageController.ON_SHOWN, null, function (eventObject, $page, $oldPage, oldPageRelativePosition, pageController) {
                console.log(pageController.options.name + " show end");
            });
            page.on(davinchi_finsi_1.PageController.ON_COMPLETE_CHANGE, null, function (eventObject, isCompleted, $page, pageController) {
                console.log(pageController.options.name + " complete change");
            });
            page.on(davinchi_finsi_1.PageController.ON_DESTROY, null, function (eventObject, $page, pageController) {
                console.log(pageController.options.name + " destroy");
            });
            exports_1("page6611", page);
        }
    }
});
//# sourceMappingURL=6611.js.map