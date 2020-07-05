module war
{
	/**
	 * 速度系统
	 * 主要是计算速度的方向，供移动系统使用
	 */
	export class SpeedSystem extends SystemBase
	{
		protected init()
		{
			this.systemId = SYSTEM.PATH;
		}

		protected destroy()
		{

		}

		public update(entity:EntityBase, deltaTime:number)
		{
			if(entity == null)
				return;

			if(entity.action == ACTION.RUN)
				this.calcByPath(entity);
			else if(entity.action == ACTION.ATTACK)
				this.calcByAttack(entity);
		}

		private calcByAttack(entity:EntityBase)
		{
			let attackTarEntity = entity.attackTargets[0];
			if(attackTarEntity == null)
				return;
			let startX = WarUtils.ToLocalX(entity.x);
			let startY = WarUtils.ToLocalY(entity.y);
			let endX = WarUtils.ToLocalX(attackTarEntity.x);
			let endY = WarUtils.ToLocalY(attackTarEntity.y);
			let angle = MathUtils.CalcAngle(startX, startY, endX, endY);
			entity.angle = angle;
			this.setDir(entity, entity.angle);
		}

		private calcByPath(entity:EntityBase)
		{

			let pCom = entity.getCom(COMPONENT.PATH) as PathCom;
			if(pCom != null)
			{
				let currStartNode = pCom.getCurrStartNode();
				if(currStartNode != null)
				{
					let currEndNode = pCom.getCurrEndNode();
					if(currEndNode == null)
						return;
					let startX = WarUtils.ToLocalX(currStartNode.x);
					let startY = WarUtils.ToLocalY(currStartNode.y);
					let endX = WarUtils.ToLocalX(currEndNode.x);
					let endY = WarUtils.ToLocalY(currEndNode.y);
					let angle = MathUtils.CalcAngle(startX, startY, endX, endY);
					entity.angle = angle;
					this.setDir(entity, entity.angle);
				}
			}
		}

		private setDir(entity:EntityBase, angle:number)
		{
			if(angle > 337.5 || angle <= 22.5) // 右
			{
				entity.dir = DIRECTION.RIGHT;
			}
			else if(angle > 22.5 && angle <= 67.5) // 右下
			{
				entity.dir = DIRECTION.RIGHT_DOWN;
			}
			else if(angle > 67.5 && angle <= 112.5)
			{
				entity.dir = DIRECTION.DOWN;
			}
			else if(angle > 112.5 && angle <= 157.5)
			{
				entity.dir = DIRECTION.LEFT_DOWN;
			}
			else if(angle > 157.5 && angle <= 202.5)
			{
				entity.dir = DIRECTION.LEFT;
			}
			else if(angle > 202.5 && angle <= 247.5)
			{
				entity.dir = DIRECTION.LEFT_UP;
			}
			else if(angle > 247.5 && angle <= 292.5)
			{
				entity.dir = DIRECTION.UP;
			}
			else if(angle > 292.5 && angle <= 337.5)
			{
				entity.dir = DIRECTION.RIGHT_UP;
			}
		}
	}
}