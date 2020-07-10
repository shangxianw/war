module war
{
	export class WarPanelData extends DataBase implements IViewData
	{
		public resGroup = [];
		public layer = LayerManager.Ins().War;
		public resGroupId:number;

		protected init()
		{
			
		}

		protected destroy()
		{
			WarDataMgr.Ins().endWar();
			WarDataMgr.Ins().destroyAll();
		}

		public packData()
		{
			WarDataMgr.Ins();
			WarDataMgr.Ins().startWar();
		}
	}

	export class WarPanel extends ViewBase
	{
		private bgRect:eui.Rect;
		
		public info:WarPanelData;
		public constructor()
		{
			super("WarPanelSkin");
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
	}
}