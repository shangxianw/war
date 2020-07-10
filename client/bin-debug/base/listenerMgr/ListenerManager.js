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
 * 事件管理器
 * 游戏内所有的事件注册与销毁都需要通过本管理器以实现管理
 * 允许同一对象注册完全一样的监听事件，但不允许没有被销毁
 */
var ListenerMgr = (function (_super) {
    __extends(ListenerMgr, _super);
    function ListenerMgr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListenerMgr.prototype.init = function () {
        this.listenerMap = new Hash();
    };
    ListenerMgr.prototype.destroy = function () {
        for (var _i = 0, _a = this.listenerMap.values(); _i < _a.length; _i++) {
            var data = _a[_i];
            data.destroyAll();
        }
        this.listenerMap.destroy();
        this.listenerMap = null;
    };
    ListenerMgr.prototype.addEventListen = function (obj, type, cbFn, thisObj) {
        if (obj == null || type == null || cbFn == null || thisObj == null) {
            LogUtils.Error("\u53C2\u6570\u6709\u8BEF");
            return -1;
        }
        // 允许重复注册，但不允许不注销
        var hasCode = IDManager.Ins().getNewId();
        var info = new ListenerMgrData();
        info.packData(obj, type, cbFn, thisObj);
        this.listenerMap.set(hasCode, info);
        return hasCode;
    };
    ListenerMgr.prototype.removeEventListen = function (hasCode) {
        if (hasCode == null) {
            LogUtils.Error("\u53C2\u6570\u6709\u8BEF");
            return false;
        }
        var info = this.listenerMap.remove(hasCode);
        if (info == null)
            return true;
        info.destroyAll();
        info = null;
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