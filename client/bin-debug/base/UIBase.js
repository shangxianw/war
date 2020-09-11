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
var UIBase = (function (_super) {
    __extends(UIBase, _super);
    function UIBase() {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        // ---------------------------------------------------------------------- 添加系统事件监听
        _this.eventArray = []; // [target, type, callback, thisObj][]
        // ---------------------------------------------------------------------- 添加属性监听
        _this.attrArray = []; // [target, attrName, cbFn, thisObj][]
        // ---------------------------------------------------------------------- 添加定时器
        _this.timerArray = []; // [cbFn, thisObj, args]
        // ---------------------------------------------------------------------- 添加消息监听
        _this.msgArray = [];
        _this.info = param;
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.OnRemoveFromeStage, _this);
        _this.init.apply(_this, param);
        return _this;
    }
    // ---------------------------------------------------------------------- 一般需要重写的方法
    // 每个方法都会传入在创建时传入的参数，下面只是事例
    /**
     * 在创建时执行
     */
    UIBase.prototype.init = function () {
        var anyParam = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            anyParam[_i] = arguments[_i];
        }
        // this.skinName = "UIBaseSkin"
    };
    /**
     * 添加到舞台之前
     */
    UIBase.prototype.initData = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
    };
    /**
     * 添加到后舞台
     */
    UIBase.prototype.initView = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
    };
    UIBase.prototype.aaa = function () {
    };
    /**
     * 销毁
     */
    UIBase.prototype.destroy = function () {
    };
    UIBase.prototype.addEvent = function (target, type, callback, thisObj) {
        // 参数有误
        if (target == null || type == null || callback == null || thisObj == null)
            return false;
        // 重复注册
        for (var _i = 0, _a = this.eventArray; _i < _a.length; _i++) {
            var item = _a[_i];
            if (target == item[0] && type == item[1] && callback == item[2] && thisObj == item[3]) {
                return false;
            }
        }
        this.eventArray.push([target, type, callback, thisObj]);
        target.addEventListener(type, callback, thisObj);
        return true;
    };
    UIBase.prototype.removeEvent = function (target, type, callback, thisObj) {
        // 参数有误
        if (target == null || type == null || callback == null || thisObj == null)
            return false;
        var index = 0;
        for (var _i = 0, _a = this.eventArray; _i < _a.length; _i++) {
            var item = _a[_i];
            if (target == item[0] && type == item[1] && callback == item[2] && thisObj == item[3]) {
                target.removeEventListener(type, callback, thisObj);
                item[0] = item[1] = item[2] = item[3] = null;
                this.eventArray.splice(index, 1);
                return true;
            }
            index += 1;
        }
        return false;
    };
    UIBase.prototype.removeAllEvent = function () {
        while (this.eventArray.length > 0) {
            var item = this.eventArray.shift();
            item[0].removeEventListener(item[1], item[2], item[3]);
            item[0] = item[1] = item[2] = item[3] = null;
        }
        return true;
    };
    UIBase.prototype.addAttrListener = function (target, attrName, cbFn, thisObj) {
        // 参数有误
        if (target == null || attrName == null || cbFn == null || thisObj == null)
            return false;
        // 重复注册
        for (var _i = 0, _a = this.attrArray; _i < _a.length; _i++) {
            var item = _a[_i];
            if (target == item[0] && attrName == item[1] && cbFn == item[2] && thisObj == item[3]) {
                return false;
            }
        }
        this.attrArray.push([target, attrName, cbFn, thisObj]);
        target.addAttrListener(attrName, cbFn, thisObj);
        return true;
    };
    UIBase.prototype.removeAttrListener = function (target, attrName, cbFn, thisObj) {
        // 参数有误
        if (target == null || attrName == null || cbFn == null || thisObj == null)
            return false;
        var index = 0;
        for (var _i = 0, _a = this.attrArray; _i < _a.length; _i++) {
            var item = _a[_i];
            if (target == item[0] && attrName == item[1] && cbFn == item[2] && thisObj == item[3]) {
                target.removeAttrListener(attrName, cbFn, thisObj);
                item[0] = item[1] = item[2] = item[3] = null;
                this.attrArray.splice(index, 1);
                return true;
            }
            index += 1;
        }
        return false;
    };
    UIBase.prototype.removeAllAttrListener = function () {
        while (this.attrArray.length > 0) {
            var item = this.attrArray.shift();
            item[0].removeAttrListener(item[1], item[2], item[3]);
            item[0] = item[1] = item[2] = item[3] = null;
        }
        return true;
    };
    UIBase.prototype.addTimer = function (delay, cbFn, thisObj, isExec) {
        if (isExec === void 0) { isExec = true; }
        var args = [];
        for (var _i = 4; _i < arguments.length; _i++) {
            args[_i - 4] = arguments[_i];
        }
        // 参数有误
        if (delay == null || cbFn == null || thisObj == null)
            return false;
        // 重复注册
        for (var _a = 0, _b = this.timerArray; _a < _b.length; _a++) {
            var item = _b[_a];
            if (cbFn == item[0] && thisObj == item[1]) {
                return false;
            }
        }
        this.timerArray.push([cbFn, thisObj, args]);
        return TimerManager.Ins().addTimer(delay, cbFn, thisObj, isExec, args);
    };
    UIBase.prototype.removeTimer = function (cbFn, thisObj) {
        // 参数有误
        if (cbFn == null || thisObj == null)
            return false;
        var index = 0;
        for (var _i = 0, _a = this.timerArray; _i < _a.length; _i++) {
            var item = _a[_i];
            if (cbFn == item[0] && thisObj == item[1]) {
                TimerManager.Ins().removeTimer(cbFn, thisObj);
                item[0] = item[1] = null;
                this.timerArray.splice(index, 1);
                return true;
            }
            index += 1;
        }
        return false;
    };
    UIBase.prototype.removeAllTimer = function () {
        while (this.timerArray.length > 0) {
            var item = this.timerArray.shift();
            item[0] = item[1] = item[2] = null;
        }
        return true;
    };
    UIBase.prototype.addMsgListener = function (type, cbFn, thisObj) {
        // 参数有误
        if (type == null || cbFn == null || thisObj == null)
            return false;
        // 重复注册
        for (var _i = 0, _a = this.msgArray; _i < _a.length; _i++) {
            var item = _a[_i];
            if (type == item[0] && cbFn == item[1] && thisObj == item[2])
                return false;
        }
        this.msgArray.push([type, cbFn, thisObj]);
        return MessageManager.Ins().addListener(type, cbFn, thisObj);
    };
    UIBase.prototype.removeMsgListener = function (type, cbFn, thisObj) {
        // 参数有误
        if (type == null || cbFn == null || thisObj == null)
            return false;
        var index = 0;
        for (var _i = 0, _a = this.msgArray; _i < _a.length; _i++) {
            var item = _a[_i];
            if (type == item[0] && cbFn == item[1] && thisObj == item[2]) {
                MessageManager.Ins().removeListener(type, cbFn, thisObj);
                item[0] = item[1] = item[2] = null;
                this.msgArray.splice(index, 1);
                return true;
            }
            index += 1;
        }
        return false;
    };
    UIBase.prototype.removeAllMsgListener = function () {
        while (this.msgArray.length > 0) {
            var item = this.msgArray.shift();
            item[0] = item[1] = item[2] = null;
        }
        return true;
    };
    // ---------------------------------------------------------------------- 缓动动画
    // ---------------------------------------------------------------------- 系统内部调用
    UIBase.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.initData.apply(this, this.info);
    };
    UIBase.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.initView.apply(this, this.info);
    };
    UIBase.prototype.OnRemoveFromeStage = function () {
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.OnRemoveFromeStage, this);
        this.removeAllEvent();
        this.removeAllTimer();
        this.removeAllAttrListener();
        this.destroy.apply(this, this.info);
    };
    return UIBase;
}(eui.Component));
__reflect(UIBase.prototype, "UIBase");
//# sourceMappingURL=UIBase.js.map