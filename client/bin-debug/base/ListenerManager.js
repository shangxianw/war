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
var ListenerMgrData = (function (_super) {
    __extends(ListenerMgrData, _super);
    function ListenerMgrData() {
        return _super.call(this) || this;
    }
    ListenerMgrData.prototype.init = function () {
        this.obj = null;
        this.type = null;
        this.cbFn = null;
        this.thisObj = null;
    };
    ListenerMgrData.prototype.destroy = function () {
        this.obj.removeEventListener(this.type, this.cbFn, this.thisObj);
    };
    ListenerMgrData.prototype.packData = function (obj, type, cbFn, thisObj) {
        this.obj = obj;
        this.type = type;
        this.cbFn = cbFn;
        this.thisObj = thisObj;
        this.obj.addEventListener(this.type, this.cbFn, this.thisObj);
        return this;
    };
    return ListenerMgrData;
}(DataBase));
__reflect(ListenerMgrData.prototype, "ListenerMgrData");
var ListenerMgr = (function (_super) {
    __extends(ListenerMgr, _super);
    function ListenerMgr() {
        return _super.call(this) || this;
    }
    ListenerMgr.prototype.init = function () {
        this.listenerMap = new Hash();
    };
    ListenerMgr.prototype.destroy = function () {
        for (var _i = 0, _a = this.listenerMap.values(); _i < _a.length; _i++) {
            var valueArray = _a[_i];
            for (var _b = 0, valueArray_1 = valueArray; _b < valueArray_1.length; _b++) {
                var listenerMgrData = valueArray_1[_b];
                listenerMgrData.destroyAll();
            }
        }
        this.listenerMap.destroy();
        this.listenerMap = null;
    };
    ListenerMgr.prototype.addEventListen = function (obj, type, cbFn, thisObj) {
        if (obj == null || type == null || cbFn == null || thisObj == null) {
            LogUtils.Error("\u53C2\u6570\u6709\u8BEF");
            return false;
        }
        if (this.listenerMap.has(obj) == false) {
            this.listenerMap.set(obj, []);
        }
        var array = this.listenerMap.get(obj);
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var item = array_1[_i];
            if (item == null) {
                continue;
            }
            if (item.obj == obj && item.type == type && item.cbFn == cbFn && item.thisObj == thisObj) {
                LogUtils.Error("\u76D1\u542C\u51FD\u6570\u91CD\u590D\u6CE8\u518C\uFF0C\u53EF\u5C1D\u8BD5\u6362\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570");
                return false;
            }
        }
        var info = PoolManager.Ins().pop(ListenerMgrData);
        info.packData(obj, type, cbFn, thisObj);
        array.push(info);
        return true;
    };
    ListenerMgr.prototype.removeEventListen = function (obj, type, cbFn, thisObj) {
        if (obj == null || type == null || cbFn == null || thisObj == null) {
            LogUtils.Error("\u53C2\u6570\u6709\u8BEF");
            return false;
        }
        if (this.listenerMap.has(obj) == false) {
            LogUtils.Warn(Utils.GetClassNameByObj(this) + " : " + thisObj + " \u6CA1\u6709\u6CE8\u518C " + type);
            return true;
        }
        var array = this.listenerMap.get(obj);
        for (var _i = 0, array_2 = array; _i < array_2.length; _i++) {
            var item = array_2[_i];
            if (item == null) {
                continue;
            }
            if (item.obj == obj && item.type == type && item.cbFn == cbFn && item.thisObj == thisObj) {
                var index = array.indexOf(item);
                if (index >= 0) {
                    array.splice(index, 1);
                    if (array.length <= 0)
                        this.listenerMap.remove(obj);
                }
                item.destroyAll();
                PoolManager.Ins().push(item);
                return true;
            }
        }
        return false;
    };
    ListenerMgr.Ins = function () {
        if (ListenerMgr.instance == null)
            ListenerMgr.instance = new ListenerMgr();
        return ListenerMgr.instance;
    };
    return ListenerMgr;
}(DataBase));
__reflect(ListenerMgr.prototype, "ListenerMgr");
//# sourceMappingURL=ListenerManager.js.map