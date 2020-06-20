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

		public update(entity1:EntityBase, eltaTime:number)
		{
			if(entity1 == null)
				return;

			let entity2:EntityBase;
			let rCom1:RangeCom;
			let rCom2:RangeCom;
			let warData = WarDataMgr.Ins();
			let entityArray = warData.entityMap.values();
			let collisionEntity:EntityBase[] = [];
			
			rCom1 = entity1.getCom(COMPONENT.GRIGD) as RangeCom;
			if(rCom1 == null)
				return;
			for(let j=0, len2=entityArray.length; j<len2; j++) // 也是从0开始遍历的！
			{
				entity2 = entityArray[j];
				if(entity2 == null)
					continue;
				
				if(entity1.uniqueCode == entity2.uniqueCode)
					continue;
				
				rCom2 = entity2.getCom(COMPONENT.GRIGD) as RangeCom;
				if(rCom2 == null)
					continue;
				
				let flag = MathUtils.IsCircleIntersect(entity1.x, entity1.y, rCom1.radius, entity2.x, entity2.y, rCom2.radius);
				if(flag == false)
					continue;
				collisionEntity.push(entity2);
				break;
			}

			if(collisionEntity.length <= 0)
				DrawUtils.SetColor(entity1, false, 255, 0, 0);
			else
			{
				DrawUtils.SetColor(entity1, true, 255, 0, 0);
				let campCom:CampCom = entity1.getCom(COMPONENT.CAMP) as CampCom;
				let campCom2:CampCom = collisionEntity[0].getCom(COMPONENT.CAMP) as CampCom;
				// if(campCom.camp != campCom2.camp)
				// {
					this.toAttack(entity1, collisionEntity[0]);
					// return;
				// }
			}
			collisionEntity.length = 0;
		}

		public toAttack(entity1:EntityBase, entity2:EntityBase)
		{
			let aCom = entity1.getCom(COMPONENT.ACTION) as ActionCom;
			if(aCom == null)
				return;
			
			let sCom = entity1.getCom(COMPONENT.SPEED) as SpeedCom;
			if(sCom == null)
				return;
			let angle = MathUtils.CalcAngle(entity1.x, entity1.y, entity2.x, entity2.y);
			sCom.angle = angle;
			sCom.speed = 0;
			aCom.setAction(ACTION.ATTACK);
		}
	}
}