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
        ListenerMgr.Ins().addEventListen(this, egret.TouchEvent.TOUCH_BEGIN, this.OnTouchBegin, this);
        ListenerMgr.Ins().addEventListen(this, egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
    };
    WGroup.prototype.destroy = function () {
        ListenerMgr.Ins().removeEventListen(this, egret.TouchEvent.TOUCH_BEGIN, this.OnTouchBegin, this);
        ListenerMgr.Ins().removeEventListen(this, egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
    };
    WGroup.prototype.OnTouchBegin = function (e) {
        ListenerMgr.Ins().addEventListen(e.target.$stage, egret.TouchEvent.TOUCH_CANCEL, e.target.OnTouchCancle, e.target);
        ListenerMgr.Ins().addEventListen(e.target.$stage, egret.TouchEvent.TOUCH_END, e.target.OnStageTouchEnd, e.target);
        e.target.scaleX = e.target.scaleY = 0.9;
    };
    WGroup.prototype.OnTouchCancle = function (e) {
        ListenerMgr.Ins().removeEventListen(e.target.$stage, egret.TouchEvent.TOUCH_CANCEL, e.target.OnTouchCancle, e.target);
        ListenerMgr.Ins().removeEventListen(e.target.$stage, egret.TouchEvent.TOUCH_END, e.target.OnStageTouchEnd, e.target);
        e.target.scaleX = e.target.scaleY = 1;
    };
    WGroup.prototype.OnStageTouchEnd = function (e) {
        ListenerMgr.Ins().removeEventListen(e.target.$stage, egret.TouchEvent.TOUCH_CANCEL, e.target.OnTouchCancle, e.target);
        ListenerMgr.Ins().removeEventListen(e.target.$stage, egret.TouchEvent.TOUCH_END, e.target.OnStageTouchEnd, e.target);
        e.target.scaleX = e.target.scaleY = 1;
    };
    return WGroup;
}(eui.Group));
__reflect(WGroup.prototype, "WGroup");
//# sourceMappingURL=WGroup.js.map