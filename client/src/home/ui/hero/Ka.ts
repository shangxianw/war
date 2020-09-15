class Ka extends UIBase
{
	private icon:eui.Image;
	private bg:eui.Image;

	public kaId:number;
	
	public init()
	{
		this.skinName = "KaSkin"
		eui.ItemRenderer
	}

	public initData(kaId:number)
	{
		this.kaId = kaId
	}

	public initView()
	{
		// let herodata:HeroData = HomeDataMgr.Ins().heroDataMgr.heroMap.get(this.kaId)
		// if(herodata == null)
		// 	return
		// this.icon.source = herodata.cfg.icon
		// this.bg.source = `bg_card_di_${herodata.cfg.quality}`
	}
}