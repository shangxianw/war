class DemoPanel extends ViewBase
{
	private haha:eui.Label;
	public init()
	{
		this.skinName = "DemoPanelSkin"
	}

	public initView(name:string, skill:number[])
	{
		this.addTimer(1000, (a:number, b:number)=>{
			this.haha.text = a +  "  " + b
			return true;
		}, this)
		this.haha.text = name;
		this.addEvent(this, egret.TouchEvent.TOUCH_TAP, this.closeSelf, this)
	}
}