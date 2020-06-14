module home
{
	export class WarMatchPanelData extends ViewData
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

	export class WarMatchPanel extends ViewBase
	{
		public info:WarMatchPanelData;
		public constructor()
		{
			super("WarMatchPanelSkin", WarMatchPanelData);	
		}

		protected init()
		{
			this.info.packData();
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