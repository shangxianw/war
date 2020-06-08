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
			for(let idStr in warData.entityMap.map)
			{
				entity = warData.entityMap.get(Number(idStr));
				if(entity == null)
					continue;

				let pCom:PathCom = entity.getCom(COMPONENT.PATH);
				if(pCom == null)
					continue;
				
				let currNode:astar.Node = pCom.getCurr();
				if(currNode == null)
				{
					entity.removeCom(COMPONENT.PATH);
					continue;
				}
				let lastNode:astar.Node = pCom.getLast();
				let localXY2 = WarUtils.ToRealPos(currNode.x, currNode.y);
				if(lastNode != null)
				{
					let localX1 = WarUtils.ToRealX(lastNode.x);
					let localY1 = WarUtils.ToRealX(lastNode.y);
					let d1 = MathUtils.CalcDistance(localX1, localY1, localXY2[0], localXY2[1]);
					let d2 = MathUtils.CalcDistance(localX1, localY1, entity.x, entity.y);
					if(d2 >= d1)
						pCom.toNext();
					else
					{
						let sCom:SpeedCom = entity.getCom(COMPONENT.SPEED);
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