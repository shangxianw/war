module war
{
	export class AICom extends ComBase
	{
		public aiType:number;
		protected init()
		{
			this.comType = Component.AI;
		}

		protected destroy()
		{

		}

		public setAiType(type:number)
		{
			this.aiType = type
		}
	}
}