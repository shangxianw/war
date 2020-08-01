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
var UIBase = (function (_super) {
    __extends(UIBase, _super);
    function UIBase() {
        var _this = _super.call(this) || this;
        _this.initAll();
        return _this;
    }
    UIBase.prototype.initAll = function () {
        this.hasCode = IDManager.Ins().getHashCode();
        this.init();
    };
    UIBase.prototype.destroyAll = function () {
        this.hasCode = null;
        this.destroy();
    };
    return UIBase;
}(eui.Component));
__reflect(UIBase.prototype, "UIBase");
//# sourceMappingURL=UIBase.js.map