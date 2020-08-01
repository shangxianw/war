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
    ViewData.prototype.initAll = function () {
        this.resGroup = [];
        this.layer = LayerManager.Ins().panel;
    };
    ViewData.prototype.destroyAll = function () {
        this.resGroup.length = 0;
        this.layer = null;
    };
    return ViewData;
}(DataBase));
__reflect(ViewData.prototype, "ViewData", ["IViewData"]);
//# sourceMappingURL=ViewData.js.map