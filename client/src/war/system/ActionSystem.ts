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

		public update(entity:EntityBase, deltaTime:number)
		{
			if(entity == null)
				return;

			let aCom = entity.getCom(COMPONENT.ACTION) as ActionCom;
			if(aCom == null)
				return;

			let sCom = entity.getCom(COMPONENT.SPEED) as SpeedCom;
			if(sCom == null)
				return;
			
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

		private setStand(entity:EntityBase)
		{
			let aCom = entity.getCom(COMPONENT.ACTION) as ActionCom;
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
			let sCom = entity.getCom(COMPONENT.SPEED) as SpeedCom;
			let aCom = entity.getCom(COMPONENT.ACTION) as ActionCom;
			let angle = sCom.angle;
			let warData = WarDataMgr.Ins();
			
			if(angle > ANGLE.UP[0] && angle <= ANGLE.UP[1])
			{
				aCom.setDir(DIRECTION.UP);
				entity.mc.scaleX = 1;
				entity.mc.startPlay(`run0`, -1);
			}
			else if(angle > ANGLE.RIGHT_UP[0] && angle <= ANGLE.RIGHT_UP[1])
			{
				aCom.setDir(DIRECTION.RIGHT_UP);
				entity.mc.scaleX = 1;
				entity.mc.startPlay(`run1`, -1);
			}
			else if(angle > ANGLE.RIGHT[0] || angle <= ANGLE.RIGHT[1])
			{
				aCom.setDir(DIRECTION.RIGHT);
				entity.mc.scaleX = 1;
				entity.mc.startPlay(`run2`, -1);
			}
			else if(angle > ANGLE.RIGHT_DOWN[0] && angle <= ANGLE.RIGHT_DOWN[1])
			{
				aCom.setDir(DIRECTION.RIGHT_DOWN);
				entity.mc.scaleX = 1;
				entity.mc.startPlay(`run3`, -1);
			}
			else if(angle > ANGLE.DOWN[0] && angle <= ANGLE.DOWN[1])
			{
				aCom.setDir(DIRECTION.DOWN);
				entity.mc.scaleX = 1;
				entity.mc.startPlay(`run4`, -1);
			}
			else if(angle > ANGLE.LEFT_DOWN[0] && angle <= ANGLE.LEFT_DOWN[1])
			{
				aCom.setDir(DIRECTION.LEFT_DOWN);
				entity.mc.scaleX = -1;
				entity.mc.startPlay(`run3`, -1);
			}
			else if(angle > ANGLE.LEFT[0] && angle <= ANGLE.LEFT[1])
			{
				aCom.setDir(DIRECTION.LEFT);
				entity.mc.scaleX = -1;
				entity.mc.startPlay(`run2`, -1);
			}
			else if(angle > ANGLE.LEFT_UP[0] && angle <= ANGLE.LEFT_UP[1])
			{
				aCom.setDir(DIRECTION.LEFT_UP);
				entity.mc.scaleX = -1;
				entity.mc.startPlay(`run1`, -1);
			}
		}

		private setAttack(entity:EntityBase)
		{
			let sCom = entity.getCom(COMPONENT.SPEED) as SpeedCom;
			let aCom = entity.getCom(COMPONENT.ACTION) as ActionCom;
			let angle = sCom.angle;
			let warData = WarDataMgr.Ins();
			
			if(angle > ANGLE.UP[0] && angle <= ANGLE.UP[1])
			{
				aCom.setDir(DIRECTION.UP);
				entity.mc.scaleX = 1;
				entity.mc.startPlay(`attack0`, -1);
			}
			else if(angle > ANGLE.RIGHT_UP[0] && angle <= ANGLE.RIGHT_UP[1])
			{
				aCom.setDir(DIRECTION.RIGHT_UP);
				entity.mc.scaleX = 1;
				entity.mc.startPlay(`attack1`, -1);
			}
			else if(angle > ANGLE.RIGHT[0] || angle <= ANGLE.RIGHT[1])
			{
				aCom.setDir(DIRECTION.RIGHT);
				entity.mc.scaleX = 1;
				entity.mc.startPlay(`attack2`, -1);
			}
			else if(angle > ANGLE.RIGHT_DOWN[0] && angle <= ANGLE.RIGHT_DOWN[1])
			{
				aCom.setDir(DIRECTION.RIGHT_DOWN);
				entity.mc.scaleX = 1;
				entity.mc.startPlay(`attack3`, -1);
			}
			else if(angle > ANGLE.DOWN[0] && angle <= ANGLE.DOWN[1])
			{
				aCom.setDir(DIRECTION.DOWN);
				entity.mc.scaleX = 1;
				entity.mc.startPlay(`attack4`, -1);
			}

			else if(angle > ANGLE.LEFT_DOWN[0] && angle <= ANGLE.LEFT_DOWN[1])
			{
				aCom.setDir(DIRECTION.LEFT_DOWN);
				entity.mc.scaleX = -1;
				entity.mc.startPlay(`attack3`, -1);
			}
			else if(angle > ANGLE.LEFT[0] && angle <= ANGLE.LEFT[1])
			{
				aCom.setDir(DIRECTION.LEFT);
				entity.mc.scaleX = -1;
				entity.mc.startPlay(`attack2`, -1);
			}
			else if(angle > ANGLE.LEFT_UP[0] && angle <= ANGLE.LEFT_UP[1])
			{
				aCom.setDir(DIRECTION.LEFT_UP);
				entity.mc.scaleX = -1;
				entity.mc.startPlay(`attack1`, -1);
			}
		}
	}
}