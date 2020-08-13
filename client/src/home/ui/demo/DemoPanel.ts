module home
{
	export class DemoPanelData extends DataBase
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
		public init()
		{
			this.skinName = "DemoPanelSkin"
		}

		public open()
		{
			
		}

		public close()
		{

		}
	}
}