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

		public update(deltaTime:number)
		{
			let entity:EntityBase;
			let warData = WarDataMgr.Ins();
			for(let entity of warData.entityMap.values)
			{
				if(entity == null)
					continue;

				// 知道当前目标去修改速度的方向
				let sCom = entity.getCom(COMPONENT.SPEED) as SpeedCom;
				if(sCom != null)
				{
					let pCom = entity.getCom(COMPONENT.PATH) as PathCom;
					if(pCom == null) 
						continue;
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
}