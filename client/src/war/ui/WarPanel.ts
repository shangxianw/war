class WarPanelData extends ViewData
{
	protected init()
	{
		this.resGroup = [];
		this.layer = LayerManager.Ins().panel;
	}

	protected destroy()
	{
		
	}
}

class WarPanel extends ViewBase
{
	public init()
	{
		this.skinName = `WarPanelSkin`
	}
}