module war
{
	export class DirectionCom extends ComBase
	{
		private direction:number;
		protected init()
		{
			this.componentId = COMPONENT.DIRECTION
			this.direction = DIRECTION.UP;
		}

		protected destroy()
		{
			
		}

		public setDirection(dir:number)
		{
			this.direction = dir;
		}

		public getDirection()
		{
			return this.direction;
		}
	}
}