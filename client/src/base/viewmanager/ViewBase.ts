class ViewBase extends UIBase
{
	public info:IViewData;
	public initAll()
	{
		let classNameArray:any = this.constructor.prototype.__class__.split(".");
		let cls = window[classNameArray[0]][`${classNameArray[1]}Data`];
		this.info = new cls();
		this.init()
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

	public show()
	{

	}

	public hide()
	{

	}

	public close()
	{

	}

	public closeBefore()
	{

	}

	// ---------------------------------------------------------------------- 
	public addAttrListener()
	{

	}
}