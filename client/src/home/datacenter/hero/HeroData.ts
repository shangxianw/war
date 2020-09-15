class HeroData extends DataBase
{
	public id:number
	public level:number;
	public init(id:number, level:number)
	{
		this.id = id;
		this.level;
	}

	public get cfg():IHero
	{
		return null
	}

	public destroy()
	{
		super.destroy();
	}
}