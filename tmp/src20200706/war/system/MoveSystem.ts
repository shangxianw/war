module war
{
	/**
	 * 移动系统
	 * 同时拥有位置和速度，便认为该实体可以移动
	 * 负责刷新实体的位置
	 */
	export class MoveSystem extends SystemBase
	{
		protected init()
		{
			this.systemId = SYSTEM.MOVE;
		}

		protected destroy()
		{

		}

		public update(entity:EntityBase, deltaTime:number)
		{
			if(entity == null)
				return;

			let speedArray = MathUtils.CalcLegSide(entity.speed, entity.angle);
			let speedX = speedArray[0] * deltaTime; // 直接乘，因为这个通常不足一秒，所以肯定不
			let speedY = speedArray[1] * deltaTime;

			entity.x = Number((entity.x + speedX));
			entity.y = Number((entity.y + speedY));

			let entityInfo = WarDataMgr.Ins().infoMap.get(entity.uniqueCode) as EntityInfoView;
			if(entityInfo == null)
				return;
			entityInfo.x = entity.x;
			entityInfo.y = entity.y;
			entityInfo.updatePos();
		}
	}
}