module home
{
	export class LoginPanelData extends DataBase implements IViewData
	{
		public resGroup = [`war_preload`, `common_loading`];
		public layer = LayerManager.Ins().Panel;
		public resGroupId:number;

		protected destroy()
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
			super("LoginPanelSkin");	
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
			
		}

		public initView()
		{
			this.accountInput.text = "wsx";
			this.addEvent(this.loginBtn, egret.TouchEvent.TOUCH_TAP, this.OnLoginTap, this);

			this.test();
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
				1;
			}, this)
		}

		private test()
		{
			let head = new HeadIcon();
			head.info.packData(1, 1);
			this.addChild(head);
		}
	}
}