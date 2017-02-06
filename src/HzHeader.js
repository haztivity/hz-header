(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./HzHeaderComponent", "./HzHeaderService"], factory);
    }
})(function (require, exports) {
    "use strict";
    /**
     * @license
     * Copyright Davinchi. All Rights Reserved.
     */
    var HzHeaderComponent_1 = require("./HzHeaderComponent");
    exports.HzHeaderComponent = HzHeaderComponent_1.HzHeaderComponent;
    var HzHeaderService_1 = require("./HzHeaderService");
    exports.HzHeaderService = HzHeaderService_1.HzHeaderService;
});
//# sourceMappingURL=HzHeader.js.map