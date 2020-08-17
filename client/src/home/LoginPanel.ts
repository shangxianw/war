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

			let name = "wsx"
			TimerManager.Ins().addTimer(1000, (haha, count)=>{
				if(count >= 10)
					return false
				console.log(haha, count)
				return true
			}, this, true, name)
		}

		private OnLoginTap(e:egret.TouchEvent)
		{
			SceneManager.Ins().changeScene(SceneType.None)
		}
	}
}


