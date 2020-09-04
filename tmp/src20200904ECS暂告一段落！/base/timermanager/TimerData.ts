class TimerData extends DataBase
{
	public cbFn:Function;
	public thisObj:any;
	public delay:number;
	public count:number;
	public args:any[];
	public execIm:boolean;
	
	public lastTime:number;
	protected init()
	{
		this.cbFn = null;
		this.thisObj = null;
		this.delay = 0;
		this.count = 0;
		this.lastTime = null;
		this.execIm = null;
	}

	protected destroy()
	{
		this.cbFn = null;
		this.thisObj = null;
		this.delay = 0;
		this.count = 0;
		this.lastTime = null;
		this.execIm = null;
	}

	public packData(delay:number, cbFn:Function, thisObj:any, execIm:boolean, args:any[]=null)
	{
		this.delay = delay;
		this.cbFn = cbFn;
		this.thisObj = thisObj;
		this.lastTime = egret.getTimer();
		this.args = args;
		this.execIm = execIm;
		return this;
	}
	
	public exec(query:number)
	{
		if(this.cbFn == null || this.thisObj == null)
			return false;
		
		if(this.args == null || this.args.length == 0)
			return this.cbFn.call(this.thisObj, query);
		if(this.args.length == 1)
			return this.cbFn.call(this.thisObj, this.args[0], query);
		if(this.args.length == 2)
			return this.cbFn.call(this.thisObj, this.args[0], this.args[1], query);
		if(this.args.length == 3)
			return this.cbFn.call(this.thisObj, this.args[0], this.args[1], this.args[2], query);
		if(this.args.length == 4)
			return this.cbFn.call(this.thisObj, this.args[0], this.args[1], this.args[2], this.args[3], query);
		if(this.args.length == 5)
			return this.cbFn.call(this.thisObj, this.args[0], this.args[1], this.args[2], this.args[3], this.args[4], query);
		if(this.args.length == 6)
			return this.cbFn.call(this.thisObj, this.args[0], this.args[1], this.args[2], this.args[3], this.args[4], this.args[5], query);
		if(this.args.length == 7)
			return this.cbFn.call(this.thisObj, this.args[0], this.args[1], this.args[2], this.args[3], this.args[4], this.args[5], this.args[6], query);
		
	}
}