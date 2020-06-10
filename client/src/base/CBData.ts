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

	public packData(cbFn:Function, thisObj:any, param:any = null)
	{
		this.cbFn = cbFn;
		this.thisObj = thisObj;
		this.param = param;
		return this;
	}

	public exec(query?:any)
	{
		if(this.cbFn == null || this.thisObj == null)
		{
			if(this.param != null)
				this.cbFn.call(this.thisObj, this.param, query);
			else
				this.cbFn.call(this.thisObj, query);
		}
	}
}