class HomeDataMgr extends DataBase
{
	public engry:number = 0
	public dimand:number = 0
	public exp:number = 0
	public heroDataMgr:HeroDataMgr;
	public init()
	{
		this.heroDataMgr = new HeroDataMgr()
	}

	public destroy()
	{
		super.destroy();
		this.heroDataMgr.destroy();
	}
}