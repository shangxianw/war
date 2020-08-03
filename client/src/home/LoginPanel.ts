module home
{
	export class LoginPanelData extends ViewData
	{
		public _name = "wsx"
		public lab = "login"
		protected init()
		{
			this.resGroup = [];
			this.layer = LayerManager.Ins().panel;
		}

		protected destroy()
		{
			
		}

		public set name(value:string)
		{
			this._name = value;
		}

		public get name()
		{
			return this._name
		}
	}

	export class LoginPanel extends ViewBase
	{
		private loginBtn:eui.Button;
		private desc:eui.Label;
		
		public info:LoginPanelData;
		public constructor()
		{
			super();
			this.skinName = "LoginPanelSkin";
			this.info = new LoginPanelData()
			this["data"] = this.info
			this.once(egret.Event.REMOVED_FROM_STAGE, ()=>{
				this.$children
			},this)
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
			this.info.name = "www"
		}

		private OnLoginTap(e:egret.TouchEvent)
		{
			ViewManager.Ins().close(this)
			ViewManager.Ins().open(home.HomePanel)
		}
	}
}


