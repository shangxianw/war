/**
 * 事件管理器
 * 游戏内所有的事件注册与销毁都需要通过本管理器以实现管理
 * 允许同一对象注册完全一样的监听事件，但不允许没有被销毁
 */
class ListenerMgr extends DataBase
{
	public listenerMap:Hash<number, ListenerMgrData>;
	public init()
	{
		this.listenerMap = new Hash<number, ListenerMgrData>();
	}

	public destroy()
	{
		for(let data of this.listenerMap.values())
		{
			data.destroyAll();
		}
		this.listenerMap.destroy();
		this.listenerMap = null;
	}

	public addEventListen(obj:egret.DisplayObject, type:string, cbFn:Function, thisObj:any):number
	{
		if(obj == null || type == null || cbFn == null || thisObj == null)
		{
			LogUtils.Error(`参数有误`);
			return -1;
		}
		// 允许重复注册，但不允许不注销

		let hasCode = IDManager.Ins().getNewId();
		let info = new ListenerMgrData()
		info.packData(obj, type, cbFn, thisObj);
		this.listenerMap.set(hasCode, info)
		return hasCode;
	}

	public removeEventListen(hasCode:number):boolean
	{
		if(hasCode == null)
		{
			LogUtils.Error(`参数有误`);
			return false;
		}

		let info = this.listenerMap.remove(hasCode);
		if(info == null)
			return true;
		
		info.destroyAll();
		info = null
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