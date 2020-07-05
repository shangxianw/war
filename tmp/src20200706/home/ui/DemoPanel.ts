module home
{
	export class DemoPanelData extends ViewData
	{
		protected init()
		{
			this.resGroup = [];
			this.layer = LayerManager.Ins().Panel;
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
			super("DemoPanelSkin", DemoPanelData);	
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