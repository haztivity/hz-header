System.register(["@haztivity/core", "../../../src/HzHeader", "./pages/6611/page"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, HzHeader_1, page_1, sco;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (HzHeader_1_1) {
                HzHeader_1 = HzHeader_1_1;
            },
            function (page_1_1) {
                page_1 = page_1_1;
            }
        ],
        execute: function () {
            sco = core_1.ScoFactory.createSco({
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
        }
    };
});
//# sourceMappingURL=index.js.map