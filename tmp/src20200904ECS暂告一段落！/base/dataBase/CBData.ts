class CBData
{
	public cbFn:Function
	public thisObj:Object
	public constructor()
	{
		this.init()
	}

	public init()
	{

	}

	public packData1(cbFn:Function, thisObj:Object)
	{
		if(cbFn == null || thisObj == null)
		{
			return
		}
		this.cbFn = cbFn;
		this.thisObj = thisObj
	}

	public exec()
	{
		this.cbFn.call(this.thisObj)
	}

	public destroy()
	{

	}
}