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
/**
 * UI基类
 * 存在一个唯一id，以记录该对象
 * 支持数据分发，但因为该功能不是每个对象都会用到，所以用到惰性的方式
 */
var UIBase = (function (_super) {
    __extends(UIBase, _super);
    function UIBase(skinName) {
        if (skinName === void 0) { skinName = null; }
        var _this = _super.call(this) || this;
        if (skinName != null)
            _this.skinName = skinName;
        _this.initAll();
        return _this;
    }
    UIBase.prototype.init = function () { };
    ;
    UIBase.prototype.initAll = function () {
        this.iii = IDManager.Ins().getNewId();
        this.attrHash = new Hash();
        this.otherAttrHash = new Hash();
        this.touchList = [];
        var cls = egret.getDefinitionByName(Utils.GetClassNameByObj(this) + "Data");
        if (cls != null)
            this["info"] = new cls();
        this.init();
    };
    UIBase.prototype.destroyAll = function () {
        this.removeAllAttrListener();
        this.attrHash = null;
        this.removeAllAttCB();
        this.otherAttrHash = null;
        this.removeAllEvent();
        this.touchList = null;
        this.destroy();
    };
    return UIBase;
}(eui.Component));
__reflect(UIBase.prototype, "UIBase");
//# sourceMappingURL=UIBase.js.map