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
var TimerData = (function (_super) {
    __extends(TimerData, _super);
    function TimerData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimerData.prototype.init = function () {
        this.cbFn = null;
        this.thisObj = null;
        this.delay = 0;
        this.count = 0;
        this.lastTime = null;
        this.execIm = null;
    };
    TimerData.prototype.destroy = function () {
        this.cbFn = null;
        this.thisObj = null;
        this.delay = 0;
        this.count = 0;
        this.lastTime = null;
        this.execIm = null;
    };
    TimerData.prototype.packData = function (delay, cbFn, thisObj, execIm, args) {
        if (args === void 0) { args = null; }
        this.delay = delay;
        this.cbFn = cbFn;
        this.thisObj = thisObj;
        this.lastTime = egret.getTimer();
        this.args = args;
        this.execIm = execIm;
        return this;
    };
    // 应该支持参数
    TimerData.prototype.exec = function () {
        if (this.cbFn == null || this.thisObj == null)
            return false;
        if (this.args == null || this.args.length == 0)
            return this.cbFn.call(this.thisObj, this);
        if (this.args.length == 1)
            return this.cbFn.call(this.thisObj, this, this.args[0]);
        if (this.args.length == 2)
            return this.cbFn.call(this.thisObj, this, this.args[0], this.args[1]);
        if (this.args.length == 3)
            return this.cbFn.call(this.thisObj, this, this.args[0], this.args[1], this.args[2]);
        if (this.args.length == 4)
            return this.cbFn.call(this.thisObj, this, this.args[0], this.args[1], this.args[2], this.args[3]);
        if (this.args.length == 5)
            return this.cbFn.call(this.thisObj, this, this.args[0], this.args[1], this.args[2], this.args[3], this.args[4]);
        if (this.args.length == 6)
            return this.cbFn.call(this.thisObj, this, this.args[0], this.args[1], this.args[2], this.args[3], this.args[4], this.args[5]);
        if (this.args.length == 7)
            return this.cbFn.call(this.thisObj, this, this.args[0], this.args[1], this.args[2], this.args[3], this.args[4], this.args[5], this.args[6]);
    };
    return TimerData;
}(DataBase));
__reflect(TimerData.prototype, "TimerData");
//# sourceMappingURL=TimerData.js.map