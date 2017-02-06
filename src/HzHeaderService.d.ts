/// <reference types="jquery" />
import {IHzHeaderService} from "./HzHeader";
export declare class HzHeaderService implements IHzHeaderService {
    constructor(_HzHeaderComponent: any);
    setTitle(title: string | JQuery, asHtml?: boolean): void;
    getTitle(mode?: number): String | JQuery;
    addClass(classes: any): void;
    removeClass(classes: any): void;
}
