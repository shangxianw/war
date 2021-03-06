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
 * 定时器管理器
 */
var TimerManager = (function (_super) {
    __extends(TimerManager, _super);
    function TimerManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimerManager.prototype.init = function () {
        this.timerArray = [];
        egret.startTick(this.update, this);
    };
    TimerManager.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        egret.stopTick(this.update, this);
        this.removeAllTimer();
        this.timerArray = null;
    };
    /**
     * 增加定时器
     * @param delay 间隔(毫秒)
     * @param cnFn 执行回调函数
     * @param isExec 是否立即执行一次(为false则会隔一个delay后才执行第一次)
     * @returns 通过在回调函数内返回 true 或 false 来判断是否执行下一次定时操作，如果为false，则会删除定时器
     */
    TimerManager.prototype.addTimer = function (delay, cbFn, thisObj, isExec) {
        if (isExec === void 0) { isExec = true; }
        var args = [];
        for (var _i = 4; _i < arguments.length; _i++) {
            args[_i - 4] = arguments[_i];
        }
        if (delay == null || cbFn == null || thisObj == null) {
            return false;
        }
        var timer = new TimerData();
        timer.packData(delay, cbFn, thisObj, isExec, args);
        this.timerArray.push(timer);
        return true;
    };
    /**
     * 删除定时器
     * 增加定时器一定要销毁掉，但不一定通过该方法，也可以在回调函数中返回false，则同样会删除定时器
     */
    TimerManager.prototype.removeTimer = function (cbFn, thisObj) {
        if (cbFn == null || thisObj == null) {
            return false;
        }
        var array = DataUtils.CopyArray(this.timerArray);
        var index = 0;
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var timer = array_1[_i];
            if (timer == null)
                continue;
            if (timer.cbFn == cbFn && timer.thisObj == thisObj) {
                this.timerArray.splice(index, 1);
                timer.destroy();
                timer = null;
                return true;
            }
            index++;
        }
        return true;
    };
    TimerManager.prototype.hasTimer = function (cbFn, thisObj) {
        var array = DataUtils.CopyArray(this.timerArray);
        for (var _i = 0, array_2 = array; _i < array_2.length; _i++) {
            var timer = array_2[_i];
            if (timer == null)
                continue;
            if (timer.cbFn == cbFn && timer.thisObj == thisObj)
                return true;
        }
        return false;
    };
    TimerManager.prototype.removeAllTimer = function () {
        for (var _i = 0, _a = this.timerArray; _i < _a.length; _i++) {
            var timer = _a[_i];
            timer.destroy();
        }
        this.timerArray.length = 0;
    };
    // ---------------------------------------------------------------------- 更新
    TimerManager.prototype.update = function (t) {
        var array = DataUtils.CopyArray(this.timerArray);
        var flag;
        var index = 0;
        for (var _i = 0, array_3 = array; _i < array_3.length; _i++) {
            var timer = array_3[_i];
            if (timer == null) {
                index++;
                continue;
            }
            if (timer.execIm == true) {
                timer.execIm = false;
                timer.count += 1;
                flag = timer.exec(timer.count);
                if (flag == false) {
                    this.timerArray.splice(index, 1);
                    timer.destroy();
                    timer = null;
                }
                continue;
            }
            var count = Math.floor((t - timer.lastTime) / timer.delay);
            if (count >= 1) {
                timer.lastTime += count * timer.delay;
                timer.count += count;
                flag = timer.exec(timer.count);
                if (flag == false || flag == null) {
                    this.timerArray.splice(index, 1);
                    timer.destroy();
                    timer = null;
                    break;
                }
            }
            index++;
        }
        return true;
    };
    TimerManager.Ins = function () {
        if (TimerManager.instance == null)
            TimerManager.instance = new TimerManager();
        return TimerManager.instance;
    };
    return TimerManager;
}(DataBase));
__reflect(TimerManager.prototype, "TimerManager");
//# sourceMappingURL=TimerManager.js.map