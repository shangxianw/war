module war
{
	export class AttackCom extends ComBase
	{
		public range:number;
		protected init()
		{
			this.comType = Component.Attack
		}

		protected destroy()
		{

		}
	}
}