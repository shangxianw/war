module war
{
	/**
	 * 碰撞系统
	 * 拥有刚体组件，便认为该实体可以移动
	 * 负责刷新实体的位置
	 */
	export class CollisionSystem extends SystemBase
	{
		protected init()
		{
			this.systemId = SYSTEM.COLLISION;
		}

		protected destroy()
		{

		}

		public update(deltaTime:number)
		{
			let entity1:EntityBase;
			let entity2:EntityBase;
			let rCom1:RigidCom;
			let rCom2:RigidCom;
			let warData = WarDataMgr.Ins();
			let entityArray = warData.entityMap.values;
			
			for(let i=0, len=entityArray.length; i<len; i++)
			{
				entity1 = entityArray[i];
				if(entity1 == null)
					continue;
				rCom1 = entity1.getCom(COMPONENT.GRIGD);
				if(rCom1 == null)
					continue;
				for(let j=i+1, len2=entityArray.length; j<len2; j++)
				{
					entity2 = entityArray[j];
					if(entity2 == null)
						continue;
					
					rCom2 = entity2.getCom(COMPONENT.GRIGD);
					if(rCom2 == null)
						continue;
					
					let flag = MathUtils.IsCircleIntersect(entity1.x, entity1.y, rCom1.radius, entity2.x, entity2.y, rCom2.radius);
					if(flag == false)
						continue;
					
					// 以下是碰撞处理
					let aCom:ActionCom = entity2.getCom(COMPONENT.ACTION);
					if(aCom != null)
					{
						// aCom.setAction(ACTION.ATTACK);
						// entity2.removeCom(COMPONENT.SPEED);
						let pathCom:PathCom = entity2.getCom(COMPONENT.PATH);
						let endNode:astar.NodeItem = pathCom.getEndNode();
						
						let currNode:astar.NodeItem = pathCom.getCurr();
						let path = WarDataMgr.Ins().findPath([currNode.x, currNode.y-1], [endNode.x, endNode.y]);
						if(MathUtils.IsCircleIntersect(entity1.x, entity1.y, rCom1.radius, path[0].x, path[0].y, rCom2.radius) == false)
							pathCom.setPath(path);
						else
						{
							path = WarDataMgr.Ins().findPath([currNode.x+1, currNode.y-1], [endNode.x, endNode.y]);
							if(MathUtils.IsCircleIntersect(entity1.x, entity1.y, rCom1.radius, path[0].x, path[0].y, rCom2.radius) == false)
								pathCom.setPath(path);
						}
					}
				}
			}
		}
	}
}