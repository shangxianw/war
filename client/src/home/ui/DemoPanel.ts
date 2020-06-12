module home
{
	export class DemoPanelData extends ViewData
	{
		protected init()
		{
			this.resGroup = "";
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
		public nameLb:eui.Label;
		public ageLb:eui.Label;
		private testImg:eui.Image;

		public info:DemoPanelData;
		public constructor()
		{
			super("DemoPanelSkin");	
		}

		protected init()
		{
			this.viewInfo = new DemoPanelData();
			this.info = this.viewInfo as any;
		}

		protected destroy()
		{

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