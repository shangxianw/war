module war
{
	/**
	 * 伤害计算系统（只处理攻击和受击）
	 */
	export class AttackSystem extends SystemBase
	{
		protected init()
		{
			this.systemId = SYSTEM.ATTACK;
		}

		protected destroy()
		{

		}

		public update(entity:EntityBase, deltaTime:number)
		{
			if(entity == null)
				return;
			
			// 攻击
			if(entity.action == ACTION.ATTACK && entity.attackLoopOK == true)
			{
				let tarEntity = entity.attackTargets[0]; // 只打一个人
				if(tarEntity == null)
					return;
				
				let entityInfo:EntityInfoView = WarDataMgr.Ins().infoMap.get(tarEntity.uniqueCode) as EntityInfoView;
				if(entityInfo == null)
					return;
				
				tarEntity.health -= entity.attack
				entityInfo.updateHealth(tarEntity.health);

				if(tarEntity.health <= 0) // 死亡
				{
					let infoView = WarDataMgr.Ins().infoMap.get(tarEntity.uniqueCode) as EntityInfoView;
					if(infoView != null && infoView.parent != null && infoView.parent.getChildIndex(infoView) >= 0)
						infoView.parent.removeChild(infoView);
					if(tarEntity != null && tarEntity.parent != null && tarEntity.parent.getChildIndex(tarEntity) >= 0)
					{
						WarDataMgr.Ins().removeEntity(tarEntity.uniqueCode);
						tarEntity.parent.removeChild(tarEntity);
					}
					entity.action = ACTION.RUN;
					entity.speed = 20;
				}
			}
			entity.attackLoopOK = false;
		}
	}
}