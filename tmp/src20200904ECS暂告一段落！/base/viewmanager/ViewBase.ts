class ViewBase extends UIBase
{
	public info:IViewData;
	public initAll()
	{
		let classNameArray:any = this.constructor.prototype.__class__.split(".");
		let cls = window[classNameArray[0]][`${classNameArray[1]}Data`];
		this.info = new cls();
		super.initAll();
	}

	public destroyAll()
	{
		this.info.destroyAll();
		this.destroy()
	}

	protected destroy(){}					// 关闭面板(移除舞台后)时执行

	// ----------在执行constructor时
	protected init()
	{

	}

	// 执行constructor后，添加到舞台前
	public openBefore()
	{

	}

	// 添加到舞台后
	public open()
	{

	}

	public closeBefore()
	{

	}

	public close()
	{

	}

	// ---------------------------------------------------------------------- 显示与隐藏，不会从舞台中移除，用于二级页面
	public show()
	{

	}

	public hide()
	{

	}

	// ---------------------------------------------------------------------- 
	public addAttrListener()
	{

	}
}