abstract class ViewData extends DataBase implements IViewData
{
	public resGroup:string[];
	public layer:eui.UILayer;
	public initAll()
	{
		this.resGroup = [];
		this.layer = LayerManager.Ins().panel;
	}

	public destroyAll()
	{
		this.resGroup.length = 0;
		this.layer = null;
	}
}