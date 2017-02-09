var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@haztivity/core", "./HzHeaderComponent"], factory);
    }
})(function (require, exports) {
    "use strict";
    /**
     * @license
     * Copyright Davinchi. All Rights Reserved.
     */
    var core_1 = require("@haztivity/core");
    var HzHeaderComponent_1 = require("./HzHeaderComponent");
    var HzHeaderService = (function () {
        function HzHeaderService(_HzHeaderComponent) {
            var publish = [
                "setTitle",
                "getTitle",
                "clear",
                "addClass",
                "removeClass"
            ];
            for (var _i = 0, publish_1 = publish; _i < publish_1.length; _i++) {
                var method = publish_1[_i];
                this[method] = _HzHeaderComponent[method].bind(_HzHeaderComponent);
            }
        }
        HzHeaderService.prototype.setTitle = function (title, asHtml) {
            if (asHtml === void 0) { asHtml = false; }
            return undefined;
        };
        HzHeaderService.prototype.getTitle = function (mode) {
            return undefined;
        };
        HzHeaderService.prototype.addClass = function (classes) {
            return undefined;
        };
        HzHeaderService.prototype.removeClass = function (classes) {
            return undefined;
        };
        return HzHeaderService;
    }());
    HzHeaderService = __decorate([
        core_1.Service({
            name: "HzHeaderService",
            dependencies: [
                HzHeaderComponent_1.HzHeaderComponent
            ]
        })
    ], HzHeaderService);
    exports.HzHeaderService = HzHeaderService;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJIekhlYWRlclNlcnZpY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuKGZ1bmN0aW9uIChmYWN0b3J5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIHZhciB2ID0gZmFjdG9yeShyZXF1aXJlLCBleHBvcnRzKTtcbiAgICAgICAgaWYgKHYgIT09IHVuZGVmaW5lZCkgbW9kdWxlLmV4cG9ydHMgPSB2O1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgXCJAaGF6dGl2aXR5L2NvcmVcIiwgXCIuL0h6SGVhZGVyQ29tcG9uZW50XCJdLCBmYWN0b3J5KTtcbiAgICB9XG59KShmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cykge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIC8qKlxuICAgICAqIEBsaWNlbnNlXG4gICAgICogQ29weXJpZ2h0IERhdmluY2hpLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqL1xuICAgIHZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGhhenRpdml0eS9jb3JlXCIpO1xuICAgIHZhciBIekhlYWRlckNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4vSHpIZWFkZXJDb21wb25lbnRcIik7XG4gICAgdmFyIEh6SGVhZGVyU2VydmljZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIEh6SGVhZGVyU2VydmljZShfSHpIZWFkZXJDb21wb25lbnQpIHtcbiAgICAgICAgICAgIHZhciBwdWJsaXNoID0gW1xuICAgICAgICAgICAgICAgIFwic2V0VGl0bGVcIixcbiAgICAgICAgICAgICAgICBcImdldFRpdGxlXCIsXG4gICAgICAgICAgICAgICAgXCJjbGVhclwiLFxuICAgICAgICAgICAgICAgIFwiYWRkQ2xhc3NcIixcbiAgICAgICAgICAgICAgICBcInJlbW92ZUNsYXNzXCJcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIHB1Ymxpc2hfMSA9IHB1Ymxpc2g7IF9pIDwgcHVibGlzaF8xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBtZXRob2QgPSBwdWJsaXNoXzFbX2ldO1xuICAgICAgICAgICAgICAgIHRoaXNbbWV0aG9kXSA9IF9IekhlYWRlckNvbXBvbmVudFttZXRob2RdLmJpbmQoX0h6SGVhZGVyQ29tcG9uZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBIekhlYWRlclNlcnZpY2UucHJvdG90eXBlLnNldFRpdGxlID0gZnVuY3Rpb24gKHRpdGxlLCBhc0h0bWwpIHtcbiAgICAgICAgICAgIGlmIChhc0h0bWwgPT09IHZvaWQgMCkgeyBhc0h0bWwgPSBmYWxzZTsgfVxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfTtcbiAgICAgICAgSHpIZWFkZXJTZXJ2aWNlLnByb3RvdHlwZS5nZXRUaXRsZSA9IGZ1bmN0aW9uIChtb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9O1xuICAgICAgICBIekhlYWRlclNlcnZpY2UucHJvdG90eXBlLmFkZENsYXNzID0gZnVuY3Rpb24gKGNsYXNzZXMpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH07XG4gICAgICAgIEh6SGVhZGVyU2VydmljZS5wcm90b3R5cGUucmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbiAoY2xhc3Nlcykge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIEh6SGVhZGVyU2VydmljZTtcbiAgICB9KCkpO1xuICAgIEh6SGVhZGVyU2VydmljZSA9IF9fZGVjb3JhdGUoW1xuICAgICAgICBjb3JlXzEuU2VydmljZSh7XG4gICAgICAgICAgICBuYW1lOiBcIkh6SGVhZGVyU2VydmljZVwiLFxuICAgICAgICAgICAgZGVwZW5kZW5jaWVzOiBbXG4gICAgICAgICAgICAgICAgSHpIZWFkZXJDb21wb25lbnRfMS5IekhlYWRlckNvbXBvbmVudFxuICAgICAgICAgICAgXVxuICAgICAgICB9KVxuICAgIF0sIEh6SGVhZGVyU2VydmljZSk7XG4gICAgZXhwb3J0cy5IekhlYWRlclNlcnZpY2UgPSBIekhlYWRlclNlcnZpY2U7XG59KTtcbiJdLCJmaWxlIjoiSHpIZWFkZXJTZXJ2aWNlLmpzIn0=
