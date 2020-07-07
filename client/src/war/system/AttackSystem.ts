module war
{
	/**
	 * 伤害计算系统（只处理攻击和受击）
	 */
	export class AttackSystem extends SystemBase
	{
		protected init()
		{
			this.systemId = System.Attack;
		}

		protected destroy()
		{

		}

		public update(entity:EntityBase, deltaTime:number)
		{
			if(entity == null)
				return;
			
			if(entity.attackCom.range == null)
				return;
			
			// 普攻且只会攻击一个人的情况
			this.calcCommonAttack(entity, deltaTime);
		}

		// 目标是不会移动的实体
		private calcCommonAttack(entity:EntityBase, deltaTime:number)
		{
			if(entity.attackCom.atkTarArray.length <= 0)
			{
				let entityArray:EntityBase[] = DataUtils.CopyArray(WarDataMgr.Ins().entityMap.values());
				let distance:number = 0;
				for(let tarEntity of entityArray)
				{
					if(tarEntity == null)
						continue;
					
					if(entity.iii == tarEntity.iii)
						continue;
					
					// 同阵营
					let camp = entity.campCom.camp;
					let tarCamp = tarEntity.campCom.camp;
					if(camp == null || tarCamp == null || camp == tarCamp)
						continue;

					// 射程范围外
					let range = entity.attackCom.range;
					distance = MathUtils.CalcTwoPointDistance(entity.x, entity.y, tarEntity.x, tarEntity.y, true);
					if(distance > range)
						continue;
					
					// 此处只对第一个人进行攻击
					entity.actionCom.setAction(Action.Attack);
					entity.speedCom.setSpeed(0);
					entity.attackCom.setTarArray([tarEntity]);
					break;
				}
			}

			// 攻击
			let tarEntity:EntityBase = entity.attackCom.atkTarArray[0]; // 只打一个人
			if(entity.actionCom.action == Action.Attack && entity.attackLoopOK == true && tarEntity != null)
			{
				let entityInfo:EntityInfoView = WarDataMgr.Ins().infoMap.get(tarEntity.iii) as EntityInfoView;
				if(entityInfo == null)
					return;
				
				tarEntity.healthCom.setHealth(-entity.attackCom.attack * deltaTime);

				if(tarEntity.healthCom.isDie() == true) // 死亡
				{
					let infoView = WarDataMgr.Ins().infoMap.get(tarEntity.iii) as EntityInfoView;
					if(infoView != null && infoView.parent != null && infoView.parent.getChildIndex(infoView) >= 0)
						infoView.parent.removeChild(infoView);
					if(tarEntity != null && tarEntity.parent != null && tarEntity.parent.getChildIndex(tarEntity) >= 0)
					{
						WarDataMgr.Ins().removeEntity(tarEntity.iii);
						tarEntity.parent.removeChild(tarEntity);
					}
					entity.actionCom.setAction(Action.None);
					entity.attackCom.setTarArray([]);
				}
				entity.attackLoopOK = false;
			}
		}
	}
}