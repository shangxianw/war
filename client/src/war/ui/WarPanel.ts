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
		private startBtn:eui.Button;
		private infoGroup:eui.Group;
		private bgGroup:eui.Group;
		private gameArea:eui.Group;
		private optionGroup:eui.Group;
		private gameScro:eui.Scroller;
		private score:eui.Label;
		private restartBtn:eui.Button;
		private restartBtn2:eui.Button;
		private endGameGroup:eui.Group;
		
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


