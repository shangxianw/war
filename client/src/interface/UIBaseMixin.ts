class UIBaseMixin
{
	public eventList:number[];
	// ---------------------------------------------------------------------- 注册事件相关
	public addEvent(target:egret.DisplayObject, type:string, cbFn:Function, thisObj:any, param:any):boolean
	{
		if(target == null || cbFn == null || thisObj == null || type == null || type == "")
		{
			LogUtils.Error(`参数有误`);
			return false;
		}

		let hasCode = ListenerMgr.Ins().addEventListen(target, type, cbFn, thisObj);
		if(hasCode <= 0)
		{
			LogUtils.Error(`注册错误`);
			return false;
		}

		this.eventList.push(hasCode);
		return true;
	}

	public removeEvent(hasCode):boolean
	{
		if(hasCode == null)
		{
			LogUtils.Error(`参数有误`);
			return false;
		}

		let index = this.eventList.indexOf(hasCode)
		if(index < 0)
			return true;

		this.eventList.splice(index, 1)
		ListenerMgr.Ins().removeEventListen(hasCode);
		return false;
	}

	public removeAllEvent()
	{
		for(let hasCode of this.eventList)
		{
			ListenerMgr.Ins().removeEventListen(hasCode);
		}
		this.eventList.length = 0;
	}
}