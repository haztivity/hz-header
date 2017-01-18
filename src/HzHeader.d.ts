/// <reference types="jquery" />
/// <reference types="core-js" />
/**
 * @license
 * Copyright Davinchi. All Rights Reserved.
 */
import {ComponentController} from "davinchi_finsi";
export interface IHzHeaderService {
    setTitle(title: string | JQuery, asHtml?: boolean): void;
    getTitle(mode?: number): String | JQuery;
    addClass(classes: any): void;
    removeClass(classes: any): void;
}
export declare class HzHeaderComponent extends ComponentController {
    static readonly NAMESPACE: string;
    static readonly MODES: {
        html: number;
        jquery: number;
        text: number;
    };
    protected static readonly PREFIX: string;
    protected static readonly QUERY_TITLE: string;
    protected static readonly CLASS_COMPONENT: string;
    protected static readonly CLASS_TITLE: string;
    protected static readonly _DEFAULTS: {
        locale: {
            "es": {
                next: string;
                prev: string;
                currentPage: string;
                totalPages: string;
                home: string;
                index: string;
            };
        };
        defaultLang: string;
    };
    protected _$title: JQuery;

    /**
     * Componente de cabecera para haztivity.
     * @param _$
     * @param _EventEmitterFactory
     * @param _Navigator
     * @param _PageManager
     * @example
     * div(data-hz-component="HzHeader")
     *      h1(data-hz-header-title)
     */
    constructor(_$: JQueryStatic, _EventEmitterFactory: any);

    init(options: any, config?: any): void;

    /**
     * Obtiene los elementos del DOM a utilizar
     * @protected
     */
    protected _getElements(): void;

    /**
     * Establece el valor del título
     * @param {String|JQuery}       title               Título a establecer. Puede ser un String o un objeto JQuery
     * @param {boolean}             [asHtml=false]      Indica si establecer el título como texto o html. Se utiliza $.text o $.html
     */
    setTitle(title: string | JQuery, asHtml?: boolean): void;

    /**
     * Resetea el titulo
     */
    clear(): void;

    /**
     * Devuelve el título actual
     * @param {Number}      [mode=0]            Indica cómo obtener el título. Se corresponde con uno de los modos de HzHeaderComponent.MODES
     * @returns {String|JQuery}
     * @see HzHeaderComponent.MODES
     */
    getTitle(mode?: number): String | JQuery;

    /**
     * Añade clases css
     * @param {String}  classes Clases a añadir
     */
    addClass(classes: any): void;

    /**
     * Elimina clases css
     * @param {String}  classes Clases a eliminar
     */
    removeClass(classes: any): void;
}
