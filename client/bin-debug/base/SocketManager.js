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
var MsgData = (function () {
    function MsgData() {
    }
    MsgData.prototype.packData = function (netId, data) {
        this.netId = netId;
        this.data = data;
    };
    MsgData.prototype.detsroy = function () {
    };
    return MsgData;
}());
__reflect(MsgData.prototype, "MsgData");
var SocketManager = (function (_super) {
    __extends(SocketManager, _super);
    function SocketManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SocketManager.prototype.init = function () {
        this.cachMsgArray = [];
        this.sock = new egret.WebSocket();
        this.sock.type = egret.WebSocket.TYPE_BINARY;
        this.sock.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.OnReceiveMessage, this);
        this.sock.addEventListener(egret.Event.CONNECT, this.OnSocketOpen, this);
        this.sock.addEventListener(egret.Event.CLOSE, this.OnSocketClose, this);
        this.sock.addEventListener(egret.IOErrorEvent.IO_ERROR, this.OnSocketError, this);
    };
    SocketManager.prototype.destroy = function () {
        for (var _i = 0, _a = this.cachMsgArray; _i < _a.length; _i++) {
            var data = _a[_i];
            data.detsroy();
            PoolManager.Ins().push(data);
        }
        this.cachMsgArray.length = 0;
        if (this.sock != null) {
            this.sock.removeEventListener(egret.ProgressEvent.SOCKET_DATA, this.OnReceiveMessage, this);
            this.sock.removeEventListener(egret.Event.CONNECT, this.OnSocketOpen, this);
            this.sock.removeEventListener(egret.Event.CLOSE, this.OnSocketClose, this);
            this.sock.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.OnSocketError, this);
            this.sock.close();
            this.sock = null;
        }
    };
    SocketManager.prototype.OnSocketError = function () {
    };
    SocketManager.prototype.OnSocketClose = function () {
    };
    SocketManager.prototype.OnSocketOpen = function () {
    };
    SocketManager.prototype.OnReceiveMessage = function () {
    };
    SocketManager.prototype.sendMessage = function (netId, msg) {
    };
    SocketManager.Ins = function () {
        if (SocketManager.instance == null)
            SocketManager.instance = new SocketManager();
        return SocketManager.instance;
    };
    return SocketManager;
}(DataBase));
__reflect(SocketManager.prototype, "SocketManager");
//# sourceMappingURL=SocketManager.js.map