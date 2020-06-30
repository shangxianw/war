class MsgData
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
	// private sock: egret.web.HTML5WebSocket;
	private sock: egret.WebSocket;

	private HANDLE_ONCE_COUNT = 20;
	protected init()
	{
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
		sendMsg.writeShort(netId);
		let cmdDataBA = new egret.ByteArray(msg);
		sendMsg.writeBytes(cmdDataBA);
		sendMsg.position = 0;
		// this.sock.writeBytes(sendMsg, 0, sendMsg.length);
		this.sock["socket"].send(sendMsg);
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
		return true;
	}

	public test()
	{
		let ws = new egret.web.HTML5WebSocket();
        ws.addCallBacks(()=>{
            console.log(1);
            let sendMsg: egret.ByteArray = new egret.ByteArray();
            sendMsg.writeShort(11);
            ws.send(sendMsg);
        }, ()=>{}, ()=>{},()=>{
            console.log(2);
        }, this);
        ws.connect("127.0.0.1", 8001);

        setInterval(()=>{
            ws.send("111");
        }, 1000);
	}

	private static instance:SocketManager;
	public static Ins()
	{
		if(SocketManager.instance == null)
			SocketManager.instance = new SocketManager();
		return SocketManager.instance;
	}
}