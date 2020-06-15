class NetManager extends DataBase
{
	private netMap:Hash<number, CBData[]>;
	protected init()
	{
		this.netMap = new Hash<number, CBData[]>();
	}

	protected destroy()
	{
		this.destroySubNet();
		this.removeAllNet();
		this.netMap = null;
	}

	public initData()
	{
		this.initSubNet();
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
			this.netMap.set(netId, []);
		}

		let netDataArray = this.netMap.get(netId);
		for(let netData of netDataArray)
		{
			if(netData.cbFn == cbFn && netData.thisObj == thisObj)
			{
				LogUtils.Error("重复注册");
				return false;
			}
		}

		let netData = PoolManager.Ins().pop(CBData) as CBData;
		netData.packData(cbFn, thisObj);
		netDataArray.push(netData);
		return true;
	}

	public removeNet(netId, cbFn:Function, thisObj:Object):boolean
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

		let netDataArray = this.netMap.get(netId);
		for(let netData of netDataArray)
		{
			if(netData.cbFn == cbFn && netData.thisObj == thisObj)
			{
				let index = netDataArray.indexOf(netData);
				if(index >= 0)
					netDataArray.splice(index, 1);
				netData.destroy();
				PoolManager.Ins().push(netData);
				return true;
			}
		}

		return false;
	}

	public removeAllNet()
	{
		for(let netDataArray of this.netMap.values())
		{
			for(let netData of netDataArray)
			{
				if(netData == null)
					continue;
				netData.destroy();
				PoolManager.Ins().push(netData);
			}
			netDataArray.length = 0;
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

		let netDataArray = this.netMap.get(netId);
		for(let netData of netDataArray)
		{
			netData.exec(cmdDataBA);
		}
		return true;
	}

	private initSubNet()
	{
		for(let key in net)
		{
			if(net.hasOwnProperty(key) == false)
				continue;

			let netObj = net[key];
			if(typeof(netObj.init) == "function")
			{
				netObj.prototype.init();
			}
			else if(typeof(netObj.prototype.init) == "function")
			{
				netObj.prototype.init();
			}
			else
			{
				LogUtils.Error(`net ${key} 没有初始化`);
			}
		}
	}

	private destroySubNet()
	{
		for(let key in net)
		{
			if(net.hasOwnProperty(key) == false)
				continue;

			let netObj = net[key];
			if(typeof(netObj.destroy) == "function")
			{
				netObj.prototype.destroy();
			}
			else if(typeof(netObj.prototype.init) == "function")
			{
				netObj.prototype.destroy();
			}
			else
			{
				LogUtils.Error(`net ${key} 没有销毁`);
			}
		}
	}

	private static instance:NetManager;
	public static Ins()
	{
		if(NetManager.instance == null)
			NetManager.instance = new NetManager();
		return NetManager.instance;
	}
}