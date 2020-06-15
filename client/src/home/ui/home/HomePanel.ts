module home
{
	export class HomePanelData extends ViewData
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

	export class HomePanel extends ViewBase
	{
		public info:HomePanelData;
		private nextBtn:WButton;
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
			this.addEvent(this.nextBtn, egret.TouchEvent.TOUCH_TAP, this.OnTap, this);
		}

		public initView()
		{
			
		}

		private OnLoginTap(e:egret.TouchEvent)
		{
			console.log(`登录成功`);
		}

		private OnTap()
		{
			ViewManager.Ins().close(this);
			ViewManager.Ins().open(war.WarMatchPanel);
		}
	}
}