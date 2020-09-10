class DemoPanel extends ViewBase
{
	private haha:eui.Label;
	public init()
	{
		this.skinName = "DemoPanelSkin"
	}

	public initView(name:string, skill:number[])
	{
		this.haha.text = name;
	}
}