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
    };
    ViewBase.prototype.destroyAll = function () {
        this.info.destroyAll();
    };
    ViewBase.prototype.init = function () { }; // 创建对象时执行之前执行
    ViewBase.prototype.destroy = function () { }; // 关闭面板(移除舞台后)时执行
    ViewBase.prototype.initData = function (data) {
        if (data === void 0) { data = null; }
    }; // 添加到舞台之前执行
    ViewBase.prototype.open = function () { }; // 舞台刷新后
    return ViewBase;
}(UIBase));
__reflect(ViewBase.prototype, "ViewBase");
