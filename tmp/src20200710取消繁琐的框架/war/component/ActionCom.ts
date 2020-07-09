module war
{
	export class ActionCom extends ComBase
	{
		public action:number;
		protected init()
		{
			this.comId = Component.Action;
			this.action = Action.Stand;
		}

		protected destroy()
		{
			
		}

		public setAction(action)
		{
			this.action = action;
		}
	}
}