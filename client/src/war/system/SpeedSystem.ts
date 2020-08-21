module war
{
	/**
	 * 速度系统，专门控制速度的改变因素
	 * 有时候是因为路径，但可能走着走着被击退了，关于速度改变的因素都在这里处理
	 */
	export class SpeedSystem extends SystemBase
	{
		protected init()
		{
			this.sysType = System.Speed;
		}

		protected destroy()
		{

		}
		
		public update(entity:EntityBase, dt:number)
		{
			if(entity == null)
				return;
			
			let posCom = entity.getComponent(Component.Pos) as PosCom;
			let speedCom = entity.getComponent(Component.Speed) as SpeedCom;
			if(posCom == null || speedCom == null)
				return

			let pathCom = entity.getComponent(Component.Path) as PathCom;
			if(pathCom != null)
			{
				let node = pathCom.getCurrNode()
				if(node == null)
					return
				
				let localX = WarUtils.GridX2LocalX(node.x)
				let localY = WarUtils.GridX2LocalX(node.y)
				let angle = MathUtils.CalcAngle(posCom.x, posCom.y, localX, localY)
				speedCom.setAngle(angle)
			}
		}
	}
}