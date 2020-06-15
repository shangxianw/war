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
var WButton = (function (_super) {
    __extends(WButton, _super);
    function WButton() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    WButton.prototype.init = function () {
        this.touchChildren = false;
    };
    WButton.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.initData();
    };
    WButton.prototype.initData = function () {
        ListenerMgr.Ins().addEventListen(this, egret.TouchEvent.TOUCH_BEGIN, this.OnTouchBegin, this);
        ListenerMgr.Ins().addEventListen(this, egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
    };
    WButton.prototype.destroy = function () {
        ListenerMgr.Ins().removeEventListen(this, egret.TouchEvent.TOUCH_BEGIN, this.OnTouchBegin, this);
        ListenerMgr.Ins().removeEventListen(this, egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
    };
    WButton.prototype.OnTouchBegin = function (e) {
        ListenerMgr.Ins().addEventListen(this, egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, e.target.OnTouchCancle, this);
        ListenerMgr.Ins().addEventListen(this, egret.TouchEvent.TOUCH_END, e.target.OnStageTouchEnd, this);
        e.target.scaleX = e.target.scaleY = 0.9;
    };
    WButton.prototype.OnTouchCancle = function (e) {
        ListenerMgr.Ins().removeEventListen(this, egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, e.target.OnTouchCancle, this);
        ListenerMgr.Ins().removeEventListen(this, egret.TouchEvent.TOUCH_END, e.target.OnStageTouchEnd, this);
        e.target.scaleX = e.target.scaleY = 1;
    };
    WButton.prototype.OnStageTouchEnd = function (e) {
        ListenerMgr.Ins().removeEventListen(this, egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, e.target.OnTouchCancle, this);
        ListenerMgr.Ins().removeEventListen(this, egret.TouchEvent.TOUCH_END, e.target.OnStageTouchEnd, this);
        e.target.scaleX = e.target.scaleY = 1;
    };
    return WButton;
}(eui.Button));
__reflect(WButton.prototype, "WButton");
//# sourceMappingURL=WButton.js.map