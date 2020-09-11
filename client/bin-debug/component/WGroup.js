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
var WGroup = (function (_super) {
    __extends(WGroup, _super);
    function WGroup() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.onTouchBegin, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.onDestroy, _this);
        return _this;
    }
    WGroup.prototype.onDestroy = function () {
        TweenUtils.RemoveTween(this);
        this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onDestroy, this);
    };
    WGroup.prototype.onTouchBegin = function (e) {
        TweenUtils.Scale(this, 0.9, 0.9, 60, true);
        this.$stage.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onTouchCancle, this);
        this.$stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onStageTouchEnd, this);
    };
    WGroup.prototype.onTouchCancle = function (e) {
        TweenUtils.Scale(this, 1, 1, 60, false);
        var stage = e.$currentTarget;
        stage.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onTouchCancle, this);
        stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onStageTouchEnd, this);
    };
    WGroup.prototype.onStageTouchEnd = function (e) {
        TweenUtils.Scale(this, 1, 1, 60, false);
        var stage = e.$currentTarget;
        stage.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onTouchCancle, this);
        stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onStageTouchEnd, this);
    };
    return WGroup;
}(eui.Group));
__reflect(WGroup.prototype, "WGroup");
//# sourceMappingURL=WGroup.js.map