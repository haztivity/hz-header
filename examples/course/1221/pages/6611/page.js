"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Davinchi. All Rights Reserved.
 */
var core_1 = require("@haztivity/core");
var template = require("./page.html!text");
var HzHeaderService_1 = require("../../../../../src/HzHeaderService");
exports.page = core_1.PageFactory.createPage({
    name: "6611",
    resources: [],
    template: template
});
exports.page.on(core_1.PageController.ON_RENDERING, null, function (eventObject, template, pageController) {
    console.log(pageController.options.name + " rendering");
    debugger;
    var hzHeaderService = pageController.InjectorService.get(HzHeaderService_1.HzHeaderService);
    hzHeaderService.setTitle("Test");
});
//# sourceMappingURL=page.js.map