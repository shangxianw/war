class HeroData extends DataBase
{
	public id:number
	public level:number;
	public init(id:number, level:number)
	{
		this.id = id;
		this.level;
	}

	public get cfg()
	{
		return {}
	}

	public destroy()
	{
		super.destroy();
	}
}