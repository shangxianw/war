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
        this.resMap = new Hash();
        this.collectArray = [];
        this.useCollectArray = [];
        this.destroyArray = [];
        this.isLoading = false;
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.OnResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.OnResourceLoadProgress, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.OnResourceLoadError, this);
        TimerManager.Ins().addTimer(1000, this.update, this);
    };
    ResManager.prototype.destroy = function () {
        DataUtils.DestroyDataBaseArray(this.collectArray);
        DataUtils.DestroyDataBaseArray(this.useCollectArray);
        this.destroyArray = null;
        this.isLoading = false;
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
        if (collectArray == null || collectArray.length <= 0)
            return null;
        RES.getGroupByName(collectArray[0]);
        var groupCollectData = neww(GroupCollectData);
        groupCollectData.packDate(collectArray, cbFn, thisObj, progFn, errFn, priority);
        this.collectArray.push(groupCollectData);
        this.collectArray.sort(this.sortGroupArray);
        return groupCollectData.uniqueCode;
    };
    ResManager.prototype.destroyGroup = function (uniqueCode) {
        this.destroyArray.push(uniqueCode);
        return true;
    };
    ResManager.prototype.OnResourceLoadComplete = function (e) {
        if (this.currCollectData.isEnd() == true) {
            this.currCollectData.execCb(e);
            this.isLoading = false;
            this.useCollectArray.push(this.currCollectData);
            this.currCollectData = null;
        }
    };
    ResManager.prototype.OnResourceLoadProgress = function (e) {
        this.currCollectData.itemsLoaded = e.itemsLoaded;
        this.currCollectData.itemsTotal = e.itemsTotal;
        var resData;
        if (this.resMap.has(e.resItem.name) == false) {
            resData = neww(ResData);
            resData.packData(e.resItem.name);
            this.resMap.set(e.resItem.name, resData);
        }
        resData = this.resMap.get(e.resItem.name);
        resData.addCount();
        this.currCollectData.execProg(e);
    };
    ResManager.prototype.OnResourceLoadError = function (e) {
        this.currCollectData.addErrCount();
        if (this.currCollectData.errLoadCount < this.ERROR_LOAD_COUNT) {
            this.reloadGroup();
        }
        else {
            this.loadNextGroup();
        }
    };
    ResManager.prototype.update = function () {
        if (this.isLoading == false) {
            var flag = this.loadNextGroup();
            this.isLoading = flag;
        }
        this.reducecCountByDestroyArray();
        var destroyCount = 0; // 防止卡顿
        var currTime = egret.getTimer();
        var resDataArray = DataUtils.CopyArray(this.resMap.values());
        for (var _i = 0, resDataArray_1 = resDataArray; _i < resDataArray_1.length; _i++) {
            var resData = resDataArray_1[_i];
            if (resData == null)
                continue;
            if (resData.canDestroy(currTime) == true) {
                this.resMap.remove(resData.resName);
                RES.destroyRes(resData.resName);
                resData.destroyAll();
                removee(resData);
                destroyCount++;
                if (destroyCount >= this.DESTROY_ONCE_COUNT) {
                    break;
                }
            }
        }
        return true;
    };
    /**
     * 加载下一个资源组
     * 当一个资源组集里的资源组都加载完之后，就加载下一个资源组集里的资源组
     */
    ResManager.prototype.loadNextGroup = function () {
        if (this.currCollectData == null) {
            this.currCollectData = this.collectArray.shift();
            if (this.currCollectData == null)
                return false;
            var groupName = this.currCollectData.currGroup();
            RES.loadGroup(groupName);
            return true;
        }
        else {
            var groupName = this.currCollectData.nextGroup();
            if (groupName == null) {
                this.currCollectData = this.collectArray.shift();
                if (this.currCollectData == null)
                    return false;
                groupName = this.currCollectData.nextGroup();
                RES.loadGroup(groupName);
                return true;
            }
            RES.loadGroup(groupName);
            return true;
        }
    };
    ResManager.prototype.reloadGroup = function () {
        var groupName = this.currCollectData.currGroup();
        RES.loadGroup(groupName);
    };
    ResManager.prototype.sortGroupArray = function (a, b) {
        return a.priority < b.priority ? -1 : 1;
    };
    ResManager.prototype.reduceResCount = function (collectData) {
        var resData;
        var currTime = egret.getTimer();
        for (var _i = 0, _a = collectData.resArray; _i < _a.length; _i++) {
            var resName = _a[_i];
            resData = this.resMap.get(resName);
            if (resData == null)
                continue;
            resData.reduceCount(currTime);
        }
    };
    ResManager.prototype.reducecCountByDestroyArray = function () {
        var destroyArray = DataUtils.CopyArray(this.destroyArray);
        for (var _i = 0, destroyArray_1 = destroyArray; _i < destroyArray_1.length; _i++) {
            var id = destroyArray_1[_i];
            if (id == null)
                continue;
            for (var _a = 0, _b = this.useCollectArray; _a < _b.length; _a++) {
                var collectData = _b[_a];
                if (collectData == null)
                    continue;
                if (collectData.uniqueCode == id) {
                    this.reduceResCount(collectData);
                }
            }
            for (var _c = 0, _d = this.collectArray; _c < _d.length; _c++) {
                var collectData = _d[_c];
                if (collectData == null)
                    continue;
                if (collectData.uniqueCode == id) {
                    this.reduceResCount(collectData);
                }
            }
        }
        this.destroyArray.length = 0;
    };
    return ResManager;
}(DataBase));
__reflect(ResManager.prototype, "ResManager");
//# sourceMappingURL=ResManager.js.map