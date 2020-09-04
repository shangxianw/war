abstract class ViewData extends DataBase implements IViewData
{
	public data:any;
	public resGroupKey:number;
	public resGroup:string[];
	public layer:eui.UILayer;
	public initAll()
	{
		this.resGroup = [];
		this.layer = LayerManager.Ins().panel;
		this.init()
	}

	public destroyAll()
	{
		this.resGroup.length = 0;
		this.layer = null;
	}
}