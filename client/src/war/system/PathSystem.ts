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
				let lastNode:astar.Node = pCom.getLast();
				if(currNode == null)
					continue;
				if(lastNode != null)
				{
					let localXY1 = warData.calcLocalXY(lastNode.x, lastNode.y);
					let localXY2 = warData.calcLocalXY(currNode.x, currNode.y);
					let d1 = MathUtils.CalcDistance(localXY1[0], localXY1[1], localXY2[0], localXY2[1]);
					let d2 = MathUtils.CalcDistance(localXY1[0], localXY1[1], entity.x, entity.y);
					if(d2 >= d1)
						pCom.toNext();
				}
				else
				{
					pCom.toNext();
				}
			}
		}
	}
}