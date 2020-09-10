class MessageMgrData extends DataBase
{
	public type:number;
	public cbFn:Function;
	public thisObj:Object;
	public init()
	{

	}

	public destroy()
	{

	}

	public packData(type:number, cbFn:Function, thisObj:Object)
	{
		this.type = type;
		this.cbFn = cbFn;
		this.thisObj = thisObj;
	}

	public exec(param:any=null)
	{
		if(this.cbFn == null || this.thisObj == null)
			return false;
		
		this.cbFn.call(this.thisObj, param);
	}
}