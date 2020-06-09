module war
{
	export class InputCom extends ComBase
	{
		public inputType:number;

		public x1:number;
		public y1:number;
		public x2:number;
		public y2:number;

		public parent:eui.Group;
		protected init()
		{
			this.componentId = COMPONENT.INPUT;
			this.inputType = INPUT.NONE;
		}

		protected destroy()
		{
			this.inputType = INPUT.NONE;
		}
	}
}