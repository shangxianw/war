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
        this.refCount = 0;
    };
    ResData.prototype.destroy = function () {
        this.resName = "";
        this.refCount = 0;
    };
    ResData.prototype.packData = function (resName) {
        this.resName = resName;
        this.refCount = 0;
        return this;
    };
    ResData.prototype.reduceRefCount = function (currTime) {
        this.refCount = Math.max(this.refCount - 1, 0);
        if (this.refCount <= 0)
            this.destroyTime = currTime + ResManager.Ins().READY_DERTROY_SECOND;
    };
    ResData.prototype.addRefCount = function () {
        this.refCount++;
        this.destroyTime = null;
    };
    return ResData;
}(DataBase));
__reflect(ResData.prototype, "ResData");
//# sourceMappingURL=ResData.js.map