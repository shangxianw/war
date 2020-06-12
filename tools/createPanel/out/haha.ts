
module home
{
	export class haha.tsData extends ViewData
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

	export class [DemoPanel] extends ViewBase
	{
		public info:[DemoPanel]Data;
		public constructor()
		{
			super("[DemoPanel]Skin");	
		}

		protected init()
		{
			this.viewInfo = new [DemoPanel]Data();
			this.info = this.viewInfo as any;
		}

		protected destroy()
		{

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
