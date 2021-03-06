abstract class UIBase extends eui.Component
{
	public hasCode:number;
	public constructor()
	{
		super();
		this.initAll()
	}

	public initAll()
	{
		this.hasCode = IDManager.Ins().getHashCode();
		this.init()
	}

	public destroyAll()
	{
		this.hasCode = null;
		this.destroy();
	}

	protected init()
	{

	}
	
	protected abstract destroy()
}