/**
 * @license
 * Copyright Davinchi. All Rights Reserved.
 */
import {
    Service
} from "@haztivity/core";
import {IHzHeaderService, HzHeaderComponent} from "./HzHeaderComponent";
@Service(
    {
        name: "HzHeaderService",
        dependencies: [
            HzHeaderComponent
        ]
    }
)
export class HzHeaderService implements IHzHeaderService {
    constructor(_HzHeaderComponent) {
        let publish = [
            "setTitle",
            "getTitle",
            "clear",
            "addClass",
            "removeClass"
        ];
        for (let method of publish) {
            this[method] = _HzHeaderComponent[method].bind(_HzHeaderComponent);
        }
    }

    setTitle(title: string | JQuery, asHtml = false): void {
        return undefined;
    }

    getTitle(mode?: number): String | JQuery {
        return undefined;
    }

    addClass(classes): void {
        return undefined;
    }

    removeClass(classes): void {
        return undefined;
    }
}