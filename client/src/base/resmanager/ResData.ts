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

	public reduceCount()
	{
		this.referenceCount = Math.max(this.referenceCount-1, 0);
		if(this.referenceCount <= 0) // 没有引用，则应该记录时间
			this.destroyTime = egret.getTimer() + ResManager.Ins().READY_DERTROY_SECOND;
	}

	public addCount()
	{
		this.referenceCount++;
		this.destroyTime = null;
	}
}