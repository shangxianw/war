class HeroKa extends UIBase
{
	private kaBg:eui.Image;
	private bg:eui.Image;
	private heroIcon:eui.Image;
	private campBg:eui.Image;
	private typeIcon:eui.Image;
	private cost:eui.BitmapLabel;
	protected level:HeroLevel;
	private testId:eui.Label;
	private countLb:eui.Label;
	private effGroup:eui.Group;
	private newEffGroup:eui.Group;
	private newTips:eui.Image;
	
	private timeEff:ECSC.EffectBase;
	private newTimeEff:ECSC.EffectBase;

	public init()
	{
		this.skinName = "HeroKaSkin"
	}

	public initData()
	{

	}

	public initView()
	{

	}

	public destroy()
	{

	}
}