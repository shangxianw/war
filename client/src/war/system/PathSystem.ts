module war
{
	/**
	 * 路径系统
	 * 判断需不需要进行下一个阶段
	 */
	export class PathSystem extends SystemBase
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
			for(let entity of warData.entityMap.values())
			{
				if(entity == null)
					continue;

				let pCom = entity.getCom(COMPONENT.PATH) as PathCom;
				if(pCom == null)
					continue;
				DrawUtils.DrawPath(entity);
				let currNode:astar.Node = pCom.getCurr();
				if(currNode == null)
				{
					try
					{
						// entity.removeCom(COMPONENT.PATH);
						let endX = Math.floor(Math.random()*35);//[1, 2, 3, 4, 5, 6, 7][Math.floor(Math.random()*7)]
						let endY = Math.floor(Math.random()*15);//[1, 2, 3, 4, 5, 6, 7][Math.floor(Math.random()*7)]
						let startX = WarUtils.ToGridX(entity.x);
						let startY = WarUtils.ToGridY(entity.y);
						let path = WarDataMgr.Ins().findPath(startX, startY, endX, endY);
						console.log(path);
						pCom.setPath(path);
					}
					catch(e)
					{
						1;
						1;
					}
					continue;
				}
				let lastNode:astar.Node = pCom.getLast();
				let localXY2 = WarUtils.ToRealPos(currNode.x, currNode.y);
				if(lastNode != null)
				{
					let localX1 = WarUtils.ToLocalX(lastNode.x);
					let localY1 = WarUtils.ToLocalY(lastNode.y);
					let d1 = MathUtils.CalcDistance(localX1, localY1, localXY2[0], localXY2[1]);
					let d2 = MathUtils.CalcDistance(localX1, localY1, entity.x, entity.y);
					if(d2 >= d1)
						pCom.toNext();
					else
					{
						let sCom = entity.getCom(COMPONENT.SPEED) as SpeedCom;
						if(sCom != null)
						{
							sCom.angle = MathUtils.CalcAngle(entity.x, entity.y, localXY2[0], localXY2[1]);
						}
					}
				}
				else
				{
					pCom.toNext();
				}
			}
		}
	}
}