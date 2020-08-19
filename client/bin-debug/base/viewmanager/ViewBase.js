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
var ViewBase = (function (_super) {
    __extends(ViewBase, _super);
    function ViewBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ViewBase.prototype.initAll = function () {
        var classNameArray = this.constructor.prototype.__class__.split(".");
        var cls = window[classNameArray[0]][classNameArray[1] + "Data"];
        this.info = new cls();
        _super.prototype.initAll.call(this);
    };
    ViewBase.prototype.destroyAll = function () {
        this.info.destroyAll();
        this.destroy();
    };
    ViewBase.prototype.destroy = function () { }; // 关闭面板(移除舞台后)时执行
    // ----------在执行constructor时
    ViewBase.prototype.init = function () {
    };
    // 执行constructor后，添加到舞台前
    ViewBase.prototype.openBefore = function () {
    };
    // 添加到舞台后
    ViewBase.prototype.open = function () {
    };
    ViewBase.prototype.closeBefore = function () {
    };
    ViewBase.prototype.close = function () {
    };
    // ---------------------------------------------------------------------- 显示与隐藏，不会从舞台中移除，用于二级页面
    ViewBase.prototype.show = function () {
    };
    ViewBase.prototype.hide = function () {
    };
    // ---------------------------------------------------------------------- 
    ViewBase.prototype.addAttrListener = function () {
    };
    return ViewBase;
}(UIBase));
__reflect(ViewBase.prototype, "ViewBase");
//# sourceMappingURL=ViewBase.js.map