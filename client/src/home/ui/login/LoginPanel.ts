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
			this.loginBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnLoginTap, this);
		}

		public initData(data:any)
		{
			this.info.packData();
		}

		public initView()
		{
			this.loginBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnLoginTap, this); // 实现UIbase内封装好
		}

		private OnLoginTap(e:egret.TouchEvent)
		{
			// ViewManager.Ins().close(this) // 希望实现这个功能
			ViewManager.Ins().close(home.LoginPanel);
			ViewManager.Ins().open(home.LoadingPanel);
		}
	}
}