module war
{
	export class WarMatchPanelData extends ViewData
	{
		// 应该load资源
		protected init()
		{
			this.resGroup = "war_preload";
			this.layer = LayerManager.Ins().Panel;

		}

		protected destroy()
		{
			// WarDataMgr.Ins().destroyAll();
		}

		public packData()
		{
			
		}
	}

	export class WarMatchPanel extends ViewBase
	{
		private nextBtn:WButton;
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
			this.addEvent(this.nextBtn, egret.TouchEvent.TOUCH_TAP, this.OnTap, this);
		}

		public initView()
		{
			
		}

		private OnTap()
		{
			ViewManager.Ins().close(this);
			ViewManager.Ins().open(war.WarPanel);
		}
	}
}