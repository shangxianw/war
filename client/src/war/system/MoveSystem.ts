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

			let sCom = entity.getCom(COMPONENT.SPEED) as SpeedCom;
			if(sCom == null)
				return;
			
			let speedArray = MathUtils.CalcLegSide(sCom.speed, sCom.angle);
			let speedX = speedArray[0];
			let speedY = speedArray[1];

			entity.x = Number((entity.x + speedX).toFixed(2));
			entity.y = Number((entity.y + speedY).toFixed(2));
		}
	}
}