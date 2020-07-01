/**
 * 网络管理器
 */
class NetManager extends DataBase
{
	private netMap:Hash<number, CBData>;
	protected init()
	{
		this.netMap = new Hash<number, CBData>();
		this.initNet();
	}

	protected destroy()
	{
		this.destroyNet();
		this.removeAllNet();
		this.netMap = null;
	}

	// ---------------------------------------------------------------------- 注册监听
	public setNet(netId:number, cbFn:Function, thisObj:Object):boolean
	{
		if(netId == null || cbFn == null || thisObj == null)
		{
			LogUtils.Error(`参数错误`);
			return false;
		}
		
		if(this.netMap.has(netId) == true)
		{
			LogUtils.Error(`重复注册`);
			return false;
		}
		
		let netData = PoolManager.Ins().pop(CBData) as CBData;
		netData.packData(cbFn, thisObj);
		this.netMap.set(netId, netData);
		return true;
	}

	// ---------------------------------------------------------------------- 发送数据
	// 如果后面参数不为空，则为注册回调
	public C2SMessage(netId:number, msg: Uint8Array, cbFn:Function=null, thisobj:Object=null, cbNetId:number=null):boolean
	{
		if(netId == null || msg == null)
		{
			LogUtils.Error(`参数错误`);
			return false;
		}

		if(cbFn != null && thisobj != null)
		{
			let cbId = cbNetId != null ? cbNetId : netId;
			if(this.netMap.has(cbId) == false)
				this.setNet(cbId, cbFn, this);
		}
		SocketManager.Ins().sendMessage(netId, msg);
	}

	public S2CMessage(netId:number, msg:egret.ByteArray)
	{
		if(netId == null || msg == null)
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
		netData.exec(msg);
		return true;
	}

	private removeAllNet()
	{
		for(let netData of this.netMap.values())
		{
			netData.destroy();
			netData = null;
		}
		this.netMap.destroy();
		return true;
	}	

	// ---------------------------------------------------------------------- 会执行所有在net模块下的类
	private initNet()
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

	private destroyNet()
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