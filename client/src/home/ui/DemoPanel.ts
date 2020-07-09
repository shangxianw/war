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
			this.addAttrListener(homeData, "sex", ) // database注册肯定是注册别人的data，所以此处的addAttrListener需要多一个参数来保存那个data，以便内部销毁
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