module war
{
	export class InputCom extends ComBase
	{
		public inputType:number;

		public x1:number;
		public y1:number;
		public x2:number;
		public y2:number;
		public camp:number;

		public parent:egret.DisplayObjectContainer;
		protected init()
		{
			this.componentId = COMPONENT.INPUT;
			this.inputType = INPUT.NONE;
		}

		protected destroy()
		{
			this.inputType = INPUT.NONE;
		}

		public packData(inputType:number, x1:number, x2:number, y1:number, y2:number, parent:egret.DisplayObjectContainer, camp:number)
		{
			this.inputType = inputType;
			this.x1 = x1;
			this.x2 = x2;
			this.y1 = y1;
			this.y2 = y2;
			this.camp = camp;
			this.parent = parent;
			return this;
		}

		public packQueen(inputType:number, x1:number, y1:number, parent:egret.DisplayObjectContainer, camp:number)
		{
			this.inputType = inputType;
			this.x1 = x1;
			this.y1 = y1;
			this.camp = camp;
			this.parent = parent;
			return this;
		}

		public packKing(inputType:number, x1:number, y1:number, parent:egret.DisplayObjectContainer, camp:number)
		{
			this.inputType = inputType;
			this.x1 = x1;
			this.y1 = y1;
			this.camp = camp;
			this.parent = parent;
			return this;
		}
	}
}