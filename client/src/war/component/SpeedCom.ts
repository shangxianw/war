module war
{
	export class SpeedCom extends ComBase
	{
		public speed:number;
		public angle:number; // 角度为0时为x轴正方向，顺时针增加
		protected init()
		{
			this.angle = 45;
			this.speed = 0;
			this.componentId = COMPONENT.SPEED;
		}

		protected destroy()
		{
			this.speed = 0;
			this.angle = 0;
		}
	}
}