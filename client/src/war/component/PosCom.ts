module war
{
	export class PosCom extends ComBase
	{
		public x:number;
		public y:number;
		public width:number;
		public height:number;
		protected init()
		{
			this.comType = Component.Pos;
		}

		protected destroy()
		{

		}

		public setXY(x:number, y:number)
		{
			this.x = x;
			this.y = y;
		}

		public setWH(width:number, height:number)
		{
			this.width = width;
			this.height = height;
		}

		// 获取左上角坐标
		public getOriX()
		{
			return this.x - this.width/2;
		}

		public getOriY()
		{
			return this.y - this.height;
		}
	}
}