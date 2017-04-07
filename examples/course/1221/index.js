"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Davinchi. All Rights Reserved.
 */
var core_1 = require("@haztivity/core");
var HzHeader_1 = require("../../../src/HzHeader");
var page_1 = require("./pages/6611/page");
var sco = core_1.ScoFactory.createSco({
    name: "1221",
    pages: [
        page_1.page
    ],
    components: [
        HzHeader_1.HzHeaderComponent
    ]
});
//pageChangeStart
sco.on();
//pageChangeEnd
sco.on();
//pageComplete
sco.on();
//sco end
sco.on();
//error
sco.on();
sco.run();
//# sourceMappingURL=index.js.map