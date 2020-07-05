module war
{
	export class CostBarData extends DataBase
	{
		public totalWidth:number;
		public widthCeil:number;
		public speed:number;
		public lastTime:number;
		public constructor()
		{
			super();
		}

		protected init()
		{
			this.lastTime = 0;
		}

		protected destroy()
		{

		}

		public packData(speed:number)
		{
			this.speed = speed;
			return this;
		}

		public initData(width:number)
		{
			this.totalWidth = width;
			this.widthCeil = width/100;
		}

		public getDeltaTime()
		{
			let currTime = egret.getTimer();
			let deltaTime = currTime - this.lastTime;
			this.lastTime = currTime;
			return deltaTime;
		}
	}

	export class CostBar extends UIBase
	{
		public bar1:eui.Image;
		private bar2:eui.Image;

		public info:CostBarData;
		public constructor()
		{
			super("CostBarSkin");
		}

		protected init()
		{
			
		}

		protected destroy()
		{

		}

		public initData(info:CostBarData)
		{
			if(info == null)
				return;
			this.info = info;
			this.info.initData(this.bar1.width);
			this.initBar();
		}

		private initBar()
		{
			this.bar1.width = 0;
			this.bar2.width = 0;
		}

		public OnUpdate()
		{
			let deltaTime = this.info.getDeltaTime();
			this.bar1.width = Math.min(this.bar1.width + this.info.speed*this.info.widthCeil*deltaTime/1000, this.info.totalWidth);
			this.bar2.width = Math.min(this.bar1.width + this.info.speed*this.info.widthCeil*deltaTime/1000, this.info.totalWidth);
		}
	}
}