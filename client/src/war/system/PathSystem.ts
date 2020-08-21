module war
{
	export class PathSystem extends SystemBase
	{
		protected init()
		{
			this.sysType = System.Path;
		}

		protected destroy()
		{

		}
		
		public update(entity:EntityBase, dt:number)
		{
			if(entity == null)
				return;
			
			let pathCom = entity.getComponent(Component.Path) as PathCom;
			let speedCom = entity.getComponent(Component.Speed) as SpeedCom;
			let posCom = entity.getComponent(Component.Pos) as PosCom;
			if(pathCom == null || speedCom == null || posCom == null)
				return;
			
			let node = pathCom.getCurrNode()
			if(node == null)
			{
				entity.removeComponent(Component.Path)
				let gridX = WarUtils.LocalX2GridX(posCom.x)
				let gridY = WarUtils.LocalX2GridX(posCom.y)
				let node = WarDataMgr.Ins().getCanWalkNodeByRandom()
				
				let pathCom = new PathCom()
				let path = WarDataMgr.Ins().findPath(gridX, gridY, node.x, node.y)
				pathCom.setPath(path)
				entity.setComponent(pathCom)
				return
			}
			let localX = WarUtils.GridX2LocalX(node.x)
			let localY = WarUtils.GridX2LocalX(node.y)
			let x = posCom.x
			let y = posCom.y
			let angle = speedCom.angle

			if(angle == 0 && x < localX)
				return
			
			if(angle == 90 && y < localY)
				return
			
			if(angle == 180 && x > localX)
				return
			
			if(angle == 270 && y > localY)
				return
			
			if(angle > 0 && angle < 90) // 第四象限
				if((x > localX && y > localY) == false)
					return
			
			if(angle > 90 && angle < 180) // 第三象限
				if((x < localX && y > localY) == false)
					return
			
			if(angle > 180 && angle < 270) // 第一象限
				if((x < localX && y < localY) == false)
					return
			
			if(angle > 270 && angle < 360) // 第二象限
				if((x > localX && y < localY) == false)
					return
				
			node = pathCom.toNextNode()
			node.destroy()
			node = null;
		}
	}
}