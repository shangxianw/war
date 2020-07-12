module war
{
	export class CollisionSystem extends SystemBase
	{
		protected init()
		{
			this.sysType = System.Collision;
		}

		protected destroy()
		{

		}
		
		public update(entity:EntityBase, deltaTime:number)
		{
			if(entity == null)
				return;
			
			let ctrlCom = entity.getComponent(Component.Ctrl) as ControlCom;
			if(ctrlCom == null) // 只有玩家自己才能检测碰撞比吃掉他们
				return;
			
			let posCom = entity.getComponent(Component.Pos) as PosCom;
			if(posCom == null)
				return;
			
			let healthCom = entity.getComponent(Component.Health) as HealthCom;
			if(healthCom == null)
				return;
			
			let warData = WarDataMgr.Ins();
			let entityArray = DataUtils.CopyArray(warData.entityMap.values());
			let entity2:EntityBase;
			for(let i=0, len=entityArray.length; i<len; i++)
			{
				entity2 = entityArray[i];
				if(entity2 == null)
					continue;
				
				if(entity2.hasCode == entity.hasCode) // 自己
					continue
				
				let aiCom = entity2.getComponent(Component.AI) as AICom; // 只和ai发生碰撞（即除了背景板）
				if(aiCom == null)
					continue;
				
				let posCom2 = entity2.getComponent(Component.Pos) as PosCom;
				if(posCom2 == null)
					continue;
				
				let flag = MathUtils.CheckTwoRectIntersect(
						posCom.x - posCom.width/2, 
						posCom.y - posCom.height/2, 
						posCom.width, 
						posCom.height, 
						posCom2.x - posCom2.width/2, 
						posCom2.y - posCom2.height/2, 
						posCom2.width, 
						posCom2.height
					)
				if(flag == false)
					continue;
				
				if(aiCom.aiType == AIType.Nice)
				{
					healthCom.setHp(healthCom.hp + posCom2.width/2);
					let score = Math.floor(posCom2.width/2);
					WarDataMgr.Ins().warPanel.OnRefreshScore(score);
					this.changeBgColor(1);
				}
				else
				{
					healthCom.setHp(healthCom.hp - posCom2.width/2);
					let score = Math.floor(posCom2.width/2);
					WarDataMgr.Ins().warPanel.OnRefreshScore(-score);
					this.changeBgColor(2);
				}
				posCom.setScaleXY(healthCom.hp/100, healthCom.hp/100);
				WarUtils.RemoveEntity(entity2);
			}
		}

		private changeBgColor(type:number)
		{
			let bgEntity = WarDataMgr.Ins().bgEntity;
			if(bgEntity == null)
				return;
			
			let posCom = bgEntity.getComponent(Component.Pos) as PosCom;
			if(posCom == null)
				return;
			if(type == 1) // good
			{
				posCom.setColor(EntityColor.NiceBg)
				// let bgPosCom = WarDataMgr.Ins().bgEntity.getComponent(Component.Pos) as PosCom
				// bgPosCom.alpha = 1;
			}
			else
			{
				posCom.setColor(EntityColor.BadBg)
				let bgPosCom = WarDataMgr.Ins().bgEntity.getComponent(Component.Pos) as PosCom
				bgPosCom.alpha = 1;
			}
		}
	}
}