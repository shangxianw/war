module war
{
	/**
	 * 普攻属性
	 * 攻击应该是有射程范围的，而且还是有攻速的(攻速比较复杂，后面再加)
	 * 同理释放技能，技能也是有一个射程范围，或者监测范围，所以range应该是每个攻击组件的一个字段，而不应该提出来
	 */
	export class AttackCom extends ComBase
	{
		public attack:number
		public range:number;
		public atkTarArray:EntityBase[];
		protected init()
		{
			this.comId = Component.Attack;
			this.attack = 0;
			this.range = 0;
			this.atkTarArray = [];
		}

		protected destroy()
		{
			this.atkTarArray.length = 0;
		}

		public setAttack(attack:number, range:number)
		{
			this.attack = attack;
			this.range = range;
		}

		public setTarArray(list:EntityBase[])
		{
			this.atkTarArray.length = 0;
			this.atkTarArray = list;
		}
	}
}