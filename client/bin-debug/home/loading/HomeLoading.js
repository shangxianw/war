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
var HomeLoading = (function (_super) {
    __extends(HomeLoading, _super);
    function HomeLoading() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HomeLoading.prototype.init = function () {
        this.skinName = "HomeLoadingSkin";
    };
    HomeLoading.prototype.initView = function () {
        this.prop.text = "0/0";
        this.loadPreload();
    };
    HomeLoading.prototype.loadPreload = function () {
        ResManager.Ins().loadGroup(["test"], this.OnCbFn, this, this.OnProFn, this.OnErrorFn);
    };
    HomeLoading.prototype.OnCbFn = function (e) {
        // setTimeout(()=>{
        this.closeSelf();
        ViewManager.Ins().open(HomePanel);
        // }, 1000);
    };
    HomeLoading.prototype.OnProFn = function (e) {
        this.prop.text = e.itemsLoaded + "/" + e.itemsTotal + "\n";
    };
    HomeLoading.prototype.OnErrorFn = function (e) {
    };
    HomeLoading.prototype.destroy = function () {
    };
    return HomeLoading;
}(ViewBase));
__reflect(HomeLoading.prototype, "HomeLoading");
//# sourceMappingURL=HomeLoading.js.map