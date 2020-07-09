module home
{
	export class LoadingTipsData extends DataBase implements IViewData
	{
		public resGroup = [];
		public layer = LayerManager.Ins().Tips;
		public resGroupId:number;
		protected init()
		{
			
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
			super("LoadingTipsSkin");	
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