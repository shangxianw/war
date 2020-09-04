module home
{
	export class DemoPanelData extends ViewData
	{
		resGroup:string[] = []
		layer:eui.UILayer = LayerManager.Ins().panel

		public exp:number;
		protected init()
		{

		}

		protected destroy()
		{
			
		}
	}

	export class DemoPanel extends ViewBase
	{
		private demo1:SubDemoPanel1;
		public init()
		{
			this.skinName = "DemoPanelSkin"
		}

		public open()
		{
			// this.demo1.visible = false
			// this.demo1.visible = true;
		}

		public close()
		{

		}
	}
}