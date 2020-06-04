abstract class ViewBase extends UIBase
{
	public abstract PanelId:number;
	public abstract Layer:eui.Component;
	public constructor(skinName:string)
	{
		super(skinName);
	}

	public abstract initData(p1?:any, q2?:any, q3?:any);

	protected initAll()
	{
		super.initAll();
	}

	public destroyAll()
	{
		super.destroyAll();
	}

	public getParent()
	{
		return this.parent;
	}
}