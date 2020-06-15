module home
{
	export class LoadingPanelData extends ViewData
	{
		public resGroupArray:string[];	// 加载资源组
		public resArray:string[];		// 加载资源(针对动态资源、如玩家领主)

		private isNext:boolean;
		protected init()
		{
			this.resGroup = "preload";
			this.layer = LayerManager.Ins().Panel;
			this.isNext = false;

		}

		protected destroy()
		{
			
		}

		public packData()
		{
			this.isNext = false;
		}
	}

	export class LoadingPanel extends ViewBase
	{
		private tips:eui.Label;
		private bg:eui.Image;
		private bar:eui.ProgressBar;

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
			Utils.showBreathTween(this.bg, false);
			TimerManager.Ins().removeTimer(this.OnLoadRes, this);
		}

		public initData(data:any)
		{
			this.info.packData();
		}

		public initView()
		{
			Utils.showBreathTween(this.bg, true, {time:1000});
			TimerManager.Ins().addTimer(100, this.OnLoadRes, this);
		}

		private OnLoadRes()
		{
			
		}
	}
}