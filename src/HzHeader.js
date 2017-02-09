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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJIekhlYWRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKGZhY3RvcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgdmFyIHYgPSBmYWN0b3J5KHJlcXVpcmUsIGV4cG9ydHMpO1xuICAgICAgICBpZiAodiAhPT0gdW5kZWZpbmVkKSBtb2R1bGUuZXhwb3J0cyA9IHY7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShbXCJyZXF1aXJlXCIsIFwiZXhwb3J0c1wiLCBcIi4vSHpIZWFkZXJDb21wb25lbnRcIiwgXCIuL0h6SGVhZGVyU2VydmljZVwiXSwgZmFjdG9yeSk7XG4gICAgfVxufSkoZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBEYXZpbmNoaS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKi9cbiAgICB2YXIgSHpIZWFkZXJDb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuL0h6SGVhZGVyQ29tcG9uZW50XCIpO1xuICAgIGV4cG9ydHMuSHpIZWFkZXJDb21wb25lbnQgPSBIekhlYWRlckNvbXBvbmVudF8xLkh6SGVhZGVyQ29tcG9uZW50O1xuICAgIHZhciBIekhlYWRlclNlcnZpY2VfMSA9IHJlcXVpcmUoXCIuL0h6SGVhZGVyU2VydmljZVwiKTtcbiAgICBleHBvcnRzLkh6SGVhZGVyU2VydmljZSA9IEh6SGVhZGVyU2VydmljZV8xLkh6SGVhZGVyU2VydmljZTtcbn0pO1xuIl0sImZpbGUiOiJIekhlYWRlci5qcyJ9
