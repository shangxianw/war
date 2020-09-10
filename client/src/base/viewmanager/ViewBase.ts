class ViewBase extends UIBase
{
	public layer:eui.UILayer;
	public resGroup:string[]
	public resKey:number;
	public constructor(...query:any[])
	{
		if(query != null && query[0] != null)
		{
			let param = query[0]
			if(param == null)
				super(param)
			else
			{
				if(param.length = 1)
					super(param[0])
				else if(param.length = 2)
					super(param[0], param[1])
				else if(param.length = 3)
					super(param[0], param[1], param[2])
				else if(param.length = 4)
					super(param[0], param[1], param[2], param[3])
				else if(param.length = 5)
					super(param[0], param[1], param[2], param[3], param[4])
				// 不够就加
			}
		}
		this.layer = LayerManager.Ins().panel
		this.resGroup = [];
	}

	public show()
	{

	}

	public hide()
	{

	}

	public closeSelf()
	{
		ViewManager.Ins().close(this)
	}
}