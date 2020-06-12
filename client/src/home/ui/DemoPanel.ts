module home
{
	export class DemoPanelData extends ViewData
	{
		protected init()
		{
			this.resGroupArray = [];
			this.parent = LayerManager.Ins().Panel;
		}

		protected destroy()
		{
			
		}

		public name:string;
		public age:number;
		public packData()
		{

		}
	}

	// 只有状态，不操作数据。如果要修改数据，也要在Data中写一个方法，然后执行该方法
	export class DemoPanel extends ViewBase
	{
		public nameLb:eui.Label;
		public ageLb:eui.Label;
		public constructor()
		{
			super("DemoPanelSkin");	
		}

		protected init()
		{
			
		}

		public destroy()
		{
			
		}

		public initData(page:number)
		{
			
		}
	}
}