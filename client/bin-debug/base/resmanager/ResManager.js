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
 * 资源管理器
 * 当使用load相关方法时，会给对应的资源引用+1。
 * 当使用destroy相关方法时，会给对应的资源引用-1。
 * 资源引用为0时，并不会立刻销毁，而是等到一定时间才进行判断。
 * 有个缺点：如果出现资源未销毁的情况，这并不知道是谁没有销毁
 */
var ResManager = (function (_super) {
    __extends(ResManager, _super);
    function ResManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResManager.Ins = function () {
        if (ResManager.instance == null)
            ResManager.instance = new ResManager();
        return ResManager.instance;
    };
    ResManager.prototype.init = function () {
        this.READY_DERTROY_SECOND = 5000;
        this.ERROR_LOAD_COUNT = 5;
        this.DESTROY_ONCE_COUNT = 20;
        this.isLoading = false;
        this.resMap = new Hash();
        this.collectArray = [];
        this.useCollectArray = [];
        this.waitDestroyArray = [];
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.OnResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.OnResourceLoadProgress, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.OnResourceLoadError, this);
        TimerManager.Ins().addTimer(200, this.update, this);
    };
    ResManager.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.isLoading = false;
        DataUtils.DestroyDataBaseArray(this.collectArray);
        DataUtils.DestroyDataBaseArray(this.useCollectArray);
        this.waitDestroyArray = [];
        TimerManager.Ins().removeTimer(this.update, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.OnResourceLoadComplete, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.OnResourceLoadProgress, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.OnResourceLoadError, this);
    };
    ResManager.prototype.loadGroup = function (collectArray, cbFn, thisObj, progFn, errFn, priority) {
        if (cbFn === void 0) { cbFn = null; }
        if (thisObj === void 0) { thisObj = null; }
        if (progFn === void 0) { progFn = null; }
        if (errFn === void 0) { errFn = null; }
        if (priority === void 0) { priority = null; }
        if (collectArray == null) {
            LogUtils.Error("\u3010\u8D44\u6E90\u7EC4\u96C6\u53C2\u6570\u9519\u8BEF\u3011");
            return null;
        }
        if (collectArray.length <= 0) {
            if (cbFn != null && thisObj != null)
                cbFn.call(thisObj);
            return null;
        }
        for (var _i = 0, collectArray_1 = collectArray; _i < collectArray_1.length; _i++) {
            var groupName = collectArray_1[_i];
            if (groupName == null || groupName == "" || RES.getGroupByName(groupName).length <= 0) {
                LogUtils.Error("\u3010\u8D44\u6E90\u7EC4\u96C6\u53C2\u6570\u9519\u8BEF\u3011" + collectArray.toString() + " \u53EF\u80FD\u5305\u542B\u4E0D\u5B58\u5728\u8D44\u6E90\u7EC4\uFF0C\u6216\u8005\u8D44\u6E90\u7EC4\u5B50\u9879\u4E3A\u7A7A");
                return null;
            }
        }
        // 保存数据
        var collectData = new CollectData;
        collectData.packDate(collectArray, cbFn, thisObj, progFn, errFn, priority);
        this.collectArray.push(collectData);
        this.collectArray.sort(this.sortByPriority);
        // 添加引用
        for (var _a = 0, collectArray_2 = collectArray; _a < collectArray_2.length; _a++) {
            var groupName = collectArray_2[_a];
            for (var _b = 0, _c = RES.getGroupByName(groupName); _b < _c.length; _b++) {
                var resItem = _c[_b];
                var resName = resItem.name;
                var resData = void 0;
                if (this.resMap.has(resName) == false) {
                    resData = new ResData();
                    resData.packData(resName);
                    this.resMap.set(resName, resData);
                }
                resData = this.resMap.get(resName);
                resData.addRefCount();
            }
        }
        LogUtils.Log("\u3010\u8D44\u6E90\u7EC4\u96C6\u52A0\u5165\u5230\u5217\u8868\u3011id:" + collectData.hasCode + " " + collectArray.toString());
        return collectData.hasCode;
    };
    ResManager.prototype.destroyGroup = function (hasCode) {
        if (hasCode == null || hasCode <= 0) {
            LogUtils.Error("\u3010\u8D44\u6E90\u7EC4\u96C6\u53C2\u6570\u9519\u8BEF\u3011");
            return false;
        }
        var cData;
        for (var _i = 0, _a = this.collectArray; _i < _a.length; _i++) {
            var collectData = _a[_i];
            if (collectData.hasCode == hasCode) {
                cData = collectData;
                var index = this.collectArray.indexOf(collectData);
                this.collectArray.splice(index, 1);
                break;
            }
        }
        if (cData == null) {
            for (var _b = 0, _c = this.useCollectArray; _b < _c.length; _b++) {
                var collectData = _c[_b];
                if (collectData.hasCode == hasCode) {
                    cData = collectData;
                    var index = this.useCollectArray.indexOf(collectData);
                    this.useCollectArray.splice(index, 1);
                    break;
                }
            }
        }
        if (cData == null) {
            if (this.currCollectData.hasCode == hasCode) {
                this.waitDestroyArray.push(hasCode);
                LogUtils.Warn("\u3010\u8D44\u6E90\u7EC4\u96C6\u6B63\u5728\u5728\u52A0\u8F7D\u4E2D\uFF0C\u7A0D\u540E\u91CA\u653E\u3011id:" + hasCode);
                return true;
            }
            else {
                LogUtils.Warn("\u3010\u9500\u6BC1\u4E0D\u5B58\u5728\u7684\u8D44\u6E90\u7EC4\u96C6\u3011id:" + hasCode);
                return true;
            }
        }
        // 减少引用
        this.reduceRefCount(cData);
        cData.destroy();
        cData = null;
        cData = null;
        LogUtils.Log("\u3010\u9500\u6BC1\u8D44\u6E90\u7EC4\u96C6\u3011id:" + hasCode);
        return true;
    };
    ResManager.prototype.destroyAllGroup = function () {
        var cData;
        for (var _i = 0, _a = this.collectArray; _i < _a.length; _i++) {
            var collectData = _a[_i];
            cData = collectData;
            var index = this.collectArray.indexOf(collectData);
            this.collectArray.splice(index, 1);
        }
        if (cData != null)
            this.destroyGroup(cData.hasCode);
    };
    ResManager.prototype.loadRes = function (resName) {
        if (resName == null || resName == "") {
            LogUtils.Warn("【加载资源错误】参数错误");
            return null;
        }
        if (RES.hasRes(resName) == false) {
            LogUtils.Warn("【加载资源错误】资源管理器不存在该配置");
            return null;
        }
        var resItem = RES.getRes(resName);
        if (resItem == null) {
            LogUtils.Log("\u3010\u8D44\u6E90\u672A\u5148\u52A0\u8F7D\u5230\u5185\u5B58\u3011resName:" + resName);
            return null;
        }
        var resData;
        if (this.resMap.has(resName) == false) {
            resData = new ResData();
            resData.packData(resName);
            this.resMap.set(resName, resData);
        }
        resData = this.resMap.get(resName);
        resData.addRefCount();
        LogUtils.Log("\u3010\u52A0\u8F7D\u8D44\u6E90\u3011resName:" + resName);
        return resItem;
    };
    ResManager.prototype.loadResAsync = function (resName, cbFn, thisObj) {
        var callBack = function (data, key) {
            var resData;
            if (this.resMap.has(resName) == false) {
                resData = new ResData();
                resData.packData(resName);
                this.resMap.set(resName, resData);
            }
            resData = this.resMap.get(resName);
            resData.addRefCount();
            cbFn.call(thisObj, data, key);
        };
        RES.getResAsync(resName, callBack, this);
    };
    ResManager.prototype.destroyRes = function (resName) {
        if (resName == null || resName == "") {
            LogUtils.Warn("【加载资源错误】参数错误");
            return null;
        }
        if (RES.hasRes(resName) == false) {
            LogUtils.Warn("【加载资源错误】资源管理器不存在该配置");
            return null;
        }
        var resData;
        if (this.resMap.has(resName) == false) {
            LogUtils.Log("\u3010\u9500\u6BC1\u8D44\u6E90\u3011resName:" + resName);
            return true;
        }
        resData = this.resMap.get(resName);
        resData.reduceRefCount(egret.getTimer());
        LogUtils.Log("\u3010\u9500\u6BC1\u8D44\u6E90\u3011resName:" + resName);
        return true;
    };
    // ----------------------------------------------------------------------
    ResManager.prototype.OnResourceLoadComplete = function (e) {
        LogUtils.Log("\u3010\u52A0\u8F7D\u8D44\u6E90\u7EC4\u5B8C\u6210\u3011id:" + this.currCollectData.hasCode + " groupName:" + e.groupName);
        this.isLoading = false;
        if (this.currCollectData.isEnd() == true) {
            if (this.waitDestroyArray.length <= 0) {
                this.currCollectData.execCb(e);
                this.useCollectArray.push(this.currCollectData);
                LogUtils.Log("\u3010\u52A0\u8F7D\u8D44\u6E90\u7EC4\u96C6\u5B8C\u6210\u3011id:" + this.currCollectData.hasCode);
            }
            else {
                var i = 0;
                for (var _i = 0, _a = this.waitDestroyArray; _i < _a.length; _i++) {
                    var hasCode = _a[_i];
                    if (this.currCollectData.hasCode == hasCode) {
                        this.waitDestroyArray.splice(i, 1);
                        this.reduceRefCount(this.currCollectData);
                        this.currCollectData.destroy();
                        this.currCollectData = null;
                        LogUtils.Log("\u3010\u9500\u6BC1\u5DF2\u5B8C\u6210\u7684\u8D44\u6E90\u7EC4\u96C6\u3011id:" + this.currCollectData.hasCode);
                        break;
                    }
                    i++;
                }
            }
            this.currCollectData = null;
        }
    };
    ResManager.prototype.OnResourceLoadProgress = function (e) {
        this.currCollectData.itemsLoaded = e.itemsLoaded;
        this.currCollectData.itemsTotal = e.itemsTotal;
        this.currCollectData.execProg(e);
        LogUtils.Log("\u3010\u52A0\u8F7D\u8D44\u6E90\u3011id:" + this.currCollectData.hasCode + " groupName:" + e.groupName + " resName:" + e.resItem.name);
    };
    ResManager.prototype.OnResourceLoadError = function (e) {
        this.currCollectData.addErrCount();
        if (this.currCollectData.errLoadCount <= this.ERROR_LOAD_COUNT) {
            LogUtils.Warn("\u3010\u91CD\u65B0\u52A0\u8F7D\u8D44\u6E90\u7EC4\u3011id:" + this.currCollectData.hasCode + " groupName:" + e.groupName + " count:" + this.currCollectData.errLoadCount);
            this.reloadGroup(e.groupName);
        }
        else {
            LogUtils.Error("\u3010\u52A0\u8F7D\u8D44\u6E90\u7EC4\u9519\u8BEF\u3011id:" + this.currCollectData.hasCode + " groupName:" + e.groupName + " count:" + this.currCollectData.errLoadCount);
            if (this.currCollectData.isEnd() == true)
                this.currCollectData = null;
            this.loadNextGroup();
        }
    };
    ResManager.prototype.update = function () {
        if (this.isLoading == false) {
            this.isLoading = this.loadNextGroup();
        }
        var destroyTime = egret.getTimer();
        var destroyCount = 0;
        var array = this.resMap.values();
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var resData = array_1[_i];
            if (resData.refCount <= 0 && destroyTime >= resData.destroyTime && RES.getRes(resData.resName) != null) {
                LogUtils.Log("\u3010\u52A0\u8F7D\u8D44\u6E90\u3011resName:" + resData.resName);
                RES.destroyRes(resData.resName);
                this.resMap.remove(resData.resName);
                resData.destroy();
                resData = null;
                destroyCount++;
            }
            if (destroyCount >= this.DESTROY_ONCE_COUNT)
                break;
        }
        return true;
    };
    ResManager.prototype.loadNextGroup = function () {
        if (this.currCollectData == null) {
            if (this.collectArray.length <= 0)
                return false;
            this.currCollectData = this.collectArray.shift();
            var groupName = this.currCollectData.currGroup();
            RES.loadGroup(groupName);
            LogUtils.Log("\u3010\u52A0\u8F7D\u8D44\u6E90\u7EC4\u3011id:" + this.currCollectData.hasCode + " groupName:" + groupName);
            return true;
        }
        else {
            var groupName = this.currCollectData.nextGroup();
            RES.loadGroup(groupName);
            LogUtils.Log("\u3010\u52A0\u8F7D\u8D44\u6E90\u7EC4\u3011id:" + this.currCollectData.hasCode + " groupName:" + groupName);
            return true;
        }
    };
    ResManager.prototype.reloadGroup = function (groupName) {
        RES.loadGroup(groupName);
    };
    ResManager.prototype.reduceRefCount = function (collectData) {
        var currTime = egret.getTimer();
        for (var _i = 0, _a = collectData.groupNameArray; _i < _a.length; _i++) {
            var groupName = _a[_i];
            for (var _b = 0, _c = RES.getGroupByName(groupName); _b < _c.length; _b++) {
                var resItem = _c[_b];
                var resName = resItem.name;
                var resData = void 0;
                if (this.resMap.has(resName) == false)
                    continue;
                resData = this.resMap.get(resName);
                resData.reduceRefCount(currTime);
            }
        }
    };
    ResManager.prototype.sortByPriority = function (a, b) {
        return a.priority < b.priority ? -1 : 1;
    };
    return ResManager;
}(DataBase));
__reflect(ResManager.prototype, "ResManager");
//# sourceMappingURL=ResManager.js.map