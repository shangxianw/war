module home
{
	export class LoadingPanelData extends ViewData
	{
		public count:number;
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
			this.count = 0;
		}
	}

	export class LoadingPanel extends ViewBase
	{
		private tips:eui.Label;

		public info:LoadingPanelData;
		public constructor()
		{
			super("LoadingPanelSkin", LoadingPanelData);	
		}

		protected init()
		{
			this.info.packData();
		}

		protected destroy()
		{
			if(this.info != null)
				this.info.destroyAll();
			TimerManager.Ins().removeTimer(this.OnTimer, this);
		}

		public initData(data:any)
		{
			this.info.packData();
		}

		public initView()
		{
			TimerManager.Ins().addTimer(1000, this.OnTimer, this);
			HomeDataMgr.Ins(); // 看看哪里初始化的
		}

		
		private OnTimer()
		{
			if(this.info.count <= 10)
			{
				this.tips.text = `loading...${this.info.count}/10`;
				this.info.count++;
				return true;
			}
			else
			{
				ViewManager.Ins().close(home.LoadingPanel);
				ViewManager.Ins().open(home.HomePanel);
				return false;
			}
		}
	}
}