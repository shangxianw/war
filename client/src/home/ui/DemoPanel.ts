module home
{
	export class DemoPanelData extends DataBase
	{
		protected init()
		{

		}

		protected destroy()
		{

		}
	}

	export class DemoPanel extends ViewBase
	{
		public PanelId:number;
		public Layer:eui.Component;
		protected init()
		{
			this.PanelId = ViewIdConst.DemoPanel;
			this.Layer = LayerManager.Ins().Panel;
		}

		public destroy()
		{

		}

		public initData()
		{
			
		}
	}
}