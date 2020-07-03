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
var DragonBonesEffect = (function (_super) {
    __extends(DragonBonesEffect, _super);
    function DragonBonesEffect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DragonBonesEffect.prototype.init = function () {
    };
    DragonBonesEffect.prototype.destroy = function () {
        this.egretFactory.clear();
        this.armatureDisplay.dbClear();
    };
    DragonBonesEffect.prototype.initData = function (fileName, clipName, action, count) {
        if (action === void 0) { action = null; }
        if (count === void 0) { count = 0; }
        if (fileName == null || clipName == null) {
            LogUtils.Error("\u53C2\u6570\u9519\u8BEF");
            return false;
        }
        var dragonbonesData = RES.getRes(fileName + "_ske_json");
        var textureData = RES.getRes(fileName + "_tex_json");
        var texture = RES.getRes(fileName + "_tex_png");
        if (dragonbonesData == null || textureData == null || texture == null) {
            LogUtils.Error("\u8D44\u6E90\u672A\u52A0\u8F7D");
            return false;
        }
        this.egretFactory = dragonBones.EgretFactory.factory;
        this.egretFactory.parseDragonBonesData(dragonbonesData);
        this.egretFactory.parseTextureAtlasData(textureData, texture);
        this.armatureDisplay = this.egretFactory.buildArmatureDisplay(clipName);
        this.addChild(this.armatureDisplay);
        if (action != null)
            this.play(action, count);
        return true;
    };
    DragonBonesEffect.prototype.play = function (action, count) {
        if (count === void 0) { count = 0; }
        this.armatureDisplay.animation.play("199030", count);
    };
    return DragonBonesEffect;
}(UIBase));
__reflect(DragonBonesEffect.prototype, "DragonBonesEffect");
//# sourceMappingURL=DragonBonesEffect.js.map