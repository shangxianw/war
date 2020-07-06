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
var WItemRenderBase = (function (_super) {
    __extends(WItemRenderBase, _super);
    function WItemRenderBase(skinName) {
        if (skinName === void 0) { skinName = null; }
        var _this = _super.call(this) || this;
        if (skinName != null)
            _this.skinName = skinName;
        _this.initAll();
        return _this;
    }
    WItemRenderBase.prototype.init = function () { };
    ;
    WItemRenderBase.prototype.initAll = function () {
        this.iii = IDManager.Ins().getNewId();
        this.attrHash = new Hash();
        this.otherAttrHash = new Hash();
        this.touchList = [];
        var cls = egret.getDefinitionByName(Utils.GetClassNameByObj(this) + "Data");
        if (cls != null)
            this["info"] = new cls();
        this.init();
    };
    WItemRenderBase.prototype.destroyAll = function () {
        this.removeAllAttrListener();
        this.attrHash = null;
        this.removeAllAttCB();
        this.otherAttrHash = null;
        this.removeAllEvent();
        this.touchList = null;
        this.destroy();
    };
    return WItemRenderBase;
}(eui.ItemRenderer));
__reflect(WItemRenderBase.prototype, "WItemRenderBase");
//# sourceMappingURL=WItemRenderBase.js.map