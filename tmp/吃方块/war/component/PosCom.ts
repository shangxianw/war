module war
{
	export class PosCom extends ComBase
	{
		public alpha:number;
		public x:number;
		public y:number;
		public width:number;
		public height:number;
		public color:number;
		public anchorX:number;
		public anchorY:number;
		public scaleX:number;
		public scaleY:number;
		protected init()
		{
			this.x = 0;
			this.y = 0;
			this.width = 0;
			this.height = 0;
			this.anchorX = this.anchorY = 0;
			this.scaleX = this.scaleY = 1;
			this.color = 0x000000;
			this.alpha = 1;
			this.comType = Component.Pos;
		}

		protected destroy()
		{

		}

		public setX(x:number)
		{
			this.x = x;
		}

		public setY(y:number)
		{
			this.y = y;
		}

		public setXY(x:number, y:number)
		{
			this.x = x;
			this.y = y;
		}

		public setWidth(w:number)
		{
			this.width = w;
		}

		public setHeight(h:number)
		{
			this.height = h;
		}

		public setSize(w:number, h:number)
		{
			this.width = w;
			this.height = h;
		}

		public setColor(color:number)
		{
			this.color = color;
		}

		public setAnchorXY(x:number, y:number)
		{
			this.anchorX = x;
			this.anchorY = y;
		}

		public setScaleXY(x:number, y:number)
		{
			this.scaleX = x;
			this.scaleY = y;
		}
	}
}