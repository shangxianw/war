module war
{
	export class WarPanelData extends DataBase
	{
		protected init()
		{

		}

		protected destroy()
		{

		}
	}

	export class WarPanel extends ViewBase
	{
		public PanelId:number;
		public Layer:eui.Component;
		public constructor()
		{
			super("WarPanelSkin");
		}

		protected init()
		{
			this.PanelId = ViewIdConst.WarPanel;
			this.Layer = LayerManager.Ins().War;
		}

		protected destroy()
		{

		}

		public initData(info:WarPanelData)
		{

		}
	}
}