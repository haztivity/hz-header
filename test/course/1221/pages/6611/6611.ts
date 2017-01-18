/**
 * @license
 * Copyright Davinchi. All Rights Reserved.
 */
import {PageFactory, Page, PageController} from "davinchi_finsi";
import template from "./6611.html!text";
import {HzHeaderService} from "../../../../../src/HzHeaderService";
let page: Page = PageFactory.createPage(
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
page.on(
    PageController.ON_RENDERED, null, (eventObject, $page: JQuery, pageController: PageController) => {
        console.log(`${pageController.options.name} rendered`);
        if (pageController.isCompleted()) {
            $page.find("#myResource").data("hzResourceInstance").disable();
        }
    }
);
page.on(
    PageController.ON_SHOW, null, (eventObject, $page, $oldPage, oldPageRelativePosition, pageController) => {
        console.log(`${pageController.options.name} show start`);
    }
);
page.on(
    PageController.ON_SHOWN, null, (eventObject, $page, $oldPage, oldPageRelativePosition, pageController) => {
        console.log(`${pageController.options.name} show end`);
    }
);
page.on(
    PageController.ON_COMPLETE_CHANGE, null, (eventObject, isCompleted, $page, pageController) => {
        console.log(`${pageController.options.name} complete change`);
    }
);
page.on(
    PageController.ON_DESTROY, null, (eventObject, $page, pageController) => {
        console.log(`${pageController.options.name} destroy`);
    }
);
export {page as page6611};