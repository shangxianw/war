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
        this.count = -1;
        this.lastTime = null;
    };
    TimerData.prototype.destroy = function () {
        this.cbFn = null;
        this.thisObj = null;
        this.delay = 0;
        this.count = -1;
        this.lastTime = null;
    };
    TimerData.prototype.packData = function (delay, cbFn, thisObj, lastTime) {
        this.delay = delay;
        this.cbFn = cbFn;
        this.thisObj = thisObj;
        this.lastTime = lastTime;
        return this;
    };
    // 应该支持参数
    TimerData.prototype.exec = function () {
        if (this.cbFn == null || this.thisObj == null)
            return false;
        return this.cbFn.call(this.thisObj);
    };
    return TimerData;
}(DataBase));
__reflect(TimerData.prototype, "TimerData");
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
        for (var _i = 0, _a = this.timerArray; _i < _a.length; _i++) {
            var timer = _a[_i];
            timer.destroyAll();
            PoolManager.Ins().push(timer);
        }
        this.timerArray.length = 0;
        egret.stopTick(this.update, this);
    };
    TimerManager.Ins = function () {
        if (TimerManager.instance == null)
            TimerManager.instance = new TimerManager();
        return TimerManager.instance;
    };
    /**
     * 增加定时器
     * @param delay 间隔(毫秒)
     * @param cnFn 执行回调函数
     */
    TimerManager.prototype.addTimer = function (delay, cbFn, thisObj) {
        if (delay == null || cbFn == null || thisObj == null) {
            LogUtils.Warn(Utils.GetClassNameByObj(this) + " : \u53C2\u6570\u6709\u8BEF");
            return false;
        }
        if (this.hasTimer(cbFn, thisObj) == true) {
            LogUtils.Warn(Utils.GetClassNameByObj(this) + " : \u5DF2\u5B58\u5728\u540C\u4E00\u4E2A\u5B9A\u65F6\u5668 " + delay + " " + cbFn + " " + thisObj);
            return false;
        }
        var timer = PoolManager.Ins().pop(TimerData);
        timer.packData(delay, cbFn, thisObj, egret.getTimer());
        this.timerArray.push(timer);
        return true;
    };
    TimerManager.prototype.removeTimer = function (cbFn, thisObj) {
        if (cbFn == null || thisObj == null) {
            LogUtils.Warn(Utils.GetClassNameByObj(this) + " : \u53C2\u6570\u6709\u8BEF");
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
                timer.destroyAll();
                PoolManager.Ins().push(timer);
                return true;
            }
            index++;
        }
        return false;
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
            var count = Math.floor((t - timer.lastTime) / timer.delay);
            if (count >= 1) {
                timer.lastTime += count * timer.delay;
                if (timer.count < 0) {
                    for (var i = 0, len = count; i < len; i++) {
                        flag = timer.exec();
                        timer.count++;
                        if (flag == false) {
                            this.timerArray.splice(index, 1);
                            timer.destroyAll();
                            PoolManager.Ins().push(timer);
                            break;
                        }
                    }
                }
            }
            index++;
        }
        return true;
    };
    return TimerManager;
}(DataBase));
__reflect(TimerManager.prototype, "TimerManager");
//# sourceMappingURL=TimerManager.js.map