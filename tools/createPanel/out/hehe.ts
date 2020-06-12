
module home
{
	export class HEHEData extends ViewData
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

	export class HEHE extends ViewBase
	{
		public info:HEHEData;
		public constructor()
		{
			super("HEHESkin");	
		}

		protected init()
		{
			this.viewInfo = new HEHEData();
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
