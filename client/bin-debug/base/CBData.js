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
    CBData.prototype.packData = function (cbFn, thisObj, param) {
        if (param === void 0) { param = null; }
        this.cbFn = cbFn;
        this.thisObj = thisObj;
        this.param = param;
        return this;
    };
    CBData.prototype.exec = function (query) {
        if (this.cbFn == null || this.thisObj == null) {
            if (this.param != null)
                this.cbFn.call(this.thisObj, this.param, query);
            else
                this.cbFn.call(this.thisObj, query);
        }
    };
    return CBData;
}());
__reflect(CBData.prototype, "CBData");
//# sourceMappingURL=CBData.js.map