module war
{
	export class HealthCom extends ComBase
	{
		public hp:number
		protected init()
		{
			this.comType = Component.Health;
		}

		protected destroy()
		{

		}

		public setHp(hp:number)
		{
			this.hp = hp;
		}
	}
}