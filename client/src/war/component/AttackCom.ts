module war
{
	export class AttackCom extends ComBase
	{
		public range:number;
		protected init()
		{
			this.componentId = COMPONENT.ATTACK;
		}

		protected destroy()
		{

		}

		public setRange(range:number)
		{
			this.range = range;
		}
	}
}