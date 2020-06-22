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
var GroupCollectData = (function (_super) {
    __extends(GroupCollectData, _super);
    function GroupCollectData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GroupCollectData.prototype.init = function () {
        this.groupNameArray = [];
        this.priority = null;
        this.currIndex = 0;
        this.itemsLoaded = 0;
        this.itemsTotal = 0;
        this.errLoadCount = 0;
        this.resArray = [];
    };
    GroupCollectData.prototype.destroy = function () {
        this.groupNameArray.length = 0;
        this.groupNameArray = null;
        this.priority = null;
        this.currIndex = 0;
        this.itemsLoaded = 0;
        this.itemsTotal = 0;
        this.errLoadCount = 0;
        this.resArray.length = 0;
    };
    GroupCollectData.prototype.packDate = function (groupNames, cbFn, thisObj, progFn, errFn, priority) {
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
        this.initResName();
        return this;
    };
    GroupCollectData.prototype.addErrCount = function () {
        this.errLoadCount++;
    };
    GroupCollectData.prototype.isEnd = function () {
        return this.currIndex >= this.groupNameArray.length - 1 && this.itemsLoaded >= this.itemsTotal;
    };
    GroupCollectData.prototype.nextGroup = function () {
        this.currIndex++;
        return this.currGroup();
    };
    GroupCollectData.prototype.currGroup = function () {
        return this.groupNameArray[this.currIndex];
    };
    GroupCollectData.prototype.execCb = function (query) {
        if (this.cbFn == null || this.thisObj == null)
            return;
        this.cbFn.call(this.thisObj, query);
    };
    GroupCollectData.prototype.execProg = function (query) {
        if (this.progFn == null || this.thisObj == null)
            return;
        this.progFn.call(this.thisObj, query);
    };
    GroupCollectData.prototype.execErr = function (query) {
        if (this.errFn == null || this.thisObj == null)
            return;
        this.errFn.call(this.thisObj, query);
    };
    GroupCollectData.prototype.initResName = function () {
        for (var _i = 0, _a = this.groupNameArray; _i < _a.length; _i++) {
            var groupName = _a[_i];
            var groupData = RES.getGroupByName(groupName);
            if (groupData == null)
                continue;
            for (var _b = 0, groupData_1 = groupData; _b < groupData_1.length; _b++) {
                var item = groupData_1[_b];
                this.resArray.push(item.name);
            }
        }
    };
    return GroupCollectData;
}(DataBase));
__reflect(GroupCollectData.prototype, "GroupCollectData");
//# sourceMappingURL=GroupCollectData.js.map