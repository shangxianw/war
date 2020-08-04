module war
{
	export class SpeedCom extends ComBase
	{
		public speed:number;
		public angle:number;

		public lastPosArray:number[]; // x1, y1, x2, y2
		protected init()
		{
			this.comType = Component.Speed;
			this.speed = 0
			this.angle = 0
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

		public setAngle(angle:number, x1:number=null, y1:number=null, x2:number=null, y2:number=null)
		{
			this.angle = angle;
			if(x1 == null || y1 == null || x2 == null || y2 == null)
				return;
			this.lastPosArray = [x1, y1, x2, y2];
		}

		public isSamePos(x1:number, y1:number, x2:number, y2:number)
		{
			if(
				this.lastPosArray[0] == x1 && 
				this.lastPosArray[1] == y1 && 
				this.lastPosArray[2] == x2 && 
				this.lastPosArray[3] == y2
			)
				return true;
			return false;
		}

		protected destroy()
		{

		}
	}
}