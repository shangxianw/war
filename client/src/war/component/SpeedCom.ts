module war
{
	export class SpeedCom extends ComBase
	{
		public speedX:number;
		public speedY:number;
		protected init()
		{
			this.speedX = 0;
			this.speedY = 0;
			this.componentId = COMPONENT.SPEED
		}

		protected destroy()
		{
			this.speedX = 0;
			this.speedY = 0;
		}

		public setSpeed(x:number, y:number)
		{
			this.speedX = x;
			this.speedY = y;
		}

		public setSpeedX(x:number)
		{
			this.speedX = x;
		}

		public setSpeedY(y:number)
		{
			this.speedY = y;
		}
	}
}