module war
{
	export class SpeedCom extends ComBase
	{
		public speed:number;
		public angle:number;

		public lastPosArray:number[]; // x1, y1, x2, y2
		protected init()
		{
			this.comId = Component.Speed;
			this.angle = 0;
			this.speed = 0;
			this.lastPosArray = [0, 0, 0, 0];
		}

		protected destroy()
		{
			
		}

		public setData(speed:number, angle:number)
		{
			this.speed = speed;
			this.angle = angle;
		}

		public setSpeed(speed)
		{
			this.speed = speed;
		}
	}
}