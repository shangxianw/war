var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var CBData = (function () {
    function CBData() {
    }
    CBData.prototype.init = function () {
    };
    CBData.prototype.destroy = function () {
    };
    CBData.prototype.PackData = function (cbFn, thisObj, param) {
        if (param === void 0) { param = null; }
        this.cbFn = cbFn;
        this.thisObj = thisObj;
        this.param = param;
        return this;
    };
    return CBData;
}());
__reflect(CBData.prototype, "CBData");
//# sourceMappingURL=CBData.js.map