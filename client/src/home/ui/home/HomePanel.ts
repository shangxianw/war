module home
{
	export class HomePanelData extends ViewData
	{
		protected init()
		{
			this.resGroup = [];
			this.layer = LayerManager.Ins().Panel;
		}

		protected destroy()
		{
		}

		public packData()
		{
			
		}
	}

	export class HomePanel extends ViewBase
	{
		private fightBtn:eui.Button;
		public info:HomePanelData;
		public constructor()
		{
			super("HomePanelSkin", HomePanelData);
		}

		protected init()
		{
			
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
			this.addEvent(this.fightBtn, egret.TouchEvent.TOUCH_TAP, ()=>{
				ViewManager.Ins().close(this);
				ViewManager.Ins().open(war.WarMatchPanel);
			}, this)
		}
	}
}