module home
{
	export class DemoPanelData extends DataBase implements IViewData
	{
		public resGroup = [];
		public layer = LayerManager.Ins().Panel;
		public resGroupId:number;

		public ad:number;
		protected init()
		{
			
		}

		protected destroy()
		{
			
		}

		public packData()
		{
			let homeData = HomeDataMgr.Ins()
			homeData.addAttrListener("sex", ()=>{

			}, this)
			this.addAttrListener(homeData, "sex", )
		}
	}

	export class DemoPanel extends ViewBase
	{
		public info:DemoPanelData;
		public constructor()
		{
			super("DemoPanelSkin");	
		}

		protected init()
		{
			
		}

		protected destroy()
		{
			if(this.info != null)
				this.info.destroyAll();
		}

		public initView()
		{
			this.addAttrListener("ad", this.OnDemoCB, this)
		}

		private OnDemoCB()
		{

		}
	}
}