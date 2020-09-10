class CollectData extends DataBase
{
	public groupNameArray:string[];
	public priority:number;

	public currIndex:number;
	public itemsLoaded:number;
	public itemsTotal:number;

	public cbFn:Function;
	public progFn:Function;
	public errFn:Function;
	public thisObj:any;

	public errLoadCount:number;

	public init()
	{
		this.groupNameArray = [];
		this.priority = null;

		this.currIndex = 0;
		this.itemsLoaded = 0;
		this.itemsTotal = 0;
		this.errLoadCount = 0;
	}

	public destroy()
	{
		super.destroy();
		this.groupNameArray.length = 0;
		this.groupNameArray = null;
		this.priority = null;

		this.currIndex = 0;
		this.itemsLoaded = 0;
		this.itemsTotal = 0;
		this.errLoadCount = 0;
	}

	public packDate(groupNames:string[], cbFn:Function=null, thisObj:any=null, progFn:Function=null, errFn:Function=null, priority:number)
	{
		this.groupNameArray = groupNames;
		this.priority = priority;
		this.cbFn = cbFn;
		this.errFn = errFn;
		this.thisObj = thisObj;
		this.progFn = progFn;
		return this;
	}

	public addErrCount()
	{
		this.errLoadCount++;
	}

	public isEnd()
	{
		return this.currIndex >= this.groupNameArray.length-1 && this.itemsLoaded >= this.itemsTotal;
	}

	public nextGroup()
	{
		this.currIndex++;
		return this.currGroup();
	}

	public currGroup()
	{
		return this.groupNameArray[this.currIndex];
	}

	public execCb(query:any)
	{
		if(this.cbFn == null || this.thisObj == null)
			return;
		this.cbFn.call(this.thisObj, query);
	}

	public execProg(query:any)
	{
		if(this.progFn == null || this.thisObj == null)
			return;
		this.progFn.call(this.thisObj, query);
	}

	public execErr(query:any)
	{
		if(this.errFn == null || this.thisObj == null)
			return;
		this.errFn.call(this.thisObj, query);
	}
}