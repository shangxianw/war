class HomePanel extends ViewBase
{
	private fightBtn:eui.Button;
	public constructor()
	{
		super();
	}

	public init() 
	{
		this.skinName = "HomePanelSkin";
	}

	public initView()
	{
		this.addEvent(this.fightBtn, egret.TouchEvent.TOUCH_TAP, this.OnFightTap, this)
	}

	public destroy()
	{

	}

	private OnFightTap(e:egret.TouchEvent)
	{
		alert(1)
	}
}


