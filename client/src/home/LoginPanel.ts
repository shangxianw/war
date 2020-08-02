module home
{
	export class LoginPanelData extends ViewData
	{
		protected init()
		{
			this.resGroup = [];
			this.layer = LayerManager.Ins().panel;
		}

		protected destroy()
		{
			
		}
	}

	export class LoginPanel extends ViewBase
	{
		private loginBtn:eui.Button;
		
		public info:LoginPanelData;
		public constructor()
		{
			super();
			this.skinName = "LoginPanelSkin";
		}

		protected init() 
		{
			
		}

		protected destroy()
		{
			this.loginBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnLoginTap, this)
		}

		public open()
		{
			this.loginBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnLoginTap, this)
		}

		private OnLoginTap(e:egret.TouchEvent)
		{
			ViewManager.Ins().close(this)
			ViewManager.Ins().open(home.HomePanel)
		}
	}
}


