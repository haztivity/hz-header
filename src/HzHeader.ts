/**
 * @license
 * Copyright Davinchi. All Rights Reserved.
 */
import {
    $,
    Navigator,
    INavigatorPageData,
    Component,
    ComponentController,
    EventEmitterFactory,
    PageManager,
    PageController
} from "@haztivity/core";
export interface IHzHeaderService {
    setTitle(title: string|JQuery, asHtml = false): void;
    getTitle(mode?: number): String|JQuery;
    addClass(classes): void;
    removeClass(classes): void;
}
@Component(
    {
        name: "HzHeader",
        dependencies: [
            $,
            EventEmitterFactory,
            Navigator,
            PageManager
        ]
    }
)
export class HzHeaderComponent extends ComponentController {
    public static readonly NAMESPACE = "hzHeader";
    public static readonly MODES = {
        html: 1,
        jquery: 2,
        text: 0
    };
    protected static readonly PREFIX = "hz-header";
    protected static readonly QUERY_TITLE = "[data-hz-header-title]";
    protected static readonly CLASS_COMPONENT = HzHeaderComponent.PREFIX;
    protected static readonly CLASS_TITLE = `${HzHeaderComponent.CLASS_COMPONENT}__title`;
    protected static readonly _DEFAULTS = {
        locale: {
            "es": {
                next: "Siguiente",
                prev: "Anterior",
                currentPage: "Página actual",
                totalPages: "Páginas totales",
                home: "Ir al inicio",
                index: "Mostrar índice"
            }
        },
        defaultLang: "es"
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
    constructor(_$: JQueryStatic, _EventEmitterFactory,) {
        super(_$, _EventEmitterFactory);
    }

    init(options, config?) {
        this._options = options;
        this._$element.addClass(HzHeaderComponent.CLASS_COMPONENT);
        this._getElements();
    }


    /**
     * Obtiene los elementos del DOM a utilizar
     * @protected
     */
    protected _getElements() {
        this._$title = this._$element.find(HzHeaderComponent.QUERY_TITLE);
        this._$title.addClass(HzHeaderComponent.CLASS_TITLE);
    }

    /**
     * Establece el valor del título
     * @param {String|JQuery}       title               Título a establecer. Puede ser un String o un objeto JQuery
     * @param {boolean}             [asHtml=false]      Indica si establecer el título como texto o html. Se utiliza $.text o $.html
     */
    public setTitle(title: string|JQuery, asHtml = false) {
        this.clear();
        if (title instanceof this._$) {
            this._$title.append(title);
        } else {
            if (asHtml != true) {
                this._$title.text(title);
            } else {
                this._$title.html(title);
            }
        }
    }

    /**
     * Resetea el titulo
     */
    public clear() {
        this._$title.empty();
    }

    /**
     * Devuelve el título actual
     * @param {Number}      [mode=0]            Indica cómo obtener el título. Se corresponde con uno de los modos de HzHeaderComponent.MODES
     * @returns {String|JQuery}
     * @see HzHeaderComponent.MODES
     */
    public getTitle(mode?: number): String|JQuery {
        let title;
        switch (mode) {
            case HzHeaderComponent.MODES.html:
                title = this._$title.html();
                break;
            case HzHeaderComponent.MODES.jquery:
                title = this._$title.children();
                break;
            default:
                title = this._$title.text();
                break;
        }
        return title;
    }

    /**
     * Añade clases css
     * @param {String}  classes Clases a añadir
     */
    public addClass(classes): void {
        this._$element.addClass(classes);
    }

    /**
     * Elimina clases css
     * @param {String}  classes Clases a eliminar
     */
    public removeClass(classes): void {
        this._$element.removeClass(classes);
    }
}