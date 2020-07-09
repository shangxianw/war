class SocketManager extends DataBase
{
	public cachMsgArray:SockData[];
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

	// ---------------------------------------------------------------------- 发送消息
	public sendMessage(netId:number, msg: Uint8Array)
	{
		if(netId == null || msg == null)
		{
			LogUtils.Error(`参数错误`);
			return false;
		}

		let sendMsg: egret.ByteArray = new egret.ByteArray();
		sendMsg.writeShort(netId);
		let cmdDataBA = new egret.ByteArray(msg);
		sendMsg.writeBytes(cmdDataBA);
		sendMsg.position = 0;
		this.sock["socket"].send(sendMsg);
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

	private recMessage()
	{
		let arr: egret.ByteArray = new egret.ByteArray();
		this.sock.readBytes(arr);
		
		let netId = 2;//arr.readShort();
		let msgByteArray: egret.ByteArray = new egret.ByteArray();
		arr.readBytes(msgByteArray);

		let sockData:SockData = PoolManager.Ins().pop(SockData) as SockData;
		sockData.packData(netId, msgByteArray);
		this.cachMsgArray.push(sockData);
	}

	private update()
	{
		let item:SockData;
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
	
	private static instance:SocketManager;
	public static Ins()
	{
		if(SocketManager.instance == null)
			SocketManager.instance = new SocketManager();
		return SocketManager.instance;
	}
}