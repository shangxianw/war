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
 * 继承的按钮类
 * 主要是做一些点击效果，和增加多余字段
 * 当一个按钮里有多个可变元素时，可给其元素id定义为以下几种名称，这样在使用的时候就不需要管逻辑如何，只需要处理UI的情况
 * 即用相同的id名称去适配多个UI，只要UI元素的id是相同的即可
 */
var WButton = (function (_super) {
    __extends(WButton, _super);
    function WButton() {
        var _this = _super.call(this) || this;
        _this.touchChildren = false;
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.onDestroy, _this);
        return _this;
    }
    WButton.prototype.onDestroy = function () {
        TweenUtils.RemoveTween(this);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onDestroy, this);
    };
    WButton.prototype.onTouchBegin = function (e) {
        TweenUtils.Scale(this, 0.9, 0.9, 60, true);
        this.$stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        _super.prototype.onTouchBegin.call(this, e);
    };
    WButton.prototype.onTouchCancle = function (e) {
        TweenUtils.Scale(this, 1, 1, 60, false);
        var stage = e.$currentTarget;
        stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        _super.prototype.onTouchCancle.call(this, e);
    };
    WButton.prototype.onTouchEnd = function (e) {
        var stage = e.$currentTarget;
        stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onTouchCancle, this);
        TweenUtils.Scale(this, 1, 1, 60, false);
    };
    return WButton;
}(eui.Button));
__reflect(WButton.prototype, "WButton");
//# sourceMappingURL=WButton.js.map