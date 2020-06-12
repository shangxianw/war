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
        _this.init();
        return _this;
    }
    WGroup.prototype.init = function () {
        this.touchChildren = false;
    };
    WGroup.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.initData();
    };
    WGroup.prototype.initData = function () {
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.OnTouchBegin, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
    };
    WGroup.prototype.destroy = function () {
        this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.OnTouchBegin, this);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
    };
    WGroup.prototype.OnTouchBegin = function (e) {
        this.$stage.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.OnTouchCancle, this);
        this.$stage.addEventListener(egret.TouchEvent.TOUCH_END, this.OnStageTouchEnd, this);
        this.scaleX = this.scaleY = 0.9;
    };
    WGroup.prototype.OnTouchCancle = function (e) {
        this.$stage.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, this.OnTouchCancle, this);
        this.$stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.OnStageTouchEnd, this);
        this.scaleX = this.scaleY = 1;
    };
    WGroup.prototype.OnStageTouchEnd = function (e) {
        this.$stage.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, this.OnTouchCancle, this);
        this.$stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.OnStageTouchEnd, this);
        this.scaleX = this.scaleY = 1;
    };
    return WGroup;
}(eui.Group));
__reflect(WGroup.prototype, "WGroup");
//# sourceMappingURL=WGroup.js.map