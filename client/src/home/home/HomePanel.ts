class HomePanel extends ViewBase
{
	private fightBtn:eui.Button;
	private list:eui.List;

	public init() 
	{
		this.skinName = "HomePanelSkin";
	}

	public initView()
	{
		this.list.itemRenderer = HeroPanelItem;
		this.list.dataProvider = new eui.ArrayCollection([10010, 10020, 10030, 10040, 10050, 10060, 10070])
		this.fightBtn.label = "a"
		this.addMsgListener("update_demo", ()=>{
			this.fightBtn.label = "b"
		}, this)
		MessageManager.Ins().update("update_demo")
	}

	public destroy()
	{

	}
}


