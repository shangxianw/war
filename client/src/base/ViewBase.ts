class ViewData extends DataBase
{
	protected static ID:number;
	public resGroup:string;
	public layer:eui.UILayer;

	protected init()
	{
		
	}

	protected destroy()
	{
		
	}
	protected initAll()
	{
		super.initAll();
	}

	public destroyAll()
	{
		super.destroyAll();
	}
}

abstract class ViewBase extends UIBase
{
	public viewInfo:ViewData;
	private touchList:TouchData[];
	public constructor(skinName:string, data:any)
	{
		super(skinName, data);
	}

	public abstract initView();  	// 添加到舞台之后调用
	public abstract initData(data:any);

	protected initAll(data:any)
	{
		this.viewInfo = new data();
		this["info"] = this.viewInfo;
		this.touchList = [];
		super.initAll();
	}

	public destroyAll()
	{
		this.removeAllEvent();
		super.destroyAll();
	}

	public addEvent(target:egret.DisplayObject, type:string, cbFn:Function, thisObj:any):boolean
	{
		if(target == null || cbFn == null || thisObj == null || type == null || type == "")
		{
			LogUtils.Error(`参数有误`);
			return false;
		}

		for(let item of this.touchList)
		{
			if(item == null)
				continue;
			if(item.target == target && item.cbFn == cbFn && item.thisObj == thisObj && item.type == type)
			{
				LogUtils.Error(`重复注册`);
				return false;
			}
		}
		let info = PoolManager.Ins().pop(TouchData) as TouchData;
		info.packData(target, type, cbFn, thisObj);
		this.touchList.push(info);
		return true;
	}

	private removeEvent(target:egret.DisplayObject, type:string, cbFn:Function, thisObj:any)
	{
		if(target == null || cbFn == null || thisObj == null || type == null || type == "")
		{
			LogUtils.Error(`参数有误`);
			return false;
		}

		for(let item of this.touchList)
		{
			if(item == null)
				continue;
			if(item.target == target && item.type == type && item.cbFn == cbFn && item.thisObj == thisObj && item.type == type)
			{
				let index = this.touchList.indexOf(item);
				if(index >= 0)
				{
					this.touchList.splice(index, 1);
					item.destroyAll();
					PoolManager.Ins().push(item);
					return true;
				}
				return false;
			}
		}
		return false;
	}

	private removeAllEvent()
	{
		let array = DataUtils.CopyArray(this.touchList);
		for(let item of array)
		{
			if(item == null)
				continue;
			item.destroyAll();
			PoolManager.Ins().push(item);
		}
		this.touchList.length = 0;
	}
}

class TouchData extends DataBase
{
	public target:egret.DisplayObject;
	public cbFn:Function;
	public thisObj:any;
	public type:string;
	protected init()
	{
	}

	protected destroy()
	{
		ListenerMgr.Ins().removeEventListen(this.target, this.type, this.cbFn, this.thisObj);
	}

	public packData(target:egret.DisplayObject, type:string, cbFn:Function, thisObj:any)
	{
		this.target = target;
		this.type = type;
		this.cbFn = cbFn;
		this.thisObj = thisObj;
		ListenerMgr.Ins().addEventListen(this.target, this.type, this.cbFn, this.thisObj);
		return this;
	}

	public exec(e:egret.TouchEvent)
	{
		if(this.cbFn != null && this.thisObj != null)
			this.cbFn.call(this.thisObj, e);
	}
}