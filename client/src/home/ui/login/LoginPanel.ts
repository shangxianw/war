module home
{
	export class LoginPanelData extends ViewData
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

	export class LoginPanel extends ViewBase
	{
		private loginBtn:WGroup;

		public info:LoginPanelData;
		public constructor()
		{
			super("LoginPanelSkin", LoginPanelData);	
		}

		protected init()
		{
			
		}

		protected destroy()
		{
			if(this.info != null)
				this.info.destroyAll();
			this.loginBtn.destroy();
		}

		public initData(data:any)
		{
			this.info.packData();
		}

		public initView()
		{
			this.addEvent(this.loginBtn, egret.TouchEvent.TOUCH_TAP, this.OnLoginTap, this);
			this.addEvent(this.loginBtn, egret.TouchEvent.TOUCH_TAP, this.OnLoginTap2, this);
			this.addEvent(this.loginBtn, eui.ItemTapEvent.ITEM_TAP, this.OnLoginTap2, this);
		}

		private OnLoginTap(e:egret.TouchEvent)
		{
			ViewManager.Ins().close(this);
			ViewManager.Ins().open(home.LoadingPanel);
		}

		private OnLoginTap2(e:egret.TouchEvent)
		{

		}
	}
}