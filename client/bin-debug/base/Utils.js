var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Utils = (function () {
    function Utils() {
    }
    // 获取对象的对象名
    Utils.GetClassNameByObj = function (value) {
        var type = typeof value;
        if (!value || (type != "object" && !value.prototype)) {
            return type;
        }
        var prototype = value.prototype ? value.prototype : Object.getPrototypeOf(value);
        if (prototype.hasOwnProperty("__class__")) {
            return prototype["__class__"];
        }
        var constructorString = prototype.constructor.toString().trim();
        var index = constructorString.indexOf("(");
        var className = constructorString.substring(9, index);
        Object.defineProperty(prototype, "__class__", {
            value: className,
            enumerable: false,
            writable: true
        });
        return className;
    };
    // 获取类名
    Utils.GetClassNameByClass = function (value) {
        var className;
        return className;
    };
    Utils.CheckNameValide = function (name) {
        if (name == "" || name == null) {
            return [false, "名字不能为空"];
        }
        if (name.length > 10) {
            return [false, "名字过长"];
        }
        if (0) {
            return [false, "敏感字"];
        }
        return [true, "ok"];
    };
    // ---------------------------------------------------------------------- 呼吸效果
    Utils.showBreathTween = function (target, show, query) {
        egret.Tween.removeTweens(target);
        if (show == true) {
            target.scaleX = 1;
            target.scaleY = 1;
            var scale = query.scale != null ? query.scale : 1.02;
            var time = query.time != null ? query.time : 1000;
            egret.Tween.get(target, { loop: true })
                .to({
                scaleX: scale,
                scaleY: scale
            }, time)
                .to({
                scaleX: 1,
                scaleY: 1
            }, time);
        }
    };
    Utils.GetKaIcon = function (kaId) {
        return "heroicon_" + kaId + "_png";
    };
    Utils.GetQualityBg = function (quality) {
        return "bg_card_di_" + quality + "_png";
    };
    Utils.GetHeadIcon = function (icon) {
        if (icon < 10)
            return "playericon_0" + icon;
        else
            return "playericon_" + icon;
    };
    Utils.GetHeadFrame = function (icon) {
        if (icon < 10)
            return "bg_phb_heroicon_up0" + icon;
        else
            return "bg_phb_heroicon_up" + icon;
    };
    Utils.GetMap = function (id) {
        return "map_" + id + "_jpg";
    };
    return Utils;
}());
__reflect(Utils.prototype, "Utils");
//# sourceMappingURL=Utils.js.map