class HomeBgPanel extends ViewBase
{
	private bg:eui.Image;
	public init()
	{
		this.skinName = "HomeBgPanelSkin"
	}

	public initView()
	{
		// this.bg.source = `bg_main_jpg`

		RES.getResAsync(`bg_main_jpg`, ()=>{
			this.bg.source = `bg_main_jpg`
		}, this)
	}

	public destroy()
	{

	}
}