module home
{
	export class DemoPanelData extends DataBase implements IViewData
	{
		public resGroup = [];
		public layer = LayerManager.Ins().Panel;
		public resGroupId:number;

		protected init()
		{
			
		}

		protected destroy()
		{
			
		}

		public packData()
		{

		}
	}

	export class DemoPanel extends ViewBase
	{
		public info:DemoPanelData;
		public constructor()
		{
			super("DemoPanelSkin");	
		}

		protected init()
		{
			
		}

		protected destroy()
		{
			if(this.info != null)
				this.info.destroyAll();
		}

		public initData(data:any)
		{
			this.info.packData();
		}

		public initView()
		{
			
		}
	}
}