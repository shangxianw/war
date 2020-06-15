class NetManager extends DataBase
{
	private netMap:Hash<number, CBData>;
	protected init()
	{
		this.netMap = new Hash<number, CBData>();
	}

	protected destroy()
	{
		this.removeAllNet();
		this.netMap = null;
	}

	public setNet(netId:number, cbFn:Function, thisObj:Object):boolean
	{
		if(netId == null || cbFn == null || thisObj == null)
		{
			LogUtils.Error(`参数错误`);
			return false;
		}

		if(this.netMap.has(netId) == false)
		{
			LogUtils.Error(`重复注册`);
			return false;
		}

		let netData = PoolManager.Ins().pop(CBData) as CBData;
		netData.packData(cbFn, thisObj);
		this.netMap.set(netId, netData);
		return true;
	}

	public removeNet(netId):boolean
	{
		if(netId == null)
		{
			LogUtils.Error(`参数错误`);
			return false;
		}

		if(this.netMap.has(netId) == false)
		{
			LogUtils.Error(`没有注册`);
			return false;
		}

		let netData = this.netMap.remove(netId);
		netData.destroy();
		PoolManager.Ins().push(netData);
		return true;
	}

	public removeAllNet()
	{
		for(let netData of this.netMap.values())
		{
			if(netData == null)
				continue;
			netData.destroy();
			PoolManager.Ins().push(netData);
		}
		this.netMap.destroy();
	}

	public C2SMessage(netId:number, msg: Uint8Array)
	{
		SocketManager.Ins().sendMessage(netId, msg);
	}

	public S2CMessage(netId:number, cmdDataBA:egret.ByteArray)
	{
		if(netId == null || cmdDataBA == null)
		{
			LogUtils.Error(`参数错误`);
			return false;
		}

		if(this.netMap.has(netId) == false)
		{
			LogUtils.Error(`没有注册`);
			return false;
		}

		let netData = this.netMap.get(netId);
		netData.exec(cmdDataBA);
		return true;
	}

	private static instance:NetManager;
	public static Ins()
	{
		if(NetManager.instance == null)
			NetManager.instance = new NetManager();
		return NetManager.instance;
	}
}