module war
{
	export class PosCom extends ComBase
	{
		public x:number;
		public y:number;
		protected init()
		{

		}

		protected destroy()
		{

		}

		public setX(x:number)
		{
			this.x = x;
		}

		public sexY(y:number)
		{
			this.y = y;
		}

		public setXY(x:number, y:number)
		{
			this.x = x;
			this.y = y;
		}
	}
}