module home
{
	export class LoadingPanelData extends ViewData
	{
		public resGroupArray:string[];
		protected init()
		{
			this.resGroup = "preload";
			this.layer = LayerManager.Ins().Panel;

		}

		protected destroy()
		{
			
		}

		public packData()
		{
			
		}
	}

	export class LoadingPanel extends ViewBase
	{
		private tips:eui.Label;
		private bg:eui.Image;

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
		}

		public initData(data:any)
		{
			this.info.packData();
		}

		public initView()
		{
			Utils.showBreathTween(this.bg, true, {time:2000});
			TimerManager.Ins().addTimer(100, this.OnLoadRes, this);
		}

		private OnLoadRes()
		{

		}
	}
}