class ViewData extends DataBase
{
	protected static ID:number;
	public resGroup:string;
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
	public constructor(skinName:string)
	{
		super(skinName);
	}

	
}