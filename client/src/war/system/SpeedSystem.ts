module war
{
	/**
	 * 速度系统
	 * 专门负责研究
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

			// 知道当前目标去修改速度的方向
			let sCom = entity.getCom(COMPONENT.SPEED) as SpeedCom;
			if(sCom == null)
				return;
			let pCom = entity.getCom(COMPONENT.PATH) as PathCom;
			if(pCom != null) // 不判断为null然后直接返回是因为速度不一定只有路径构成，还有可能是别的因素，可在下方拓展，路径只改变方向
			{
				let currNode:astar.Node = pCom.getCurr();
				let localXY = WarUtils.ToRealPos(currNode.x, currNode.y);
				let angle = MathUtils.CalcAngle(entity.x, entity.y, localXY[0], localXY[1]);
				sCom.angle = angle;

				let speedXY = MathUtils.CalcLegSide(sCom.speed, sCom.angle);
				let speedX = speedXY[0];
				let speedY = speedXY[1];
				// 判断需不需要进行下一个目标
				if(
					(speedX < 0 && entity.x < localXY[0]) ||
					(speedX > 0 && entity.x > localXY[0]) ||
					(speedY < 0 && entity.y < localXY[1]) ||
					(speedY > 0 && entity.y > localXY[1])
				)
				{
					entity.x = localXY[0];
					entity.y = localXY[1];
					pCom.toNext();
				}
			}
		}
	}
}