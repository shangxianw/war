var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var ResData = (function (_super) {
    __extends(ResData, _super);
    function ResData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResData.prototype.init = function () {
        this.resName = "";
        this.referenceCount = 0;
    };
    ResData.prototype.destroy = function () {
        this.resName = "";
        this.referenceCount = 0;
    };
    ResData.prototype.packData = function (resName) {
        this.resName = resName;
        return this;
    };
    ResData.prototype.reduceCount = function (currTime) {
        this.referenceCount = Math.max(this.referenceCount - 1, 0);
        if (this.referenceCount <= 0)
            this.destroyTime = currTime + ResManager.Ins().READY_DERTROY_SECOND;
    };
    ResData.prototype.addCount = function () {
        this.referenceCount++;
        this.destroyTime = null;
    };
    ResData.prototype.canDestroy = function (currTime) {
        if (this.destroyTime == null || this.referenceCount > 0)
            return false;
        return this.destroyTime >= currTime;
    };
    return ResData;
}(DataBase));
__reflect(ResData.prototype, "ResData");
//# sourceMappingURL=ResData.js.map