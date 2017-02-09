/**
 * @license
 * Copyright Davinchi. All Rights Reserved.
 */
import {PageFactory, Page, PageController} from "@haztivity/core";
import template from "./page.html!text";
import {HzHeaderService} from "../../../../../src/HzHeaderService";
export let page: Page = PageFactory.createPage(
    {
        name: "6611",
        resources: [],
        template: template
    }
);
page.on(
    PageController.ON_RENDERING, null, (eventObject, template, pageController) => {
        console.log(`${pageController.options.name} rendering`);
        debugger;
        let hzHeaderService: HzHeaderService = pageController.InjectorService.get(HzHeaderService);
        hzHeaderService.setTitle("Test");
    }
);