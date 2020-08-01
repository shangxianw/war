class ViewBase extends UIBase
{
	public info:IViewData;
	public initAll()
	{
		let classNameArray:any = this.constructor.prototype.__class__.split(".");
		let cls = window[classNameArray[0]][`${classNameArray[1]}Data`];
		this.info = new cls();
	}

	public destroyAll()
	{
		this.info.destroyAll();
	}

	protected init(){}						// 创建对象时执行之前执行
	protected destroy(){}					// 关闭面板(移除舞台后)时执行
	public initData(data:any=null){}		// 添加到舞台之前执行
	public open(){}							// 舞台刷新后
}