module home
{
	export class DemoPanelData extends DataBase
	{
		protected init()
		{

		}

		protected destroy()
		{

		}
	}

	export class DemoPanel extends ViewBase
	{
		public PanelId:number;
		public Layer:eui.Component;

		private timerLb:eui.Label;
		public constructor()
		{
			super("DemoPanelSkin");	
		}

		protected init()
		{
			this.PanelId = ViewIdConst.DemoPanel;
			this.Layer = LayerManager.Ins().Panel;
		}

		public destroy()
		{
			TimerManager.Ins().removeTimer(this.testTimer, this);
		}

		public initData()
		{
			TimerManager.Ins().removeTimer(this.testTimer, this);
			TimerManager.Ins().addTimer(1000, this.testTimer, this);
		}

		private testTimer()
		{
			this.timerLb.text = (new Date).getTime() + "";
			return true;
		}
	}
}