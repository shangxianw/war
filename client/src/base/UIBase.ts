class UIBase extends eui.Component
{
	public info:any;
	public constructor(...param:any[])
	{
		super();
		this.info = param;
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.OnRemoveFromeStage, this)
		this.init.apply(this, param);
	}

	// ---------------------------------------------------------------------- 一般需要重写的方法
	// 每个方法都会传入在创建时传入的参数，下面只是事例
	/**
	 * 在创建时执行
	 */
	public init(...anyParam:any[])
	{
		// this.skinName = "UIBaseSkin"
	}

	/**
	 * 添加到舞台之前
	 */
	public initData(...param:any[])
	{
		
	}

	/**
	 * 添加到后舞台
	 */
	public initView(...param:any[])
	{
		
	}

	private aaa()
	{
		
	}

	/**
	 * 销毁
	 */
	public destroy()
	{
		
	}

	// ---------------------------------------------------------------------- 添加事件监听
	public eventArray:[egret.DisplayObject, string, Function, Object][] = [] // [target, type, callback, thisObj][]
	public addEvent(target:egret.DisplayObject, type:string, callback:Function, thisObj:Object):boolean
	{
		// 参数有误
		if(target == null || type == null || callback == null || thisObj == null)
			return false;
		
		// 重复注册
		for(let item of this.eventArray)
		{
			if(target == item[0] && type == item[1] && callback == item[2] && thisObj == item[3])
			{
				return false;
			}
		}

		this.eventArray.push([target, type, callback, thisObj])
		target.addEventListener(type, callback, thisObj)
		return true;
	}

	public removeEvent(target:egret.DisplayObject, type:string, callback:Function, thisObj:any):boolean
	{
		// 参数有误
		if(target == null || type == null || callback == null || thisObj == null)
			return false;
		
		let index = 0;
		for(let item of this.eventArray)
		{
			if(target == item[0] && type == item[1] && callback == item[2] && thisObj == item[3])
			{
				target.removeEventListener(type, callback, thisObj)
				item[0] = item[1] = item[2] = item[3] = null;
				this.eventArray.splice(index, 1)
				return true;
			}
			index += 1;
		}
		return false;
	}

	public removeAllEvent():boolean
	{
		while(this.eventArray.length > 0)
		{
			let item = this.eventArray.shift()
			item[0].removeEventListener(item[1], item[2], item[3])
			item[0] = item[1] = item[2] = item[3] = null;
		}
		return true
	}
	
	// ---------------------------------------------------------------------- 添加属性监听
	public attrArray:[DataBase, string, Function, Object][] = [] // [target, attrName, cbFn, thisObj][]
	public addAttrListener(target:DataBase, attrName:string, cbFn:Function, thisObj:Object)
	{
		// 参数有误
		if(target == null || attrName == null || cbFn == null || thisObj == null)
			return false;
		
		// 重复注册
		for(let item of this.attrArray)
		{
			if(target == item[0] && attrName == item[1] && cbFn == item[2] && thisObj == item[3])
			{
				return false;
			}
		}

		this.attrArray.push([target, attrName, cbFn, thisObj])
		target.addAttrListener(attrName, cbFn, thisObj)
		return true;
	}

	public removeAttrListener(target:DataBase, attrName:string, cbFn:Function, thisObj:Object):boolean
	{
		// 参数有误
		if(target == null || attrName == null || cbFn == null || thisObj == null)
			return false;
		
		let index = 0;
		for(let item of this.attrArray)
		{
			if(target == item[0] && attrName == item[1] && cbFn == item[2] && thisObj == item[3])
			{
				target.removeAttrListener(attrName, cbFn, thisObj)
				item[0] = item[1] = item[2] = item[3] = null;
				this.attrArray.splice(index, 1)
				return true;
			}
			index += 1;
		}
		return false;
	}

	public removeAllAttrListener():boolean
	{
		while(this.attrArray.length > 0)
		{
			let item = this.attrArray.shift()
			item[0].removeAttrListener(item[1], item[2], item[3])
			item[0] = item[1] = item[2] = item[3] = null;
		}
		return true
	}

	// ---------------------------------------------------------------------- 添加定时器

	// ---------------------------------------------------------------------- 系统内部调用
	protected createChildren()
	{
		super.createChildren()
		this.initData.apply(this, this.info);
	}

	protected childrenCreated()
	{
		super.childrenCreated()
		this.initView.apply(this, this.info);
	}

	protected OnRemoveFromeStage()
	{
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.OnRemoveFromeStage, this)
		this.removeAllEvent()
		this.destroy.apply(this, this.info);
	}
}