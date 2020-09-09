var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var TestRedPointMgr = (function () {
    function TestRedPointMgr() {
    }
    TestRedPointMgr.Init = function (stage) {
        RedPointMgr.Ins();
        var index = 0;
        for (var _i = 0, _a = RedPointMgr.Ins().redMap.values(); _i < _a.length; _i++) {
            var item = _a[_i];
            var lb = new eui.Label();
            lb.text = item.redName;
            lb.y = index * 50;
            stage.addChild(lb);
            index += 1;
        }
    };
    return TestRedPointMgr;
}());
__reflect(TestRedPointMgr.prototype, "TestRedPointMgr");
//# sourceMappingURL=TestRedPointMgr.js.map