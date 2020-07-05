module war
{
	/**
	 * 射程系统
	 * 检测实体是否在射程范围内
	 */
	export class RangeSystem extends SystemBase
	{
		protected init()
		{
			this.systemId = SYSTEM.RANGE;
		}

		protected destroy()
		{

		}

		public update(entity:EntityBase, deltaTime:number)
		{
			if(entity == null)
				return;

			if(entity.range == null)
				return;
			
			let entityArray:EntityBase[] = DataUtils.CopyArray(WarDataMgr.Ins().entityMap.values());
			let distance:number = 0;
			for(let tarEntity of entityArray)
			{
				if(tarEntity == null)
					continue;
				
				if(entity.uniqueCode == tarEntity.uniqueCode)
					continue;
				
				// 同阵营
				let camp = entity.camp;
				let tarCamp = tarEntity.camp;
				if(camp == null || tarCamp == null || camp == tarCamp)
					continue;

				// 射程范围外
				let range = entity.range;
				distance = MathUtils.CalcDistance(entity.x, entity.y, tarEntity.x, tarEntity.y, true);
				if(distance > range)
					continue;
				
				// 此处只对第一个人进行攻击
				entity.action = ACTION.ATTACK;
				entity.speed = 0;
				
				entity.attackTargets = [];
				entity.attackTargets.push(tarEntity);
				break;
			}
		}
	}
}