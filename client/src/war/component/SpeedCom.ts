module war
{
	export class SpeedCom extends ComBase
	{
		public speed:number;
		protected init()
		{
			this.speed = 0;
			this.componentId = COMPONENT.SPEED;
		}

		protected destroy()
		{
			this.speed = 0;
		}

		public getSpeedXY(oriX:number, oriY:number, tarX:number, tarY:number)
		{

		}
	}
}