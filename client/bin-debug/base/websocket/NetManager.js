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
        this.destroySubNet();
        this.removeAllNet();
        this.netMap = null;
    };
    NetManager.prototype.initData = function () {
        this.initSubNet();
    };
    NetManager.prototype.setNet = function (netId, cbFn, thisObj) {
        if (netId == null || cbFn == null || thisObj == null) {
            LogUtils.Error("\u53C2\u6570\u9519\u8BEF");
            return false;
        }
        if (this.netMap.has(netId) == false) {
            this.netMap.set(netId, []);
        }
        if (this.checkRepeat(netId, cbFn, thisObj) == true)
            return false;
        var netDataArray = this.netMap.get(netId);
        var netData = PoolManager.Ins().pop(CBData);
        netData.packData(cbFn, thisObj);
        netDataArray.push(netData);
        return true;
    };
    NetManager.prototype.checkRepeat = function (netId, cbFn, thisObj) {
        var netDataArray = this.netMap.get(netId);
        if (netDataArray == null)
            return false;
        for (var _i = 0, netDataArray_1 = netDataArray; _i < netDataArray_1.length; _i++) {
            var netData = netDataArray_1[_i];
            if (netData.cbFn == cbFn && netData.thisObj == thisObj) {
                LogUtils.Error("重复注册");
                return true;
            }
        }
        return false;
    };
    NetManager.prototype.removeNet = function (netId, cbFn, thisObj) {
        if (netId == null) {
            LogUtils.Error("\u53C2\u6570\u9519\u8BEF");
            return false;
        }
        if (this.netMap.has(netId) == false) {
            LogUtils.Error("\u6CA1\u6709\u6CE8\u518C");
            return false;
        }
        var netDataArray = this.netMap.get(netId);
        for (var _i = 0, netDataArray_2 = netDataArray; _i < netDataArray_2.length; _i++) {
            var netData = netDataArray_2[_i];
            if (netData.cbFn == cbFn && netData.thisObj == thisObj) {
                var index = netDataArray.indexOf(netData);
                if (index >= 0)
                    netDataArray.splice(index, 1);
                netData.destroy();
                PoolManager.Ins().push(netData);
                return true;
            }
        }
        return false;
    };
    NetManager.prototype.removeAllNet = function () {
        for (var _i = 0, _a = this.netMap.values(); _i < _a.length; _i++) {
            var netDataArray = _a[_i];
            for (var _b = 0, netDataArray_3 = netDataArray; _b < netDataArray_3.length; _b++) {
                var netData = netDataArray_3[_b];
                if (netData == null)
                    continue;
                netData.destroy();
                PoolManager.Ins().push(netData);
            }
            netDataArray.length = 0;
        }
        this.netMap.destroy();
    };
    NetManager.prototype.C2SMessage = function (netId, msg, cbFn, thisobj, cbNetId) {
        if (cbFn === void 0) { cbFn = null; }
        if (thisobj === void 0) { thisobj = null; }
        if (cbNetId === void 0) { cbNetId = null; }
        if (cbFn != null && thisobj != null) {
            var cbId = cbNetId != null ? cbNetId : netId;
            if (this.checkRepeat(cbId, cbFn, thisobj) == false)
                this.setNet(cbId, cbFn, this);
        }
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
        var netDataArray = this.netMap.get(netId);
        for (var _i = 0, netDataArray_4 = netDataArray; _i < netDataArray_4.length; _i++) {
            var netData = netDataArray_4[_i];
            netData.exec(cmdDataBA);
        }
        return true;
    };
    NetManager.prototype.initSubNet = function () {
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
    NetManager.prototype.destroySubNet = function () {
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