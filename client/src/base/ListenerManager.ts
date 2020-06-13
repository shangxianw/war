class ListenerMgrData extends DataBase
{
	public obj:egret.DisplayObject;
	public type:string;
	public cbFn:Function;
	public thisObj:any;
	public constructor()
	{
		super();
	}

	public init()
	{
		this.obj = null;
		this.type = null;
		this.cbFn = null;
		this.thisObj = null;
	}

	protected destroy()
	{
		this.obj.removeEventListener(this.type, this.cbFn, this.thisObj);
	}

	public packData(obj:egret.DisplayObject, type:string, cbFn:Function, thisObj:any)
	{
		this.obj = obj;
		this.type = type;
		this.cbFn = cbFn;
		this.thisObj = thisObj;
		this.obj.addEventListener(this.type, this.cbFn, this.thisObj);
		return this;
	}
}

class ListenerMgr extends DataBase
{
	private listenerMap:Hash<egret.DisplayObject, ListenerMgrData[]>;
	public constructor()
	{
		super();
	}

	public init()
	{
		this.listenerMap = new Hash<egret.DisplayObject, ListenerMgrData[]>();
	}

	public destroy()
	{
		for(let valueArray of this.listenerMap.values())
		{
			for(let listenerMgrData of valueArray)
			{
				listenerMgrData.destroyAll();
			}
		}
		this.listenerMap.destroy();
		this.listenerMap = null;
	}

	public addEventListen(obj:egret.DisplayObject, type:string, cbFn:Function, thisObj:any):boolean
	{
		if(obj == null || type == null || cbFn == null || thisObj == null)
		{
			LogUtils.Error(`参数有误`);
			return false;
		}

		if(this.listenerMap.has(obj) == false)
		{
			this.listenerMap.set(obj, []);
		}

		let array = this.listenerMap.get(obj);
		for(let item of array)
		{
			if(item == null)
			{
				continue;
			}

			if(item.obj == obj && item.type == type && item.cbFn == cbFn && item.thisObj == thisObj)
			{
				LogUtils.Error(`监听函数重复注册，可尝试换一个回调函数`);
				return false
			}
		}

		let info = PoolManager.Ins().pop(ListenerMgrData) as ListenerMgrData;
		info.packData(obj, type, cbFn, thisObj);
		array.push(info);
		return true;
	}

	public removeEventListen(obj:egret.DisplayObject, type:string, cbFn:Function, thisObj:any):boolean
	{
		if(obj == null || type == null || cbFn == null || thisObj == null)
		{
			LogUtils.Error(`参数有误`);
			return false;
		}

		if(this.listenerMap.has(obj) == false)
		{
			LogUtils.Warn(`${Utils.GetClassNameByObj(this)} : ${thisObj} 没有注册 ${type}`);
			return true;
		}

		let array = this.listenerMap.get(obj);
		for(let item of array)
		{
			if(item == null)
			{
				continue;
			}

			if(item.obj == obj && item.type == type && item.cbFn == cbFn && item.thisObj == thisObj)
			{
				let index:number = array.indexOf(item);
				if(index >= 0)
				{
					array.splice(index, 1);
					if(array.length <= 0)
						this.listenerMap.remove(obj);
				}
				item.destroyAll();
				PoolManager.Ins().push(item);
				return true;
			}
		}
		return false;
	}

	private static instance:ListenerMgr;
	public static Ins()
	{
		if(ListenerMgr.instance == null)
			ListenerMgr.instance = new ListenerMgr();
		return ListenerMgr.instance;
	}
}