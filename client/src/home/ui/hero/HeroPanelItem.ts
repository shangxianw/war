class HeroPanelItem extends WItemRenderer
{
	private ka:Ka;
	private title:eui.Label;
	private level:eui.Label;
	private speedlb:eui.Label;
	private btn:WButton;

	public init()
	{
		this.skinName = `HeroPanelItemSkin`
	}

	protected dataChanged()
	{
		this.btn.label1.text = `${this.data}`
		this.btn.label = "0000"
		this.btn.icon1.source = `item_3`
	}

	public destroy()
	{

	}
}