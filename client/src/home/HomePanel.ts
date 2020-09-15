class HomePanel extends ViewBase
{
	private fightBtn:eui.Button;
	private list:eui.List;
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

		this.list.itemRenderer = HeroPanelItem;
		this.list.dataProvider = new eui.ArrayCollection([1,2,3,4,5,6,7,8,9,10])
	}

	public destroy()
	{

	}

	private OnFightTap(e:egret.TouchEvent)
	{
		alert(1)
	}
}


