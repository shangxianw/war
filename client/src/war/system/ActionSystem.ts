module war
{
	/**
	 * 行为系统
	 * 如果拥有路径组件，则为跑，添加速度组件
	 * 如果没有路径组件，则为站或者攻击。
	 */
	export class ActionSystem extends SystemBase
	{
		protected init()
		{
			this.systemId = SYSTEM.ACTION;
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

				let aCom:ActionCom = entity.getCom(COMPONENT.ACTION);
				if(aCom == null)
					continue;
				
				if(aCom.action == ACTION.RUN)
				{
					this.setRun(entity);
				}
				else if(aCom.action == ACTION.STAND)
				{
					this.setStand(entity);
				}
				else if(aCom.action == ACTION.ATTACK)
				{
					this.setAttack(entity);
				}
			}
		}

		private setStand(entity:EntityBase)
		{
			let aCom:ActionCom = entity.getCom(COMPONENT.ACTION);
			let dir = aCom.direction;
			if(dir == DIRECTION.UP)
			{
				entity.mc.scaleX = 1;
				entity.mc.startPlay(`stand0`, -1);
			}
			else if(dir == DIRECTION.RIGHT_UP)
			{
				entity.mc.scaleX = 1;
				entity.mc.startPlay(`stand1`, -1);
			}
			else if(dir == DIRECTION.RIGHT)
			{
				entity.mc.scaleX = 1;
				entity.mc.startPlay(`stand2`, -1);
			}
			else if(dir == DIRECTION.RIGHT_DOWN)
			{
				entity.mc.scaleX = 1;
				entity.mc.startPlay(`stand3`, -1);
			}
			else if(dir == DIRECTION.DOWN)
			{
				entity.mc.scaleX = 1;
				entity.mc.startPlay(`stand4`, -1);
			}

			else if(dir == DIRECTION.LEFT_DOWN)
			{
				entity.mc.scaleX = -1;
				entity.mc.startPlay(`stand3`, -1);
			}
			else if(dir == DIRECTION.LEFT)
			{
				entity.mc.scaleX = -1;
				entity.mc.startPlay(`stand2`, -1);
			}
			else if(dir == DIRECTION.LEFT_UP)
			{
				entity.mc.scaleX = -1;
				entity.mc.startPlay(`stand1`, -1);
			}
		}

		private setRun(entity:EntityBase)
		{
			let pCom:PathCom = entity.getCom(COMPONENT.PATH);
			let aCom:ActionCom = entity.getCom(COMPONENT.ACTION);
			
			let currNode:astar.Node = pCom.getCurr();
			if(currNode == null)
				return;
			let warData = WarDataMgr.Ins();
			let localX = warData.startX + warData.grid.space * currNode.x;
			let localY = warData.startY + warData.grid.space * currNode.y;
			if(entity.x == localX && entity.y == localY)
			{

			}
			else if(entity.x == localX && entity.y > localY) 
			{
				aCom.setDir(DIRECTION.UP);
				entity.mc.scaleX = 1;
				entity.mc.startPlay(`run0`, -1);
			}
			else if(entity.x < localX && entity.y > localY)
			{
				aCom.setDir(DIRECTION.RIGHT_UP);
				entity.mc.scaleX = 1;
				entity.mc.startPlay(`run1`, -1);
			}
			else if(entity.x < localX && entity.y == localY)
			{
				aCom.setDir(DIRECTION.RIGHT);
				entity.mc.scaleX = 1;
				entity.mc.startPlay(`run2`, -1);
			}
			else if(entity.x < localX && entity.y < localY)
			{
				aCom.setDir(DIRECTION.RIGHT_DOWN);
				entity.mc.scaleX = 1;
				entity.mc.startPlay(`run3`, -1);
			}
			else if(entity.x == localX && entity.y < localY)
			{
				aCom.setDir(DIRECTION.DOWN);
				entity.mc.scaleX = 1;
				entity.mc.startPlay(`run4`, -1);
			}
			else if(entity.x > localX && entity.y < localY)
			{
				aCom.setDir(DIRECTION.LEFT_DOWN);
				entity.mc.scaleX = -1;
				entity.mc.startPlay(`run3`, -1);
			}
			else if(entity.x > localX && entity.y == localY)
			{
				aCom.setDir(DIRECTION.LEFT);
				entity.mc.scaleX = -1;
				entity.mc.startPlay(`run2`, -1);
			}
			else if(entity.x > localX && entity.y > localY)
			{
				aCom.setDir(DIRECTION.LEFT_UP);
				entity.mc.scaleX = -1;
				entity.mc.startPlay(`run1`, -1);
			}
		}

		private setAttack(entity:EntityBase)
		{
			let aCom:ActionCom = entity.getCom(COMPONENT.ACTION);
			let dir = aCom.direction;
			
			if(dir == DIRECTION.UP)
			{
				entity.mc.scaleX = 1;
				entity.mc.startPlay(`attack0`, -1);
			}
			else if(dir == DIRECTION.RIGHT_UP)
			{
				entity.mc.scaleX = 1;
				entity.mc.startPlay(`attack1`, -1);
			}
			else if(dir == DIRECTION.RIGHT)
			{
				entity.mc.scaleX = 1;
				entity.mc.startPlay(`attack2`, -1);
			}
			else if(dir == DIRECTION.RIGHT_DOWN)
			{
				entity.mc.scaleX = 1;
				entity.mc.startPlay(`attack3`, -1);
			}
			else if(dir == DIRECTION.DOWN)
			{
				entity.mc.scaleX = 1;
				entity.mc.startPlay(`attack4`, -1);
			}

			else if(dir == DIRECTION.LEFT_DOWN)
			{
				entity.mc.scaleX = -1;
				entity.mc.startPlay(`attack3`, -1);
			}
			else if(dir == DIRECTION.LEFT)
			{
				entity.mc.scaleX = -1;
				entity.mc.startPlay(`attack2`, -1);
			}
			else if(dir == DIRECTION.LEFT_UP)
			{
				entity.mc.scaleX = -1;
				entity.mc.startPlay(`attack1`, -1);
			}
		}
	}
}