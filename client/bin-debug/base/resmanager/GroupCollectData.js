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
var CollectData = (function (_super) {
    __extends(CollectData, _super);
    function CollectData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CollectData.prototype.init = function () {
        this.groupNameArray = [];
        this.priority = null;
        this.currIndex = 0;
        this.itemsLoaded = 0;
        this.itemsTotal = 0;
        this.errLoadCount = 0;
    };
    CollectData.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.groupNameArray.length = 0;
        this.groupNameArray = null;
        this.priority = null;
        this.currIndex = 0;
        this.itemsLoaded = 0;
        this.itemsTotal = 0;
        this.errLoadCount = 0;
    };
    CollectData.prototype.packDate = function (groupNames, cbFn, thisObj, progFn, errFn, priority) {
        if (cbFn === void 0) { cbFn = null; }
        if (thisObj === void 0) { thisObj = null; }
        if (progFn === void 0) { progFn = null; }
        if (errFn === void 0) { errFn = null; }
        this.groupNameArray = groupNames;
        this.priority = priority;
        this.cbFn = cbFn;
        this.errFn = errFn;
        this.thisObj = thisObj;
        this.progFn = progFn;
        return this;
    };
    CollectData.prototype.addErrCount = function () {
        this.errLoadCount++;
    };
    CollectData.prototype.isEnd = function () {
        return this.currIndex >= this.groupNameArray.length - 1 && this.itemsLoaded >= this.itemsTotal;
    };
    CollectData.prototype.nextGroup = function () {
        this.currIndex++;
        return this.currGroup();
    };
    CollectData.prototype.currGroup = function () {
        return this.groupNameArray[this.currIndex];
    };
    CollectData.prototype.execCb = function (query) {
        if (this.cbFn == null || this.thisObj == null)
            return;
        this.cbFn.call(this.thisObj, query);
    };
    CollectData.prototype.execProg = function (query) {
        if (this.progFn == null || this.thisObj == null)
            return;
        this.progFn.call(this.thisObj, query);
    };
    CollectData.prototype.execErr = function (query) {
        if (this.errFn == null || this.thisObj == null)
            return;
        this.errFn.call(this.thisObj, query);
    };
    return CollectData;
}(DataBase));
__reflect(CollectData.prototype, "CollectData");
//# sourceMappingURL=GroupCollectData.js.map