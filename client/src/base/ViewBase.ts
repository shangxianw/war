class ViewData extends DataBase
{
	protected static ID:number;
	public resGroup:string[];
	public layer:eui.UILayer;

	protected init()
	{
		
	}

	protected destroy()
	{
		
	}
	protected initAll()
	{
		super.initAll();
	}

	public destroyAll()
	{
		super.destroyAll();
	}
}

abstract class ViewBase extends UIBase
{
	public viewInfo:ViewData;
	public constructor(skinName:string, data:any)
	{
		super(skinName, data);
	}

	public abstract initView();  	// 添加到舞台之后调用
	public abstract initData(data:any);

	protected initAll(data:any)
	{
		this.viewInfo = new data();
		this["info"] = this.viewInfo;
		super.initAll();
	}

	public destroyAll()
	{
		super.destroyAll();
	}
}