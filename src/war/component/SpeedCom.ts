module war
{
	export class SpeedCom extends DataBase
	{
		speedX:number;
		speedY:number;
		protected init()
		{
			this.speedX = 0;
			this.speedY = 0;
		}

		protected destroy()
		{
			this.speedX = 0;
			this.speedY = 0;
		}
	}
}