var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) {
            d[p] = b[p];
        }
        function __() {
            this.constructor = d;
        }

        d.prototype = b === null
            ? Object.create(b)
            : (__.prototype = b.prototype, new __());
    };
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3
            ? target
            : desc === null
                                          ? desc = Object.getOwnPropertyDescriptor(target, key)
                                          : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
            r = Reflect.decorate(decorators,
                                 target,
                                 key,
                                 desc);
        } else {
            for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) {
                r = (c < 3
                        ? d(r)
                        : c > 3
                         ? d(target, key, r)
                         : d(target, key)) || r;
            }
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@haztivity/core"], factory);
    }
})(function (require, exports) {
    "use strict";
    /**
     * @license
     * Copyright Davinchi. All Rights Reserved.
     */
    var core_1 = require("@haztivity/core");
    var HzHeaderComponent = HzHeaderComponent_1 = (function (_super) {
        __extends(HzHeaderComponent, _super);
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
        function HzHeaderComponent(_$, _EventEmitterFactory) {
            return _super.call(this, _$, _EventEmitterFactory) || this;
        }
        HzHeaderComponent.prototype.init = function (options, config) {
            this._options = options;
            this._$element.addClass(HzHeaderComponent_1.CLASS_COMPONENT);
            this._getElements();
        };
        /**
         * Obtiene los elementos del DOM a utilizar
         * @protected
         */
        HzHeaderComponent.prototype._getElements = function () {
            this._$title = this._$element.find(HzHeaderComponent_1.QUERY_TITLE);
            this._$title.addClass(HzHeaderComponent_1.CLASS_TITLE);
        };
        /**
         * Establece el valor del título
         * @param {String|JQuery}       title               Título a establecer. Puede ser un String o un objeto JQuery
         * @param {boolean}             [asHtml=false]      Indica si establecer el título como texto o html. Se utiliza $.text o $.html
         */
        HzHeaderComponent.prototype.setTitle = function (title, asHtml) {
            if (asHtml === void 0) {
                asHtml = false;
            }
            this.clear();
            if (title instanceof this._$) {
                this._$title.append(title);
            }
            else {
                if (asHtml != true) {
                    this._$title.text(title);
                }
                else {
                    this._$title.html(title);
                }
            }
        };
        /**
         * Resetea el titulo
         */
        HzHeaderComponent.prototype.clear = function () {
            this._$title.empty();
        };
        /**
         * Devuelve el título actual
         * @param {Number}      [mode=0]            Indica cómo obtener el título. Se corresponde con uno de los modos de HzHeaderComponent.MODES
         * @returns {String|JQuery}
         * @see HzHeaderComponent.MODES
         */
        HzHeaderComponent.prototype.getTitle = function (mode) {
            var title;
            switch (mode) {
                case HzHeaderComponent_1.MODES.html:
                    title = this._$title.html();
                    break;
                case HzHeaderComponent_1.MODES.jquery:
                    title = this._$title.children();
                    break;
                default:
                    title = this._$title.text();
                    break;
            }
            return title;
        };
        /**
         * Añade clases css
         * @param {String}  classes Clases a añadir
         */
        HzHeaderComponent.prototype.addClass = function (classes) {
            this._$element.addClass(classes);
        };
        /**
         * Elimina clases css
         * @param {String}  classes Clases a eliminar
         */
        HzHeaderComponent.prototype.removeClass = function (classes) {
            this._$element.removeClass(classes);
        };
        return HzHeaderComponent;
    }(core_1.ComponentController));
    HzHeaderComponent.NAMESPACE = "hzHeader";
    HzHeaderComponent.MODES = {
        html: 1,
        jquery: 2,
        text: 0
    };
    HzHeaderComponent.PREFIX = "hz-header";
    HzHeaderComponent.QUERY_TITLE = "[data-hz-header-title]";
    HzHeaderComponent.CLASS_COMPONENT = HzHeaderComponent_1.PREFIX;
    HzHeaderComponent.CLASS_TITLE = HzHeaderComponent_1.CLASS_COMPONENT + "__title";
    HzHeaderComponent._DEFAULTS = {
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
    HzHeaderComponent = HzHeaderComponent_1 = __decorate([
        core_1.Component({
            name: "HzHeader",
            dependencies: [
                core_1.$,
                core_1.EventEmitterFactory,
                core_1.Navigator,
                core_1.PageManager
            ]
        })
    ], HzHeaderComponent);
    exports.HzHeaderComponent = HzHeaderComponent;
    var HzHeaderComponent_1;
});
//# sourceMappingURL=HzHeaderComponent.js.map