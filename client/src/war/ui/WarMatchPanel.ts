module war
{
	export class WarMatchPanelData extends DataBase implements IViewData
	{
		public resGroup = ["war_preload"];
		public layer = LayerManager.Ins().Panel;
		public resGroupId:number;
		protected init()
		{

		}

		protected destroy()
		{
			// WarDataMgr.Ins().destroyAll();
		}

		public packData()
		{
			
		}
	}

	export class WarMatchPanel extends ViewBase
	{
		private nextBtn:WButton;
		public info:WarMatchPanelData;
		public constructor()
		{
			super("WarMatchPanelSkin");	
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
			this.addEvent(this.nextBtn, egret.TouchEvent.TOUCH_TAP, this.OnTap, this);
		}

		public initView()
		{
			
		}

		private OnTap()
		{
			ViewManager.Ins().close(this);
			ViewManager.Ins().open(war.WarPanel);
		}
	}
}