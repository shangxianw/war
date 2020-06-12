module home
{
	export class DemoPanelData extends ViewData
	{
		protected init()
		{
			this.resGroup = "preload";
			this.layer = LayerManager.Ins().Panel;
		}

		protected destroy()
		{
			
		}

		public packData()
		{

		}
	}

	// 只有状态，不操作数据。如果要修改数据，也要在Data中写一个方法，然后执行该方法
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

		public initData(type:number)
		{
			this.info.packData();
		}

		public initView()
		{

		}
	}
}