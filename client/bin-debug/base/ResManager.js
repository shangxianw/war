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
var ResData = (function (_super) {
    __extends(ResData, _super);
    function ResData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResData.prototype.init = function () {
        this.resName = "";
        this.referenceCount = 0;
    };
    ResData.prototype.destroy = function () {
        this.resName = "";
        this.referenceCount = 0;
    };
    ResData.prototype.packData = function (resName) {
        this.resName = resName;
        this.referenceCount++;
        return this;
    };
    ResData.prototype.reduceCount = function () {
        this.referenceCount = Math.max(this.referenceCount - 1, 0);
        if (this.referenceCount <= 0)
            this.destroyTime = egret.getTimer() + ResManager.Ins().READY_DERTROY_SECOND * 1000;
    };
    ResData.prototype.addCount = function () {
        this.referenceCount++;
        this.destroyTime = null;
    };
    return ResData;
}(DataBase));
__reflect(ResData.prototype, "ResData");
var ResGroupData = (function (_super) {
    __extends(ResGroupData, _super);
    function ResGroupData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResGroupData.prototype.init = function () {
        this.errLoadCount = 0;
        this.groupName = "";
        this.priority = null;
        this.itemsLoaded = null;
        this.itemsTotal = null;
        this.resArray = [];
    };
    ResGroupData.prototype.destroy = function () {
        this.resArray.length = 0;
        this.errLoadCount = 0;
        this.groupName = null;
        this.priority = null;
        this.itemsLoaded = null;
        this.itemsTotal = null;
    };
    ResGroupData.prototype.packData = function (groupName, priority) {
        this.groupName = groupName;
        this.priority = priority;
        return this;
    };
    return ResGroupData;
}(DataBase));
__reflect(ResGroupData.prototype, "ResGroupData");
var ResManager = (function (_super) {
    __extends(ResManager, _super);
    function ResManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResManager.prototype.init = function () {
        this.DESTROY_ONCE_COUNT = 20; // 一次销毁n个
        this.ERROR_LOAD_COUNT = 5; // 五次重连都失败就跳过
        this.READY_DERTROY_SECOND = 5; // 5秒后资源会被销毁(如果引用为0)
        this.isLoading = false;
        this.groupArray = [];
        this.useGroupArray = [];
        this.waitDestroyGroup = [];
        this.currLaodInfo = null;
        this.resMap = new Hash();
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.OnResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.OnResourceLoadProgress, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.OnResourceLoadError, this);
        TimerManager.Ins().addTimer(100, this.update, this);
    };
    ResManager.prototype.destroy = function () {
        for (var _i = 0, _a = this.resMap.values; _i < _a.length; _i++) {
            var resData = _a[_i];
            resData.destroyAll();
            PoolManager.Ins().push(resData);
        }
        this.resMap.destroy(); // 有待验证，是不是会把里面的子项给delete掉，导致resdata变成了null
        TimerManager.Ins().removeTimer(this.update, this);
        for (var _b = 0, _c = this.groupArray; _b < _c.length; _b++) {
            var groupInfo = _c[_b];
            groupInfo.destroyAll();
            PoolManager.Ins().push(groupInfo);
        }
        this.groupArray.length = 0;
        for (var _d = 0, _e = this.useGroupArray; _d < _e.length; _d++) {
            var groupInfo = _e[_d];
            groupInfo.destroyAll();
            PoolManager.Ins().push(groupInfo);
        }
        this.useGroupArray.length = 0;
        this.waitDestroyGroup.length = 0;
        this.isLoading = false;
        this.currLaodInfo = null;
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.OnResourceLoadComplete, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.OnResourceLoadProgress, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.OnResourceLoadError, this);
    };
    ResManager.Ins = function () {
        if (ResManager.instance == null)
            ResManager.instance = new ResManager();
        return ResManager.instance;
    };
    ResManager.prototype.loadGroup = function (groupName, priority) {
        if (priority === void 0) { priority = null; }
        if (groupName == null) {
            return LogUtils.Error(Utils.GetClassNameByObj(this) + " : loadGroup \u65B9\u6CD5\u53C2\u6570\u6709\u8BEF");
        }
        var grouInfo = PoolManager.Ins().pop(ResGroupData);
        if (priority != null) {
            grouInfo.packData(groupName, priority);
        }
        else {
            grouInfo.packData(groupName, this.groupArray.length);
        }
        this.groupArray.push(grouInfo);
    };
    ResManager.prototype.destroyGroup = function (groupName) {
        if (groupName == null) {
            return LogUtils.Error(Utils.GetClassNameByObj(this) + " : loadGroup \u65B9\u6CD5\u53C2\u6570\u6709\u8BEF");
        }
        // 如果这个资源组正在加载
        var resInfo;
        if (this.currLaodInfo.groupName == groupName) {
            this.waitDestroyGroup.push(groupName);
            return;
        }
        // 如果还没有加载
        var index = 0;
        for (var _i = 0, _a = this.groupArray; _i < _a.length; _i++) {
            var groupInfo = _a[_i];
            if (groupInfo.groupName == groupName) {
                groupInfo.destroyAll();
                PoolManager.Ins().push(groupInfo);
                this.groupArray.splice(index, 1);
                return;
            }
            index++;
        }
        // 如果已经加载完
        index = 0;
        for (var _b = 0, _c = this.useGroupArray; _b < _c.length; _b++) {
            var groupInfo = _c[_b];
            if (groupInfo.groupName == groupName) {
                for (var _d = 0, _e = groupInfo.resArray; _d < _e.length; _d++) {
                    var resName = _e[_d];
                    if (this.resMap.has(resName) == false) {
                        LogUtils.Error(Utils.GetClassNameByObj(this) + " : " + resName + " \u6CA1\u6709\u88AB\u8BB0\u5F55\u8D77\u6765");
                        continue;
                    }
                    resInfo = this.resMap.get(resName);
                    resInfo.reduceCount();
                }
                groupInfo.destroyAll();
                PoolManager.Ins().push(groupInfo);
                this.groupArray.splice(index, 1);
                return;
            }
            index++;
        }
    };
    ResManager.prototype.OnResourceLoadComplete = function (e) {
        this.loadEnd();
    };
    ResManager.prototype.OnResourceLoadProgress = function (e) {
        this.currLaodInfo.itemsLoaded = e.itemsLoaded;
        this.currLaodInfo.itemsTotal = e.itemsTotal;
        if (this.currLaodInfo.resArray.indexOf(e.resItem.name) >= 0) {
            LogUtils.Warn(Utils.GetClassNameByObj(this) + " : " + this.currLaodInfo.groupName + " \u6709\u76F8\u540C\u7684\u8D44\u6E90\u9879 " + e.resItem.name); // 为啥没有判断资源组是否存在的API
        }
        else {
            this.currLaodInfo.resArray.push(e.resItem.name);
            var resInfo = void 0;
            if (this.resMap.has(e.resItem.name) == false) {
                resInfo = PoolManager.Ins().pop(ResData);
                this.resMap.set(e.resItem.name, resInfo);
            }
            resInfo = this.resMap.get(e.resItem.name);
            resInfo.packData(e.resItem.name);
        }
    };
    ResManager.prototype.OnResourceLoadError = function (e) {
        this.currLaodInfo.errLoadCount++;
        if (this.currLaodInfo.errLoadCount >= this.ERROR_LOAD_COUNT) {
            LogUtils.Error(Utils.GetClassNameByObj(this) + " : " + this.currLaodInfo.groupName + " \u52A0\u8F7D\u5931\u8D25"); // 为啥没有判断资源组是否存在的API
            this.loadEnd();
            return;
        }
        RES.loadGroup(e.groupName);
    };
    // 该方法有两个功能
    // 1、一个接着一个加载资源组
    // 2、监测资源的引用情况，如果引用为0，则销毁掉。
    ResManager.prototype.update = function () {
        if (this.isLoading == false) {
            var flag = this.loadNextGroup();
            this.isLoading = flag;
        }
        var array = this.resMap.values; // 必须复制一个出来，因为在遍历的过程中有可能删掉自己，导致数组长度不等。
        var destroyCount = 0;
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var resData = array_1[_i];
            if (resData == null) {
                LogUtils.Error(Utils.GetClassNameByObj(this) + " : \u53D1\u73B0\u7A7A\u8D44\u6E90\u9879");
                continue;
            }
            if (resData.referenceCount > 0)
                continue;
            if (resData.destroyTime == null) {
                LogUtils.Error(Utils.GetClassNameByObj(this) + " : \u5F85\u9500\u6BC1\u8D44\u6E90 " + resData.resName + " \u672A\u8BBE\u7F6E\u9500\u6BC1\u65F6\u95F4");
                continue;
            }
            if (egret.getTimer() + this.READY_DERTROY_SECOND * 1000 < resData.destroyTime)
                continue;
            RES.destroyRes(resData.resName);
            destroyCount++;
            if (destroyCount >= this.DESTROY_ONCE_COUNT)
                break;
        }
        this.destroyWaitGroup();
        return true;
    };
    ResManager.prototype.loadNextGroup = function () {
        this.currLaodInfo = this.groupArray.shift();
        if (this.currLaodInfo == null || this.currLaodInfo.groupName == "") {
            LogUtils.Error(Utils.GetClassNameByObj(this) + " \u4E0D\u5B58\u5728\u8D44\u6E90\u7EC4\u540D " + this.currLaodInfo.groupName); // 为啥没有判断资源组是否存在的API
            return false;
        }
        RES.loadGroup(this.currLaodInfo.groupName);
        return true;
    };
    ResManager.prototype.loadEnd = function () {
        var item = this.currLaodInfo;
        this.useGroupArray.push(item);
        this.currLaodInfo = null;
        this.isLoading = false;
    };
    // 对于正在加载中，又想销毁的资源组，要等到资源组加载完成后，才进行销毁(因为官方没有取消加载的接口)
    ResManager.prototype.destroyWaitGroup = function () {
        var waitGroupName;
        var resData;
        while (this.waitDestroyGroup.length > 0) {
            waitGroupName = this.waitDestroyGroup.shift();
            if (waitGroupName == null)
                continue;
            for (var _i = 0, _a = this.useGroupArray; _i < _a.length; _i++) {
                var useGroup = _a[_i];
                if (useGroup == null)
                    continue;
                if (useGroup.groupName == waitGroupName) {
                    for (var _b = 0, _c = useGroup.resArray; _b < _c.length; _b++) {
                        var resName = _c[_b];
                        if (this.resMap.has(resName) == false)
                            continue;
                        resData = this.resMap.get(resName);
                        resData.reduceCount();
                    }
                }
            }
        }
    };
    return ResManager;
}(DataBase));
__reflect(ResManager.prototype, "ResManager");
//# sourceMappingURL=ResManager.js.map