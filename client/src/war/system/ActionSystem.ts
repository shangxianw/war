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
				
				// 当有路径时，就执行跑的动作
				let pCom:PathCom = entity.getCom(COMPONENT.PATH);
				if(pCom != null)
				{
					let sCom:SpeedCom = entity.getCom(COMPONENT.SPEED);
					if(sCom != null)
					{
						let currTar:astar.NodeItem = pCom.getCurr();
						if(currTar != null)
						{
							let aCom:ActionCom = entity.getCom(COMPONENT.ACTION);
							let localX = warData.grid.startX + warData.grid.space * currTar.x;
							let localY = warData.grid.startY + warData.grid.space * currTar.y;
							if(entity.x == localX && entity.y == localY)
								pCom.toNext();
							else if(entity.x < localX && entity.y == localY) 
							{
								aCom.setDir(DIRECTION.RIGHT);
								this.setRun(entity, DIRECTION.RIGHT);
							}
							else if(entity.x > localX && entity.y == localY)
							{
								aCom.setDir(DIRECTION.LEFT);
								this.setRun(entity, DIRECTION.LEFT);
							}
							else if(entity.x == localX && entity.y < localY)
							{
								aCom.setDir(DIRECTION.DOWN);
								this.setRun(entity, DIRECTION.DOWN);
							}
							else if(entity.x == localX && entity.y > localY)
							{
								aCom.setDir(DIRECTION.UP);
								this.setRun(entity, DIRECTION.UP);
							}
							else if(entity.x < localX && entity.y < localY)
							{
								aCom.setDir(DIRECTION.DOWN);
								this.setRun(entity, DIRECTION.RIGHT_DOWN);
							}
							else if(entity.x < localX && entity.y > localY)
							{
								aCom.setDir(DIRECTION.UP);
								this.setRun(entity, DIRECTION.RIGHT_UP);
							}
							else if(entity.x > localX && entity.y < localY)
							{
								aCom.setDir(DIRECTION.DOWN);
								this.setRun(entity, DIRECTION.LEFT_DOWN);
							}
							else if(entity.x > localX && entity.y > localY)
							{
								aCom.setDir(DIRECTION.UP);
								this.setRun(entity, DIRECTION.LEFT_UP);
							}
						}
						else
						{
							this.setStand(entity, 3);
							entity.removeCom(COMPONENT.PATH);
							entity.removeCom(COMPONENT.SPEED);
						}
					}
					else
					{

					}
				}
				else
				{

				}
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

		private setRun(entity:EntityBase, dir:number)
		{
			if(dir == DIRECTION.UP)
			{
				entity.mc.scaleX = 1;
				entity.mc.startPlay(`run0`, -1);
			}
			else if(dir == DIRECTION.RIGHT_UP)
			{
				entity.mc.scaleX = 1;
				entity.mc.startPlay(`run1`, -1);
			}
			else if(dir == DIRECTION.RIGHT)
			{
				entity.mc.scaleX = 1;
				entity.mc.startPlay(`run2`, -1);
			}
			else if(dir == DIRECTION.RIGHT_DOWN)
			{
				entity.mc.scaleX = 1;
				entity.mc.startPlay(`run3`, -1);
			}
			else if(dir == DIRECTION.DOWN)
			{
				entity.mc.scaleX = 1;
				entity.mc.startPlay(`run4`, -1);
			}

			else if(dir == DIRECTION.LEFT_DOWN)
			{
				entity.mc.scaleX = -1;
				entity.mc.startPlay(`run3`, -1);
			}
			else if(dir == DIRECTION.LEFT)
			{
				entity.mc.scaleX = -1;
				entity.mc.startPlay(`run2`, -1);
			}
			else if(dir == DIRECTION.LEFT_UP)
			{
				entity.mc.scaleX = -1;
				entity.mc.startPlay(`run1`, -1);
			}
		}
	}
}