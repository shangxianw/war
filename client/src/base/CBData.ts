class CBData
{
	public thisObj:any;
	public cbFn:Function;
	public param:any;
	public constructor()
	{

	}

	public init()
	{

	}

	public destroy()
	{

	}

	public PackData(cbFn:Function, thisObj:any, param:any = null)
	{
		this.cbFn = cbFn;
		this.thisObj = thisObj;
		this.param = param;
		return this;
	}
}