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
		private timerLb0:eui.Label;
		private timerLb1:eui.Label;
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
			// TimerManager.Ins().removeTimer(this.testTimer, this);
			// TimerManager.Ins().removeTimer(this.testTimer0, this);
			// TimerManager.Ins().removeTimer(this.testTimer1, this);
		}

		public initData()
		{
			// TimerManager.Ins().removeTimer(this.testTimer, this);
			// TimerManager.Ins().removeTimer(this.testTimer0, this);
			// TimerManager.Ins().removeTimer(this.testTimer1, this);
			// TimerManager.Ins().addTimer(1000, this.testTimer, this, true, "wsx", 18, 1);
			// TimerManager.Ins().addTimer(2000, this.testTimer0, this, true, "wsx", 18, 1);
			// TimerManager.Ins().addTimer(1500, this.testTimer1, this, false, "wsx", 18, 1);

			// let btn = new eui.Image;
			// btn.x = 200;
			// btn.y = 200;
			// btn.source = "bg_card_di_0_png";
			// this.addChild(btn);
		}

		private testTimer(e:TimerData, name:string, age:number, sex:number)
		{
			if(e.count <= 10000)
			{
				this.timerLb.text = `${e.count}`;
				return true;
			}
			return false;
		}

		private testTimer0(e:TimerData, name:string, age:number, sex:number)
		{
			if(e.count <= 30000)
			{
				this.timerLb0.text = `${e.count}`;
				return true;
			}
			return false;
		}

		private testTimer1(e:TimerData, name:string, age:number, sex:number)
		{
			if(e.count <= 20000)
			{
				this.timerLb1.text = `${e.count}`;
				return true;
			}
			return false;
		}
	}
}