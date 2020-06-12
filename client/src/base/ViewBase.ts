abstract class ViewData extends DataBase
{
	protected static ID:number;
	public resGroupArray:string[];
	public parent:eui.UILayer;
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
	public info:ViewData;
	public constructor(skinName:string)
	{
		super(skinName);
	}

	protected initAll()
	{
		this.info = new ViewData();
		super.initAll();
	}

	public destroyAll()
	{
		super.destroyAll();
	}
}