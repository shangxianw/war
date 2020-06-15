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
	private sock: egret.WebSocket;
	protected init()
	{
		this.cachMsgArray = [];
		this.sock = new egret.WebSocket();
		this.sock.type = egret.WebSocket.TYPE_BINARY;
		this.sock.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.OnReceiveMessage, this);
		this.sock.addEventListener(egret.Event.CONNECT, this.OnSocketOpen, this);
		this.sock.addEventListener(egret.Event.CLOSE, this.OnSocketClose, this);
		this.sock.addEventListener(egret.IOErrorEvent.IO_ERROR, this.OnSocketError, this);
	}

	protected destroy()
	{
		for(let data of this.cachMsgArray)
		{
			data.detsroy();
			PoolManager.Ins().push(data);
		}
		this.cachMsgArray.length = 0;

		if(this.sock != null)
		{
			this.sock.removeEventListener(egret.ProgressEvent.SOCKET_DATA, this.OnReceiveMessage, this);
			this.sock.removeEventListener(egret.Event.CONNECT, this.OnSocketOpen, this);
			this.sock.removeEventListener(egret.Event.CLOSE, this.OnSocketClose, this);
			this.sock.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.OnSocketError, this);
			this.sock.close();
			this.sock = null;
		}
	}

	private OnSocketError()
	{

	}

	private OnSocketClose()
	{

	}

	private OnSocketOpen()
	{

	}

	private OnReceiveMessage()
	{

	}

	public sendMessage(netId:number, msg: Uint8Array)
	{
		
	}

	private static instance:SocketManager;
	public static Ins()
	{
		if(SocketManager.instance == null)
			SocketManager.instance = new SocketManager();
		return SocketManager.instance;
	}
}