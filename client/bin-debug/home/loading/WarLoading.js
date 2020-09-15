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
var WarLoading = (function (_super) {
    __extends(WarLoading, _super);
    function WarLoading() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WarLoading.prototype.init = function () {
        this.skinName = "WarLoadingSkin";
    };
    WarLoading.prototype.initView = function () {
        this.prop.text = "0/0";
        this.loadPreload();
    };
    WarLoading.prototype.loadPreload = function () {
        ResManager.Ins().loadGroup(["preload"], this.OnCbFn, this, this.OnProFn, this.OnErrorFn);
    };
    WarLoading.prototype.OnCbFn = function (e) {
        var _this = this;
        setTimeout(function () {
            _this.closeSelf();
            ViewManager.Ins().open(HomePanel);
        }, 1000);
    };
    WarLoading.prototype.OnProFn = function (e) {
        this.prop.text = e.itemsLoaded + "/" + e.itemsTotal + "\n";
    };
    WarLoading.prototype.OnErrorFn = function (e) {
    };
    WarLoading.prototype.destroy = function () {
    };
    return WarLoading;
}(ViewBase));
__reflect(WarLoading.prototype, "WarLoading");
//# sourceMappingURL=WarLoading.js.map