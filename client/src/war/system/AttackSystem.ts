module war
{
	export class AttackSystem extends SystemBase
	{
		protected init()
		{
			this.sysType = System.Attack;
		}

		protected destroy()
		{

		}
		
		public update(entity:EntityBase, dt:number)
		{
			if(entity == null)
				return;
			
			let posCom = entity.getComponent(Component.Pos) as PosCom;
			let atkCom = entity.getComponent(Component.Attack) as AttackCom;
			let actionCom = entity.getComponent(Component.Action) as ActionCom;
			if(posCom == null || atkCom == null || actionCom == null)
				return;
			
			let currAction = actionCom.action
			let tarEntity:EntityBase = null
			let array:EntityBase[] = DataUtils.CopyArray(WarDataMgr.Ins().entityMap.values())
			for(let entity2 of array)
			{
				if(entity2 == null)
					continue
				
				if(entity.hasCode == entity2.hasCode) // 自己
					continue
				
				// 攻击不需要考虑对方也在射程内
				// let atkCom2 = entity2.getComponent(Component.Attack) as AttackCom
				// if(atkCom2 == null) // 当二者都是刚体时才
				// 	continue
				let posCom2 = entity2.getComponent(Component.Pos) as PosCom;
				if(posCom2 == null)
					continue
				
				let distance = MathUtils.TwoPointDistance(posCom.x, posCom.y, posCom2.x, posCom2.y)
				if(distance > atkCom.range) // 射程外
					continue
				
				tarEntity = entity2
				// WarFactory.RemoveHero(entity2.hasCode)
				break
			}

			if(tarEntity == null)
			{
				actionCom.action = Action.Run
				return
			}
			else
			{
				if(actionCom.action == Action.Attack) // 不在打架，就看看有没有机会进行攻击
					return
			}
			
			// 确定目标
			actionCom.action = Action.Attack
		}
	}
}