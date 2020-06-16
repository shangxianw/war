module war
{
	export class HealthCom extends ComBase
	{
		public hp:number;
		protected init()
		{
			this.componentId = COMPONENT.HP;
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