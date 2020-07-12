module war
{
	export class CollisionSystem extends SystemBase
	{
		/**
		 * 名称：碰撞检测
		 * 功能：检测是否跳跃到台阶上
		 * 原理：计算矩形与矩形之间是否发生碰撞，只有速度向下，且脚踩在台阶上才算是作为跳跃的标志
		 * 注意：1、即使发生碰撞，也需要检测速度方向，按照游戏需求，玩家向上是可以穿过台阶，向下则是进行跳跃的，所以需要判断速度方向
		 * 		2、即使速度向下了，也需要判断玩家的脚是否踩在台阶上，否则会发生只要满足碰撞+速度向下，就会发生碰撞。
		 */
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
			
			let rigidCom = entity.getComponent(Component.Rigid) as RigidCom;
			let posCom = entity.getComponent(Component.Pos) as PosCom;
			let speedCom = entity.getComponent(Component.Speed) as SpeedCom;
			let ctrlCom = entity.getComponent(Component.Ctrl) as CtrlCom;
			if(rigidCom == null || posCom == null || speedCom == null || ctrlCom == null)
				return;
			
			let entityArray:EntityBase[] = DataUtils.CopyArray(WarDataMgr.Ins().entityMap.values());
			for(let entity2 of entityArray)
			{
				if(entity2 == null)
					continue;
				
				if(entity.hasCode == entity2.hasCode)
					continue;

				let rigidCom2 = entity2.getComponent(Component.Rigid) as RigidCom;
				let posCom2 = entity2.getComponent(Component.Pos) as PosCom;
				if(rigidCom2 == null || posCom2 == null)
					continue;
				
				let flag = MathUtils.CheckTwoRectIntersect(
						posCom.getOriX(), 
						posCom.getOriY(), 
						posCom.width,
						posCom.height,
						posCom2.getOriX(), 
						posCom2.getOriY(), 
						posCom2.width,
						posCom2.height
					)
				if(flag == false)
					continue;
					
				if(speedCom.isUp() == true)
					continue;
				
				if(posCom.y > posCom2.y) // 因为碰撞不一定是要触发跳跃，只有player的脚碰到阶梯的上部分才算是跳跃，这里简化了流程，准确应该是 posCom2.y - posCom2.height
					continue;
				speedCom.speedY = WarDataMgr.Ins().jumpSpeed;
			}
		}
	}
}