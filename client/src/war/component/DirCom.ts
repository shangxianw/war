module war
{
	export class DirCom extends ComBase
	{
		public direction:number;
		protected init()
		{
			this.comId = Component.Direction;
			this.direction = Direction.Right;
		}

		protected destroy()
		{
			
		}

		public setDir(dir:number)
		{
			this.direction = dir;
		}
	}
}