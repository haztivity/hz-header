System.register(["davinchi_finsi", "../../../src/HzHeader", "./pages/6611/6611"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var davinchi_finsi_1, HzHeader_1, _6611_1;
    var sco;
    return {
        setters: [
            function (davinchi_finsi_1_1) {
                davinchi_finsi_1 = davinchi_finsi_1_1;
            },
            function (HzHeader_1_1) {
                HzHeader_1 = HzHeader_1_1;
            },
            function (_6611_1_1) {
                _6611_1 = _6611_1_1;
            }],
        execute: function () {
            sco = davinchi_finsi_1.ScoFactory.createSco({
                name: "1221",
                pages: [
                    _6611_1.page6611
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
    }
});
//# sourceMappingURL=index.js.map