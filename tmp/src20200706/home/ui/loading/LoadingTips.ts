module home
{
	export class LoadingTipsData extends ViewData
	{
		protected init()
		{
			this.layer = LayerManager.Ins().Tips;
		}

		protected destroy()
		{
			
		}

		public packData()
		{
			
		}
	}

	export class LoadingTips extends ViewBase
	{
		private tips:eui.Label;

		public info:LoadingTipsData;
		public constructor()
		{
			super("LoadingTipsSkin", LoadingTipsData);	
		}

		protected init()
		{
			this.info.packData();
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
	}
}