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
        define(["require", "exports", "@haztivity/core", "./HzHeader"], factory);
    }
})(function (require, exports) {
    "use strict";
    /**
     * @license
     * Copyright Davinchi. All Rights Reserved.
     */
    var core_1 = require("@haztivity/core");
    var HzHeader_1 = require("./HzHeader");
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
                HzHeader_1.HzHeaderComponent
            ]
        })
    ], HzHeaderService);
    exports.HzHeaderService = HzHeaderService;
});
//# sourceMappingURL=HzHeaderService.js.map