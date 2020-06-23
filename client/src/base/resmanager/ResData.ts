class ResData extends DataBase
{
	public resName:string;
	public refCount:number;
	public destroyTime:number;
	protected init()
	{
		this.resName = "" ;
		this.refCount = 0;
	}

	protected destroy()
	{
		this.resName = "" ;
		this.refCount = 0;
	}

	public packData(resName:string)
	{
		this.resName = resName;
		this.refCount = 0;
		return this;
	}

	public reduceRefCount(currTime:number)
	{
		this.refCount = Math.max(this.refCount-1, 0);
		if(this.refCount <= 0) // 没有引用，则应该记录时间
			this.destroyTime = currTime + ResManager.Ins().READY_DERTROY_SECOND;
	}

	public addRefCount()
	{
		this.refCount++;
		this.destroyTime = null;
	}
}