System.register(["@haztivity/core", "./page.html!text", "../../../../../src/HzHeaderService"],
                function (exports_1, context_1) {
    "use strict";
                    var __moduleName = context_1 && context_1.id;
                    var core_1, page_html_text_1, HzHeaderService_1, page;
                    return {
                        setters: [
                            function (core_1_1) {
                                core_1 = core_1_1;
                            },
                            function (page_html_text_1_1) {
                                page_html_text_1 = page_html_text_1_1;
                            },
                            function (HzHeaderService_1_1) {
                                HzHeaderService_1 = HzHeaderService_1_1;
                            }
                        ],
                        execute: function () {
                            exports_1("page", page = core_1.PageFactory.createPage({
                                                                                       name: "6611",
                                                                                       resources: [],
                                                                                       template: page_html_text_1.default
                                                                                   }));
                            page.on(core_1.PageController.ON_RENDERING,
                                    null,
                                    function (eventObject, template, pageController) {
                                        console.log(pageController.options.name + " rendering");
                                        debugger;
                                        var hzHeaderService = pageController.InjectorService.get(HzHeaderService_1.HzHeaderService);
                                        hzHeaderService.setTitle("Test");
                                    });
        }
                    };
                });
//# sourceMappingURL=page.js.map