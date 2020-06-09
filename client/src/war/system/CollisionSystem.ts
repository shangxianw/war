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
			let isCollision:boolean = false;
			
			for(let i=0, len=entityArray.length; i<len; i++)
			{
				entity1 = entityArray[i];
				if(entity1 == null)
					continue;
				rCom1 = entity1.getCom(COMPONENT.GRIGD);
				if(rCom1 == null)
					continue;
				for(let j=0, len2=entityArray.length; j<len2; j++) // 也是从0开始遍历的！
				{
					entity2 = entityArray[j];
					if(entity2 == null)
						continue;
					
					if(entity1.id == entity2.id)
						continue;
					
					rCom2 = entity2.getCom(COMPONENT.GRIGD);
					if(rCom2 == null)
						continue;
					
					let flag = MathUtils.IsCircleIntersect(entity1.x, entity1.y, rCom1.radius, entity2.x, entity2.y, rCom2.radius);
					if(flag == false)
						continue;
					isCollision = true;
					break;
				}

				if(isCollision == false)
					DrawUtils.SetColor(entity1, false, 255, 0, 0);
				else
				{
					DrawUtils.SetColor(entity1, true, 255, 0, 0);
					
				}
				isCollision = false;
			}
		}
	}
}