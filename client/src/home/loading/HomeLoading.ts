class HomeLoading extends ViewBase
{
	private prop:eui.Label
	public init()
	{
		this.skinName = `HomeLoadingSkin`
	}

	public initView()
	{
		this.prop.text = `0/0`
		this.loadPreload()
	}

	private loadPreload()
	{
		ResManager.Ins().loadGroup(["preload"], this.OnCbFn, this, this.OnProFn, this.OnErrorFn)
	}

	private OnCbFn(e:RES.ResourceEvent)
	{
		// setTimeout(()=>{
			this.closeSelf()
			ViewManager.Ins().open(HomeBgPanel)
			ViewManager.Ins().open(HomePanel)
		// }, 1000);
	}

	private OnProFn(e:RES.ResourceEvent)
	{
		this.prop.text = `${e.itemsLoaded}/${e.itemsTotal}\n`
	}

	private OnErrorFn(e:RES.ResourceEvent)
	{

	}

	public destroy()
	{
		
	}
}