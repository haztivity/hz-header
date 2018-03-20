/**
 * @license
 * Copyright Davinchi. All Rights Reserved.
 */
import {PageFactory, Page, PageController, PageRegister} from "@haztivity/core";
import template from "./page.pug";
import {HzHeaderService} from "../../../components/hz-header/HzHeaderService";
import * as Prism from "prismjs";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-pug";
export let page: PageRegister = PageFactory.createPage(
    {
        name: "6612",
        resources: [],
        template: template
    }
);
page.on(
    PageController.ON_RENDERING, null, (eventObject, template, pageController) => {
        let hzHeaderService: HzHeaderService = pageController.InjectorService.get(HzHeaderService);
        pageController.hzHeaderService = hzHeaderService;
        pageController.hzHeaderService.setTitle("Title");
    }
);

page.on(
    PageController.ON_SHOWN, null, (eventObject, $page, $oldPage, oldPageRelativePosition, pageController) => {
        Prism.highlightAll(false);
        $page.find("#string-title")
             .on("click", () => {
                 pageController.hzHeaderService.setTitle("String title");
             });
        $page.find("#html-title")
             .on("click", () => {
                 pageController.hzHeaderService.setTitle(`<span class="fa fa-html5">HTML title</span>`, true);
             });
        $page.find("#jq-title")
             .on("click", () => {
                 pageController.hzHeaderService.setTitle($(`<span>JQuery title</span>`));
             })
    }
);