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
var ViewData = (function (_super) {
    __extends(ViewData, _super);
    function ViewData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ViewData.prototype.init = function () {
    };
    ViewData.prototype.destroy = function () {
    };
    ViewData.prototype.initAll = function () {
        _super.prototype.initAll.call(this);
    };
    ViewData.prototype.destroyAll = function () {
        _super.prototype.destroyAll.call(this);
    };
    return ViewData;
}(DataBase));
__reflect(ViewData.prototype, "ViewData");
var ViewBase = (function (_super) {
    __extends(ViewBase, _super);
    function ViewBase(skinName, data) {
        return _super.call(this, skinName, data) || this;
    }
    ViewBase.prototype.initAll = function (data) {
        this.viewInfo = new data();
        this["info"] = this.viewInfo;
        this.touchList = [];
        _super.prototype.initAll.call(this);
    };
    ViewBase.prototype.destroyAll = function () {
        this.removeAllEvent();
        _super.prototype.destroyAll.call(this);
    };
    ViewBase.prototype.addEvent = function (target, type, cbFn, thisObj) {
        if (target == null || cbFn == null || thisObj == null || type == null || type == "") {
            LogUtils.Error("\u53C2\u6570\u6709\u8BEF");
            return false;
        }
        for (var _i = 0, _a = this.touchList; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item == null)
                continue;
            if (item.target == target && item.cbFn == cbFn && item.thisObj == thisObj && item.type == type) {
                LogUtils.Error("\u91CD\u590D\u6CE8\u518C");
                return false;
            }
        }
        var info = PoolManager.Ins().pop(TouchData);
        info.packData(target, type, cbFn, thisObj);
        this.touchList.push(info);
        return true;
    };
    ViewBase.prototype.removeEvent = function (target, type, cbFn, thisObj) {
        if (target == null || cbFn == null || thisObj == null || type == null || type == "") {
            LogUtils.Error("\u53C2\u6570\u6709\u8BEF");
            return false;
        }
        for (var _i = 0, _a = this.touchList; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item == null)
                continue;
            if (item.target == target && item.type == type && item.cbFn == cbFn && item.thisObj == thisObj && item.type == type) {
                var index = this.touchList.indexOf(item);
                if (index >= 0) {
                    this.touchList.splice(index, 1);
                    item.destroyAll();
                    PoolManager.Ins().push(item);
                    return true;
                }
                return false;
            }
        }
        return false;
    };
    ViewBase.prototype.removeAllEvent = function () {
        var array = DataUtils.CopyArray(this.touchList);
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var item = array_1[_i];
            if (item == null)
                continue;
            item.destroyAll();
            PoolManager.Ins().push(item);
        }
        this.touchList.length = 0;
    };
    return ViewBase;
}(UIBase));
__reflect(ViewBase.prototype, "ViewBase");
var TouchData = (function (_super) {
    __extends(TouchData, _super);
    function TouchData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TouchData.prototype.init = function () {
    };
    TouchData.prototype.destroy = function () {
        ListenerMgr.Ins().removeEventListen(this.target, this.type, this.cbFn, this.thisObj);
    };
    TouchData.prototype.packData = function (target, type, cbFn, thisObj) {
        this.target = target;
        this.type = type;
        this.cbFn = cbFn;
        this.thisObj = thisObj;
        ListenerMgr.Ins().addEventListen(this.target, this.type, this.cbFn, this.thisObj);
        return this;
    };
    TouchData.prototype.exec = function (e) {
        if (this.cbFn != null && this.thisObj != null)
            this.cbFn.call(this.thisObj, e);
    };
    return TouchData;
}(DataBase));
__reflect(TouchData.prototype, "TouchData");
//# sourceMappingURL=ViewBase.js.map