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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJIekhlYWRlckNvbXBvbmVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xufTtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbihmdW5jdGlvbiAoZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICB2YXIgdiA9IGZhY3RvcnkocmVxdWlyZSwgZXhwb3J0cyk7XG4gICAgICAgIGlmICh2ICE9PSB1bmRlZmluZWQpIG1vZHVsZS5leHBvcnRzID0gdjtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCIsIFwiQGhhenRpdml0eS9jb3JlXCJdLCBmYWN0b3J5KTtcbiAgICB9XG59KShmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cykge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIC8qKlxuICAgICAqIEBsaWNlbnNlXG4gICAgICogQ29weXJpZ2h0IERhdmluY2hpLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqL1xuICAgIHZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGhhenRpdml0eS9jb3JlXCIpO1xuICAgIHZhciBIekhlYWRlckNvbXBvbmVudCA9IEh6SGVhZGVyQ29tcG9uZW50XzEgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMoSHpIZWFkZXJDb21wb25lbnQsIF9zdXBlcik7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb21wb25lbnRlIGRlIGNhYmVjZXJhIHBhcmEgaGF6dGl2aXR5LlxuICAgICAgICAgKiBAcGFyYW0gXyRcbiAgICAgICAgICogQHBhcmFtIF9FdmVudEVtaXR0ZXJGYWN0b3J5XG4gICAgICAgICAqIEBwYXJhbSBfTmF2aWdhdG9yXG4gICAgICAgICAqIEBwYXJhbSBfUGFnZU1hbmFnZXJcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogZGl2KGRhdGEtaHotY29tcG9uZW50PVwiSHpIZWFkZXJcIilcbiAgICAgICAgICogICAgICBoMShkYXRhLWh6LWhlYWRlci10aXRsZSlcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIEh6SGVhZGVyQ29tcG9uZW50KF8kLCBfRXZlbnRFbWl0dGVyRmFjdG9yeSkge1xuICAgICAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIF8kLCBfRXZlbnRFbWl0dGVyRmFjdG9yeSkgfHwgdGhpcztcbiAgICAgICAgfVxuICAgICAgICBIekhlYWRlckNvbXBvbmVudC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uIChvcHRpb25zLCBjb25maWcpIHtcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICAgICAgdGhpcy5fJGVsZW1lbnQuYWRkQ2xhc3MoSHpIZWFkZXJDb21wb25lbnRfMS5DTEFTU19DT01QT05FTlQpO1xuICAgICAgICAgICAgdGhpcy5fZ2V0RWxlbWVudHMoKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE9idGllbmUgbG9zIGVsZW1lbnRvcyBkZWwgRE9NIGEgdXRpbGl6YXJcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgSHpIZWFkZXJDb21wb25lbnQucHJvdG90eXBlLl9nZXRFbGVtZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuXyR0aXRsZSA9IHRoaXMuXyRlbGVtZW50LmZpbmQoSHpIZWFkZXJDb21wb25lbnRfMS5RVUVSWV9USVRMRSk7XG4gICAgICAgICAgICB0aGlzLl8kdGl0bGUuYWRkQ2xhc3MoSHpIZWFkZXJDb21wb25lbnRfMS5DTEFTU19USVRMRSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFc3RhYmxlY2UgZWwgdmFsb3IgZGVsIHTDrXR1bG9cbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd8SlF1ZXJ5fSAgICAgICB0aXRsZSAgICAgICAgICAgICAgIFTDrXR1bG8gYSBlc3RhYmxlY2VyLiBQdWVkZSBzZXIgdW4gU3RyaW5nIG8gdW4gb2JqZXRvIEpRdWVyeVxuICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59ICAgICAgICAgICAgIFthc0h0bWw9ZmFsc2VdICAgICAgSW5kaWNhIHNpIGVzdGFibGVjZXIgZWwgdMOtdHVsbyBjb21vIHRleHRvIG8gaHRtbC4gU2UgdXRpbGl6YSAkLnRleHQgbyAkLmh0bWxcbiAgICAgICAgICovXG4gICAgICAgIEh6SGVhZGVyQ29tcG9uZW50LnByb3RvdHlwZS5zZXRUaXRsZSA9IGZ1bmN0aW9uICh0aXRsZSwgYXNIdG1sKSB7XG4gICAgICAgICAgICBpZiAoYXNIdG1sID09PSB2b2lkIDApIHsgYXNIdG1sID0gZmFsc2U7IH1cbiAgICAgICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgICAgIGlmICh0aXRsZSBpbnN0YW5jZW9mIHRoaXMuXyQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl8kdGl0bGUuYXBwZW5kKHRpdGxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChhc0h0bWwgIT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl8kdGl0bGUudGV4dCh0aXRsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl8kdGl0bGUuaHRtbCh0aXRsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVzZXRlYSBlbCB0aXR1bG9cbiAgICAgICAgICovXG4gICAgICAgIEh6SGVhZGVyQ29tcG9uZW50LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuXyR0aXRsZS5lbXB0eSgpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogRGV2dWVsdmUgZWwgdMOtdHVsbyBhY3R1YWxcbiAgICAgICAgICogQHBhcmFtIHtOdW1iZXJ9ICAgICAgW21vZGU9MF0gICAgICAgICAgICBJbmRpY2EgY8OzbW8gb2J0ZW5lciBlbCB0w610dWxvLiBTZSBjb3JyZXNwb25kZSBjb24gdW5vIGRlIGxvcyBtb2RvcyBkZSBIekhlYWRlckNvbXBvbmVudC5NT0RFU1xuICAgICAgICAgKiBAcmV0dXJucyB7U3RyaW5nfEpRdWVyeX1cbiAgICAgICAgICogQHNlZSBIekhlYWRlckNvbXBvbmVudC5NT0RFU1xuICAgICAgICAgKi9cbiAgICAgICAgSHpIZWFkZXJDb21wb25lbnQucHJvdG90eXBlLmdldFRpdGxlID0gZnVuY3Rpb24gKG1vZGUpIHtcbiAgICAgICAgICAgIHZhciB0aXRsZTtcbiAgICAgICAgICAgIHN3aXRjaCAobW9kZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgSHpIZWFkZXJDb21wb25lbnRfMS5NT0RFUy5odG1sOlxuICAgICAgICAgICAgICAgICAgICB0aXRsZSA9IHRoaXMuXyR0aXRsZS5odG1sKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgSHpIZWFkZXJDb21wb25lbnRfMS5NT0RFUy5qcXVlcnk6XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlID0gdGhpcy5fJHRpdGxlLmNoaWxkcmVuKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlID0gdGhpcy5fJHRpdGxlLnRleHQoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGl0bGU7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBw7FhZGUgY2xhc2VzIGNzc1xuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gIGNsYXNzZXMgQ2xhc2VzIGEgYcOxYWRpclxuICAgICAgICAgKi9cbiAgICAgICAgSHpIZWFkZXJDb21wb25lbnQucHJvdG90eXBlLmFkZENsYXNzID0gZnVuY3Rpb24gKGNsYXNzZXMpIHtcbiAgICAgICAgICAgIHRoaXMuXyRlbGVtZW50LmFkZENsYXNzKGNsYXNzZXMpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogRWxpbWluYSBjbGFzZXMgY3NzXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSAgY2xhc3NlcyBDbGFzZXMgYSBlbGltaW5hclxuICAgICAgICAgKi9cbiAgICAgICAgSHpIZWFkZXJDb21wb25lbnQucHJvdG90eXBlLnJlbW92ZUNsYXNzID0gZnVuY3Rpb24gKGNsYXNzZXMpIHtcbiAgICAgICAgICAgIHRoaXMuXyRlbGVtZW50LnJlbW92ZUNsYXNzKGNsYXNzZXMpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gSHpIZWFkZXJDb21wb25lbnQ7XG4gICAgfShjb3JlXzEuQ29tcG9uZW50Q29udHJvbGxlcikpO1xuICAgIEh6SGVhZGVyQ29tcG9uZW50Lk5BTUVTUEFDRSA9IFwiaHpIZWFkZXJcIjtcbiAgICBIekhlYWRlckNvbXBvbmVudC5NT0RFUyA9IHtcbiAgICAgICAgaHRtbDogMSxcbiAgICAgICAganF1ZXJ5OiAyLFxuICAgICAgICB0ZXh0OiAwXG4gICAgfTtcbiAgICBIekhlYWRlckNvbXBvbmVudC5QUkVGSVggPSBcImh6LWhlYWRlclwiO1xuICAgIEh6SGVhZGVyQ29tcG9uZW50LlFVRVJZX1RJVExFID0gXCJbZGF0YS1oei1oZWFkZXItdGl0bGVdXCI7XG4gICAgSHpIZWFkZXJDb21wb25lbnQuQ0xBU1NfQ09NUE9ORU5UID0gSHpIZWFkZXJDb21wb25lbnRfMS5QUkVGSVg7XG4gICAgSHpIZWFkZXJDb21wb25lbnQuQ0xBU1NfVElUTEUgPSBIekhlYWRlckNvbXBvbmVudF8xLkNMQVNTX0NPTVBPTkVOVCArIFwiX190aXRsZVwiO1xuICAgIEh6SGVhZGVyQ29tcG9uZW50Ll9ERUZBVUxUUyA9IHtcbiAgICAgICAgbG9jYWxlOiB7XG4gICAgICAgICAgICBcImVzXCI6IHtcbiAgICAgICAgICAgICAgICBuZXh0OiBcIlNpZ3VpZW50ZVwiLFxuICAgICAgICAgICAgICAgIHByZXY6IFwiQW50ZXJpb3JcIixcbiAgICAgICAgICAgICAgICBjdXJyZW50UGFnZTogXCJQw6FnaW5hIGFjdHVhbFwiLFxuICAgICAgICAgICAgICAgIHRvdGFsUGFnZXM6IFwiUMOhZ2luYXMgdG90YWxlc1wiLFxuICAgICAgICAgICAgICAgIGhvbWU6IFwiSXIgYWwgaW5pY2lvXCIsXG4gICAgICAgICAgICAgICAgaW5kZXg6IFwiTW9zdHJhciDDrW5kaWNlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGVmYXVsdExhbmc6IFwiZXNcIlxuICAgIH07XG4gICAgSHpIZWFkZXJDb21wb25lbnQgPSBIekhlYWRlckNvbXBvbmVudF8xID0gX19kZWNvcmF0ZShbXG4gICAgICAgIGNvcmVfMS5Db21wb25lbnQoe1xuICAgICAgICAgICAgbmFtZTogXCJIekhlYWRlclwiLFxuICAgICAgICAgICAgZGVwZW5kZW5jaWVzOiBbXG4gICAgICAgICAgICAgICAgY29yZV8xLiQsXG4gICAgICAgICAgICAgICAgY29yZV8xLkV2ZW50RW1pdHRlckZhY3RvcnksXG4gICAgICAgICAgICAgICAgY29yZV8xLk5hdmlnYXRvcixcbiAgICAgICAgICAgICAgICBjb3JlXzEuUGFnZU1hbmFnZXJcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSlcbiAgICBdLCBIekhlYWRlckNvbXBvbmVudCk7XG4gICAgZXhwb3J0cy5IekhlYWRlckNvbXBvbmVudCA9IEh6SGVhZGVyQ29tcG9uZW50O1xuICAgIHZhciBIekhlYWRlckNvbXBvbmVudF8xO1xufSk7XG4iXSwiZmlsZSI6Ikh6SGVhZGVyQ29tcG9uZW50LmpzIn0=
