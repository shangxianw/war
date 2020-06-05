module war
{
	export class MoveSystem extends SystemBase
	{
		protected init()
		{
			this.systemId = SYSTEM.MOVE;
		}

		protected destroy()
		{

		}

		public update(entity:EntityBase, deltaTime:number)
		{
			let sCom:SpeedCom = entity.getCom(COMPONENT.SPEED);
			let pCom:PathCom = entity.getCom(COMPONENT.PATH);
			if(pCom != null)
			{
				let path:astar.NodeItem[] = pCom.getPath();
				let tarNode:astar.NodeItem = path[0];
				if(tarNode == null)
					return;
				let space = WarDataMgr.Ins().grid.space;
				let localX = WarDataMgr.Ins().grid.startX + tarNode.x * space;
				let localY = WarDataMgr.Ins().grid.startY + tarNode.y * space;
				
				let isXOK = false;
				let isYOK = false;
				if(sCom.speedX < 0) // 从右往左
				{
					if(entity.x <= localX) //到达目标
					{
						isXOK = true;
					}
					else
					{
						sCom.speedX = Math.abs()
					}
				}
				else if(sCom.speedX > 0)
				{
					if(entity.x >= localX)
					{
						isXOK = true;
					}
				}
				
				if(sCom.speedY < 0)
				{
					if(entity.y <= localY)
					{
						isYOK = true;
					}
				}
				else if(sCom.speedY > 0)
				{
					if(entity.y >= localY)
					{
						isYOK = true;
					}
				}

				if(isYOK == true && isXOK == true)
				{
					let item = path.pop();
					item.destroy();
					PoolManager.Ins().push(item);
				}
			}

			entity.x += sCom.speedX;
			entity.y += sCom.speedY;
		}
	}
}