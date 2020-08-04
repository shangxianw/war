module war
{
	export class PosCom extends ComBase
	{
		public x:number;
		public y:number;
		protected init()
		{
			this.comType = Component.Pos
		}

		protected destroy()
		{

		}

		public setAddPos(x:number, y:number)
		{
			this.x += x
			this.y += y
		}
	}
}