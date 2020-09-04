module war
{
	export class ActionCom extends ComBase
	{
		public action:number;
		protected init()
		{
			this.comType = Component.Action
			this.action = Action.Stand
		}

		protected destroy()
		{

		}
	}
}