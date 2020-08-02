module war
{
	export class WarPanelData extends ViewData
	{
		public score:number;
		protected init()
		{
			this.resGroup = [];
			this.layer = LayerManager.Ins().panel;
		}

		protected destroy()
		{
			
		}

		public startWar()
		{
			WarDataMgr.Ins().updateStepLevel();
			WarDataMgr.Ins().startWar();
		}

		public endWar()
		{
			WarDataMgr.Ins().endWar();
		}
	}

	export class WarPanel extends ViewBase
	{	
		public info:WarPanelData;
		public constructor()
		{
			super();
			this.skinName = "WarPanelSkin";
		}

		protected init() 
		{
			
		}

		protected destroy()
		{
			
		}

		public open()
		{
			
		}
	}
}


