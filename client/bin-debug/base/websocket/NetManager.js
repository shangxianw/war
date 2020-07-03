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
 * 网络管理器
 */
var NetManager = (function (_super) {
    __extends(NetManager, _super);
    function NetManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NetManager.prototype.init = function () {
        this.netMap = new Hash();
        this.initNet();
    };
    NetManager.prototype.destroy = function () {
        this.destroyNet();
        this.removeAllNet();
        this.netMap = null;
    };
    // ---------------------------------------------------------------------- 注册监听
    NetManager.prototype.setNet = function (netId, cbFn, thisObj) {
        if (netId == null || cbFn == null || thisObj == null) {
            LogUtils.Error("\u53C2\u6570\u9519\u8BEF");
            return false;
        }
        if (this.netMap.has(netId) == true) {
            LogUtils.Error("\u91CD\u590D\u6CE8\u518C");
            return false;
        }
        var netData = PoolManager.Ins().pop(CBData);
        netData.packData(cbFn, thisObj);
        this.netMap.set(netId, netData);
        return true;
    };
    // ---------------------------------------------------------------------- 发送数据
    // 如果后面参数不为空，则为注册回调
    NetManager.prototype.C2SMessage = function (netId, msg, cbFn, thisobj, cbNetId) {
        if (cbFn === void 0) { cbFn = null; }
        if (thisobj === void 0) { thisobj = null; }
        if (cbNetId === void 0) { cbNetId = null; }
        if (netId == null || msg == null) {
            LogUtils.Error("\u53C2\u6570\u9519\u8BEF");
            return false;
        }
        if (cbFn != null && thisobj != null) {
            var cbId = cbNetId != null ? cbNetId : netId;
            if (this.netMap.has(cbId) == false)
                this.setNet(cbId, cbFn, this);
        }
        SocketManager.Ins().sendMessage(netId, msg);
    };
    NetManager.prototype.S2CMessage = function (netId, msg) {
        if (netId == null || msg == null) {
            LogUtils.Error("\u53C2\u6570\u9519\u8BEF");
            return false;
        }
        if (this.netMap.has(netId) == false) {
            LogUtils.Error("\u6CA1\u6709\u6CE8\u518C");
            return false;
        }
        var netData = this.netMap.get(netId);
        netData.exec(msg);
        return true;
    };
    NetManager.prototype.removeAllNet = function () {
        for (var _i = 0, _a = this.netMap.values(); _i < _a.length; _i++) {
            var netData = _a[_i];
            netData.destroy();
            netData = null;
        }
        this.netMap.destroy();
        return true;
    };
    // ---------------------------------------------------------------------- 会执行所有在net模块下的类
    NetManager.prototype.initNet = function () {
        for (var key in net) {
            if (net.hasOwnProperty(key) == false)
                continue;
            var netObj = net[key];
            if (typeof (netObj.init) == "function") {
                netObj.prototype.init();
            }
            else if (typeof (netObj.prototype.init) == "function") {
                netObj.prototype.init();
            }
            else {
                LogUtils.Error("net " + key + " \u6CA1\u6709\u521D\u59CB\u5316");
            }
        }
    };
    NetManager.prototype.destroyNet = function () {
        for (var key in net) {
            if (net.hasOwnProperty(key) == false)
                continue;
            var netObj = net[key];
            if (typeof (netObj.destroy) == "function") {
                netObj.prototype.destroy();
            }
            else if (typeof (netObj.prototype.init) == "function") {
                netObj.prototype.destroy();
            }
            else {
                LogUtils.Error("net " + key + " \u6CA1\u6709\u9500\u6BC1");
            }
        }
    };
    NetManager.Ins = function () {
        if (NetManager.instance == null)
            NetManager.instance = new NetManager();
        return NetManager.instance;
    };
    return NetManager;
}(DataBase));
__reflect(NetManager.prototype, "NetManager");
//# sourceMappingURL=NetManager.js.map