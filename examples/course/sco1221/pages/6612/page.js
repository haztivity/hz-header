"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
/**
 * @license
 * Copyright Davinchi. All Rights Reserved.
 */
var core_1 = require("@haztivity/core");
var page_pug_1 = require("./page.pug");
var HzHeaderService_1 = require("../../../components/hz-header/HzHeaderService");
exports.page = core_1.PageFactory.createPage({
                                                 name: "6612",
                                                 resources: [],
                                                 template: page_pug_1.default
                                             });
exports.page.on(core_1.PageController.ON_RENDERING, null, function (eventObject, template, pageController) {
    var hzHeaderService = pageController.InjectorService.get(HzHeaderService_1.HzHeaderService);
    pageController.hzHeaderService = hzHeaderService;
    pageController.hzHeaderService.setTitle("Title");
});
exports.page.on(core_1.PageController.ON_SHOWN,
                null,
                function (eventObject, $page, $oldPage, oldPageRelativePosition, pageController) {
                    $page.find("#string-title")
                         .on("click", function () {
                             pageController.hzHeaderService.setTitle("String title");
                         });
                    $page.find("#html-title")
                         .on("click", function () {
                             pageController.hzHeaderService.setTitle("<span class=\"fa fa-html5\">HTML title</span>",
                                                                     true);
                         });
                    $page.find("#jq-title")
                         .on("click", function () {
                             pageController.hzHeaderService.setTitle($("<span>JQuery title</span>"));
                         });
                });
//# sourceMappingURL=page.js.map