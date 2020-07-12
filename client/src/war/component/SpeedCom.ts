module war
{
	export class SpeedCom extends ComBase
	{
		public speedX:number;
		public speedY:number;
		protected init()
		{
			this.comType = Component.Speed;
		}

		protected destroy()
		{

		}

		public setSpeed(speedX:number, speedY:number)
		{
			this.speedX = speedX;
			this.speedY = speedY;
		}

		public setSpeedX(speedX:number)
		{
			this.speedX = speedX;
		}

		public setSpeedY(speedY:number)
		{
			this.speedY = speedY;
		}

		public isUp()
		{
			return this.speedY < 0;
		}
	}
}