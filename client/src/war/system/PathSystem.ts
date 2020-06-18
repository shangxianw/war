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

		public update(entity:EntityBase, deltaTime:number)
		{
			let warData = WarDataMgr.Ins();
			if(entity == null)
				return;

			let pCom = entity.getCom(COMPONENT.PATH) as PathCom;
			if(pCom == null)
				return;
			DrawUtils.DrawPath(entity);
			let currNode:astar.Node = pCom.getCurr();
			if(currNode == null)
			{
				try
				{
					// entity.removeCom(COMPONENT.PATH);
					// entity.removeCom(COMPONENT.SPEED);
				}
				catch(e)
				{
					1;
					1;
				}
				return;
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