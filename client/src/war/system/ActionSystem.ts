module war
{
	export class ActionSystem extends SystemBase
	{
		protected init()
		{
			this.systemId = SYSTEM.ACTION;
		}

		protected destroy()
		{

		}

		public update(entity:EntityBase, deltaTime:number)
		{
			let dirCom:ActionCom = entity.getCom(COMPONENT.ACTION);
			let action = dirCom.getAction();
			let dir = dirCom.getDir();
			if(dirCom.hasChanged == true)
			{
				dirCom.hasChanged = false;
				if(action == ACTION.RUN)
				{
					this.setRun(entity, dir);
				}
				else if(action == ACTION.STAND)
				{
					this.setStand(entity, dir);
				}
				else if(action == ACTION.ATTACK)
				{
					this.setAttack(entity, dir);
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