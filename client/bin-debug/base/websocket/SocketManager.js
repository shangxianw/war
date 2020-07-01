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
var SocketManager = (function (_super) {
    __extends(SocketManager, _super);
    function SocketManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.HANDLE_ONCE_COUNT = 20;
        return _this;
    }
    SocketManager.prototype.init = function () {
        this.cachMsgArray = [];
        this.sock = new egret.WebSocket();
        this.sock.type = egret.WebSocket.TYPE_BINARY;
        this.sock.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.OnReceiveMessage, this);
        this.sock.addEventListener(egret.Event.CONNECT, this.OnSocketConnect, this);
        this.sock.addEventListener(egret.Event.CLOSE, this.OnSocketClose, this);
        this.sock.addEventListener(egret.IOErrorEvent.IO_ERROR, this.OnSocketError, this);
        this.sock.connect(GameData.WebSocketHost, GameData.WebSocketPort);
        TimerManager.Ins().addTimer(100, this.update, this);
    };
    SocketManager.prototype.destroy = function () {
        TimerManager.Ins().removeTimer(this.update, this);
        for (var _i = 0, _a = this.cachMsgArray; _i < _a.length; _i++) {
            var data = _a[_i];
            data.detsroy();
            PoolManager.Ins().push(data);
        }
        this.cachMsgArray.length = 0;
        if (this.sock != null) {
            this.sock.removeEventListener(egret.ProgressEvent.SOCKET_DATA, this.OnReceiveMessage, this);
            this.sock.removeEventListener(egret.Event.CONNECT, this.OnSocketConnect, this);
            this.sock.removeEventListener(egret.Event.CLOSE, this.OnSocketClose, this);
            this.sock.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.OnSocketError, this);
            this.sock.close();
            this.sock = null;
        }
    };
    SocketManager.prototype.OnSocketError = function () {
        LogUtils.Error("websocket \u8FDE\u63A5\u9519\u8BEF");
    };
    SocketManager.prototype.OnSocketClose = function () {
        LogUtils.Log("websocket \u8FDE\u63A5\u5173\u95ED");
    };
    SocketManager.prototype.OnSocketConnect = function () {
        LogUtils.Log("websocket \u8FDE\u63A5\u6210\u529F");
    };
    SocketManager.prototype.OnReceiveMessage = function (e) {
        LogUtils.Log("websocket \u63A5\u53D7\u6D88\u606F");
        this.recMessage();
    };
    SocketManager.prototype.sendMessage = function (netId, msg) {
        var sendMsg = new egret.ByteArray();
        sendMsg.writeShort(netId);
        var cmdDataBA = new egret.ByteArray(msg);
        sendMsg.writeBytes(cmdDataBA);
        sendMsg.position = 0;
        this.sock["socket"].send(sendMsg);
    };
    SocketManager.prototype.recMessage = function () {
        var arr = new egret.ByteArray();
        this.sock.readBytes(arr);
        var netId = 2; //arr.readShort();
        var msgByteArray = new egret.ByteArray();
        arr.readBytes(msgByteArray);
        var sockData = PoolManager.Ins().pop(SockData);
        sockData.packData(netId, msgByteArray);
        this.cachMsgArray.push(sockData);
    };
    SocketManager.prototype.update = function () {
        var item;
        var currCount = 0;
        while (this.cachMsgArray.length > 0) {
            item = this.cachMsgArray.shift();
            if (item == null)
                continue;
            NetManager.Ins().S2CMessage(item.netId, item.data);
            currCount++;
            if (currCount >= this.HANDLE_ONCE_COUNT)
                break;
        }
        return true;
    };
    SocketManager.prototype.test = function () {
        var ws = new egret.web.HTML5WebSocket();
        ws.addCallBacks(function () {
            console.log(1);
            var sendMsg = new egret.ByteArray();
            sendMsg.writeShort(11);
            ws.send(sendMsg);
        }, function () { }, function () { }, function () {
            console.log(2);
        }, this);
        ws.connect("127.0.0.1", 8001);
        setInterval(function () {
            ws.send("111");
        }, 1000);
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