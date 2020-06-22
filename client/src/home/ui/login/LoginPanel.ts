module home
{
	export class LoginPanelData extends ViewData
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

	export class LoginPanel extends ViewBase
	{
		private loginBtn:WGroup;
		private testLb:eui.Label;
		private accountInput:eui.TextInput;

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
			this.accountInput.text = "wsx";
			this.addEvent(this.loginBtn, egret.TouchEvent.TOUCH_TAP, this.OnLoginTap, this);
		}

		private OnLoginTap(e:egret.TouchEvent)
		{
			let flag = Utils.CheckNameValide(this.accountInput.text);
			if(flag[0] == false)
			{
				alert(flag[1])
				return;
			}
			net.NetLogin.C2SLogin(this.accountInput.text, ()=>{
				ViewManager.Ins().close(this);
				ViewManager.Ins().open(home.LoadingPanel);
			}, this)
		}
	}
}