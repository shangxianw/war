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
				
				// 当有路径又有速度时，就执行跑的动作
				let pCom:PathCom = entity.getCom(COMPONENT.PATH);
				let sCom:SpeedCom = entity.getCom(COMPONENT.SPEED);
				if(pCom != null && sCom != null)
				{
					let currTar:astar.NodeItem = pCom.getCurr();
					let aCom:ActionCom = entity.getCom(COMPONENT.ACTION);
					if(currTar != null)
					{
						let localX = warData.grid.startX + warData.grid.space * currTar.x;
						let localY = warData.grid.startY + warData.grid.space * currTar.y;
						this.setRun(entity, aCom.getDir(), localX, localY);
					}
					else
					{
						entity.removeCom(COMPONENT.PATH);
						entity.removeCom(COMPONENT.SPEED);
						aCom.setAction(ACTION.STAND);
					}
				}
				else
				{
					let aCom:ActionCom = entity.getCom(COMPONENT.ACTION);
					if(aCom.getAction() == ACTION.STAND)
					{
						this.setStand(entity, aCom.getDir());
					}
				}
			}
		}

		private setStand(entity:EntityBase, dir:number)
		{
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

		private setRun(entity:EntityBase, dir:number, localX:number, localY)
		{
			let pCom:PathCom = entity.getCom(COMPONENT.PATH);
			let sCom:SpeedCom = entity.getCom(COMPONENT.SPEED);
			let aCom:ActionCom = entity.getCom(COMPONENT.ACTION);
			if(entity.x == localX && entity.y == localY)
				pCom.toNext();
			else if(entity.x < localX && entity.y == localY) 
			{
				aCom.setDir(DIRECTION.RIGHT);
				entity.mc.scaleX = 1;
				entity.mc.startPlay(`run3`, -1);
			}
			else if(entity.x > localX && entity.y == localY)
			{
				aCom.setDir(DIRECTION.LEFT);
				entity.mc.scaleX = -1;
				entity.mc.startPlay(`run3`, -1);
			}
			else if(entity.x == localX && entity.y < localY)
			{
				aCom.setDir(DIRECTION.DOWN);
				entity.mc.scaleX = 1;
				entity.mc.startPlay(`run5`, -1);
			}
			else if(entity.x == localX && entity.y > localY)
			{
				aCom.setDir(DIRECTION.UP);
				entity.mc.scaleX = 1;
				entity.mc.startPlay(`run0`, -1);
			}
			else if(entity.x < localX && entity.y < localY)
			{
				aCom.setDir(DIRECTION.DOWN);
				entity.mc.scaleX = 1;
				entity.mc.startPlay(`run4`, -1);
			}
			else if(entity.x < localX && entity.y > localY)
			{
				aCom.setDir(DIRECTION.UP);
				entity.mc.scaleX = 1;
				entity.mc.startPlay(`run2`, -1);
			}
			else if(entity.x > localX && entity.y < localY)
			{
				aCom.setDir(DIRECTION.DOWN);
				entity.mc.scaleX = -1;
				entity.mc.startPlay(`run4`, -1);
			}
			else if(entity.x > localX && entity.y > localY)
			{
				aCom.setDir(DIRECTION.UP);
				entity.mc.scaleX = -1;
				entity.mc.startPlay(`run2`, -1);
			}
		}

		private setAttack(entity:EntityBase, dir:number)
		{
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