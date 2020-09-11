var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var TweenUtils = (function () {
    function TweenUtils() {
    }
    TweenUtils.RemoveTween = function (target) {
        egret.Tween.removeTweens(target);
    };
    /**
     * @param starInScale1 是否从1开始进行缩放
     */
    TweenUtils.Scale = function (target, scaleX, scaleY, time, starInScale1) {
        if (scaleX === void 0) { scaleX = 0.9; }
        if (scaleY === void 0) { scaleY = 0.9; }
        if (time === void 0) { time = 60; }
        if (starInScale1 === void 0) { starInScale1 = true; }
        TweenUtils.RemoveTween(target);
        if (starInScale1 == true)
            target.scaleX = target.scaleY = 1;
        egret.Tween.get(target).to({ scaleX: scaleX, scaleY: scaleY }, time);
    };
    return TweenUtils;
}());
__reflect(TweenUtils.prototype, "TweenUtils");
//# sourceMappingURL=TweenUtils.js.map