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
			
		}

		private OnLoginTap(e:egret.TouchEvent)
		{
			console.log(`登录成功`);
		}
	}
}