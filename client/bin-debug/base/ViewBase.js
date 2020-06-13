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
var ViewData = (function (_super) {
    __extends(ViewData, _super);
    function ViewData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ViewData.prototype.init = function () {
    };
    ViewData.prototype.destroy = function () {
    };
    ViewData.prototype.initAll = function () {
        _super.prototype.initAll.call(this);
    };
    ViewData.prototype.destroyAll = function () {
        _super.prototype.destroyAll.call(this);
    };
    return ViewData;
}(DataBase));
__reflect(ViewData.prototype, "ViewData");
var ViewBase = (function (_super) {
    __extends(ViewBase, _super);
    function ViewBase(skinName, data) {
        return _super.call(this, skinName, data) || this;
    }
    ViewBase.prototype.initAll = function (data) {
        this.viewInfo = new data();
        this["info"] = this.viewInfo;
        _super.prototype.initAll.call(this);
    };
    ViewBase.prototype.destroyAll = function () {
        _super.prototype.destroyAll.call(this);
    };
    return ViewBase;
}(UIBase));
__reflect(ViewBase.prototype, "ViewBase");
//# sourceMappingURL=ViewBase.js.map