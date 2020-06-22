class ResData extends DataBase
{
	public resName:string;
	public referenceCount:number;
	public destroyTime:number;
	protected init()
	{
		this.resName = "" ;
		this.referenceCount = 0;
	}

	protected destroy()
	{
		this.resName = "" ;
		this.referenceCount = 0;
	}

	public packData(resName:string)
	{
		this.resName = resName;
		return this;
	}

	public reduceCount(currTime:number)
	{
		this.referenceCount = Math.max(this.referenceCount-1, 0);
		if(this.referenceCount <= 0) // 没有引用，则应该记录时间
			this.destroyTime = currTime + ResManager.Ins().READY_DERTROY_SECOND;
	}

	public addCount()
	{
		this.referenceCount++;
		this.destroyTime = null;
	}

	public canDestroy(currTime:number):boolean
	{
		if(this.destroyTime == null || this.referenceCount > 0)
			return false;
		return this.destroyTime >= currTime;
	}
}