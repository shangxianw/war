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
var NetManager = (function (_super) {
    __extends(NetManager, _super);
    function NetManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NetManager.prototype.init = function () {
        this.netMap = new Hash();
    };
    NetManager.prototype.destroy = function () {
        this.removeAllNet();
        this.netMap = null;
    };
    NetManager.prototype.setNet = function (netId, cbFn, thisObj) {
        if (netId == null || cbFn == null || thisObj == null) {
            LogUtils.Error("\u53C2\u6570\u9519\u8BEF");
            return false;
        }
        if (this.netMap.has(netId) == false) {
            LogUtils.Error("\u91CD\u590D\u6CE8\u518C");
            return false;
        }
        var netData = PoolManager.Ins().pop(CBData);
        netData.packData(cbFn, thisObj);
        this.netMap.set(netId, netData);
        return true;
    };
    NetManager.prototype.removeNet = function (netId) {
        if (netId == null) {
            LogUtils.Error("\u53C2\u6570\u9519\u8BEF");
            return false;
        }
        if (this.netMap.has(netId) == false) {
            LogUtils.Error("\u6CA1\u6709\u6CE8\u518C");
            return false;
        }
        var netData = this.netMap.remove(netId);
        netData.destroy();
        PoolManager.Ins().push(netData);
        return true;
    };
    NetManager.prototype.removeAllNet = function () {
        for (var _i = 0, _a = this.netMap.values(); _i < _a.length; _i++) {
            var netData = _a[_i];
            if (netData == null)
                continue;
            netData.destroy();
            PoolManager.Ins().push(netData);
        }
        this.netMap.destroy();
    };
    NetManager.prototype.C2SMessage = function (netId, msg) {
        SocketManager.Ins().sendMessage(netId, msg);
    };
    NetManager.prototype.S2CMessage = function (netId, cmdDataBA) {
        if (netId == null || cmdDataBA == null) {
            LogUtils.Error("\u53C2\u6570\u9519\u8BEF");
            return false;
        }
        if (this.netMap.has(netId) == false) {
            LogUtils.Error("\u6CA1\u6709\u6CE8\u518C");
            return false;
        }
        var netData = this.netMap.get(netId);
        netData.exec(cmdDataBA);
        return true;
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