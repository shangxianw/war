class HeroDataMgr extends DataBase
{
	public heroMap:Hash<number, HeroData>	
	public init()
	{
		this.heroMap = new Hash<number, HeroData>()
		this.initHeroMap()
	}

	private initHeroMap()
	{
		let cfg:IHero[]
		for(let item of cfg)
		{
			let hero = new HeroData(item.id, 0)
			this.heroMap.set(hero.id, hero)
		}
	}

	public destroy()
	{
		super.destroy();
		this.heroMap.destroy();
	}
}
