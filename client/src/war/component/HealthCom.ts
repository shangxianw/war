module war
{
	/**
	 * 健康系统
	 * 主要保存血量和蓝量(当然这里没有)
	 */
	export class HealthCom extends ComBase
	{
		public hp:number;
		protected init()
		{
			this.comId = Component.Health;
			this.hp = 0;
		}

		protected destroy()
		{
			
		}

		public setHealth(hp:number)
		{
			this.hp = hp;
		}
	}
}