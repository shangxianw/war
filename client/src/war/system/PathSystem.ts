module war
{
	/**
	 * 路径系统
	 * 判断需不需要进行下一个阶段
	 * 而不会要求计算是否获取新的路径
	 */
	export class PathSystem extends SystemBase
	{
		protected init()
		{
			this.systemId = System.Path;
		}

		protected destroy()
		{

		}

		public update(entity:EntityBase, deltaTime:number)
		{
			let warData = WarDataMgr.Ins();
			if(entity == null)
				return;

			let pCom = entity.getCom(Component.Path) as PathCom;
			if(pCom == null)
				return;
			
			let currStartNode = pCom.getCurrStartNode();
			if(currStartNode != null)
			{
				let currEndNode = pCom.getCurrEndNode();
				if(currEndNode == null)
				{
					entity.removeCom(Component.Path);
					entity.actionCom.setAction(Action.None);
					return;
				}
				let startX = WarUtils.ToLocalX(currStartNode.x);
				let startY = WarUtils.ToLocalY(currStartNode.y);
				let endX = WarUtils.ToLocalX(currEndNode.x);
				let endY = WarUtils.ToLocalY(currEndNode.y);
				let d1 = MathUtils.CalcTwoPointDistance(startX, startY, endX, endY);
				let d2 = MathUtils.CalcTwoPointDistance(startX, startY, entity.x, entity.y);
				if(d2 >= d1)
				{
					pCom.toNextNode();
				}
				DrawUtils.DrawPath(entity);
			}
			else
			{
				
			}
		}
	}
}