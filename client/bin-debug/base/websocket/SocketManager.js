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
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.HANDLE_ONCE_COUNT = 20;
        return _this;
    }
    SocketManager.prototype.init = function () {
        this.cachMsgArray = [];
        this.sock = new egret.WebSocket();
        // this.sock = new egret.web.HTML5WebSocket();
        this.sock.type = egret.WebSocket.TYPE_BINARY;
        // this.sock.addCallBacks(this.OnSocketConnect, this.OnSocketClose, this.OnReceiveMessage, this.OnSocketError, this);
        this.sock.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.OnReceiveMessage, this);
        this.sock.addEventListener(egret.Event.CONNECT, this.OnSocketConnect, this);
        this.sock.addEventListener(egret.Event.CLOSE, this.OnSocketClose, this);
        this.sock.addEventListener(egret.IOErrorEvent.IO_ERROR, this.OnSocketError, this);
        this.sock.connect(GameData.WebSocketHost, GameData.WebSocketPort);
        // this.sock.connectByUrl("ws://" + GameData.WebSocketHost + ":" + GameData.WebSocketPort);
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
        sendMsg.writeInt(msg.length + 2); //协议长度
        sendMsg.writeShort(netId);
        var cmdDataBA = new egret.ByteArray(msg);
        sendMsg.writeBytes(cmdDataBA);
        sendMsg.position = 0;
        this.sock.writeBytes(sendMsg, 0, sendMsg.length);
        // this.sock.send(sendMsg);
    };
    SocketManager.prototype.recMessage = function () {
        // let arr: egret.ByteArray = new egret.ByteArray();
        // this.sock.(arr);
        // let netId = arr.readShort();
        // let msgByteArray: egret.ByteArray = new egret.ByteArray();
        // arr.readBytes(msgByteArray);
        // let msgData:MsgData = PoolManager.Ins().pop(MsgData) as MsgData;
        // msgData.packData(netId, msgByteArray);
        // this.cachMsgArray.push(msgData);
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
    };
    SocketManager.prototype.test = function (netId, msg) {
        // let sendMsg: egret.ByteArray = new egret.ByteArray();
        // sendMsg.writeInt(msg.length+2);
        // sendMsg.writeShort(netId);
        // sendMsg.writeUTF(msg);
        // this.sock.writeBytes(sendMsg, 0, sendMsg.length);
    };
    SocketManager.Ins = function () {
        if (SocketManager.instance == null)
            SocketManager.instance = new SocketManager();
        return SocketManager.instance;
    };
    return SocketManager;
}(DataBase));
__reflect(SocketManager.prototype, "SocketManager");
/**
 * class MsgData
{
    public netId:number;
    public data:egret.ByteArray;
    public packData(netId:number, data:egret.ByteArray)
    {
        this.netId = netId;
        this.data = data;
    }

    public detsroy()
    {

    }
}

class SocketManager extends DataBase
{
    public cachMsgArray:MsgData[];
    private sock: egret.WebSocket;

    private HANDLE_ONCE_COUNT = 20;
    protected init()
    {
        this.cachMsgArray = [];
        this.sock = new egret.WebSocket();
        this.sock.type = egret.WebSocket.TYPE_BINARY;
        this.sock.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.OnReceiveMessage, this);
        this.sock.addEventListener(egret.Event.CONNECT, this.OnSocketConnect, this);
        this.sock.addEventListener(egret.Event.CLOSE, this.OnSocketClose, this);
        this.sock.addEventListener(egret.IOErrorEvent.IO_ERROR, this.OnSocketError, this);
        this.sock.connect(GameData.WebSocketHost, GameData.WebSocketPort);
        // this.sock.connectByUrl("ws://" + GameData.WebSocketHost + ":" + GameData.WebSocketPort);
        TimerManager.Ins().addTimer(100, this.update, this);
    }

    protected destroy()
    {
        TimerManager.Ins().removeTimer(this.update, this);
        for(let data of this.cachMsgArray)
        {
            data.detsroy();
            PoolManager.Ins().push(data);
        }
        this.cachMsgArray.length = 0;

        if(this.sock != null)
        {
            this.sock.removeEventListener(egret.ProgressEvent.SOCKET_DATA, this.OnReceiveMessage, this);
            this.sock.removeEventListener(egret.Event.CONNECT, this.OnSocketConnect, this);
            this.sock.removeEventListener(egret.Event.CLOSE, this.OnSocketClose, this);
            this.sock.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.OnSocketError, this);
            this.sock.close();
            this.sock = null;
        }
    }

    private OnSocketError()
    {
        LogUtils.Error(`websocket 连接错误`);
    }

    private OnSocketClose()
    {
        LogUtils.Log(`websocket 连接关闭`);
    }

    private OnSocketConnect()
    {
        LogUtils.Log(`websocket 连接成功`);
    }

    private OnReceiveMessage(e:egret.ProgressEvent)
    {
        LogUtils.Log(`websocket 接受消息`);
        this.recMessage();
    }

    public sendMessage(netId:number, msg: Uint8Array)
    {
        let sendMsg: egret.ByteArray = new egret.ByteArray();
        sendMsg.writeInt(msg.length+2);//协议长度
        sendMsg.writeShort(netId);

        let cmdDataBA = new egret.ByteArray(msg);
        sendMsg.writeBytes(cmdDataBA);
        sendMsg.position = 0;
        this.sock.writeBytes(sendMsg, 0, sendMsg.length);
        // this.sock["socket"].send(sendMsg);
        // this.sock.writeUTF("111");
    }

    private recMessage()
    {
        let arr: egret.ByteArray = new egret.ByteArray();
        this.sock.readBytes(arr);
        let netId = arr.readShort();
        let msgByteArray: egret.ByteArray = new egret.ByteArray();
        arr.readBytes(msgByteArray);

        let msgData:MsgData = PoolManager.Ins().pop(MsgData) as MsgData;
        msgData.packData(netId, msgByteArray);
        this.cachMsgArray.push(msgData);
    }

    private update()
    {
        let item:MsgData;
        let currCount = 0;
        while(this.cachMsgArray.length > 0)
        {
            item = this.cachMsgArray.shift();
            if(item == null)
                continue;
            NetManager.Ins().S2CMessage(item.netId, item.data);
            currCount++;
            if(currCount >= this.HANDLE_ONCE_COUNT) // 防止卡顿
                break;
        }
    }

    public test(netId:number, msg:string)
    {
        let sendMsg: egret.ByteArray = new egret.ByteArray();
        sendMsg.writeInt(msg.length+2);
        sendMsg.writeShort(netId);
        sendMsg.writeUTF(msg);
        this.sock.writeBytes(sendMsg, 0, sendMsg.length);
    }

    private static instance:SocketManager;
    public static Ins()
    {
        if(SocketManager.instance == null)
            SocketManager.instance = new SocketManager();
        return SocketManager.instance;
    }
}
 */ 
//# sourceMappingURL=SocketManager.js.map