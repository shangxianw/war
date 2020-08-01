var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var CBData = (function () {
    function CBData() {
        this.init();
    }
    CBData.prototype.init = function () {
    };
    CBData.prototype.packData1 = function (cbFn, thisObj) {
        if (cbFn == null || thisObj == null) {
            return;
        }
        this.cbFn = cbFn;
        this.thisObj = thisObj;
    };
    CBData.prototype.exec = function () {
        this.cbFn.call(this.thisObj);
    };
    CBData.prototype.destroy = function () {
    };
    return CBData;
}());
__reflect(CBData.prototype, "CBData");
//# sourceMappingURL=CBData.js.map