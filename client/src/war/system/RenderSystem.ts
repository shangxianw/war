module war
{
	/**
	 * 渲染系统
	 */
	export class RenderSystem extends SystemBase
	{
		protected init()
		{
			this.systemId = SYSTEM.RENDER;
		}

		protected destroy()
		{

		}

		public update(entity:EntityBase, deltaTime:number)
		{
			if(entity == null)
				return;

			if(entity.entityType == ENTITY.QUEEN)
			{
				// 暂时不处理，是个bug，会导致不能移动
				// this.showRenderByQueen(entity, entity.action);
			}
			else
			{
				if(entity.action == ACTION.STAND)
				{
					this.showRender(entity, "stand");
				}
				else if(entity.action == ACTION.RUN)
				{
					this.showRender(entity, "run");
				}
				else if(entity.action == ACTION.ATTACK)
				{
					this.showRender(entity, "attack");
				}
			}
		}

		private showRender(entity:EntityBase, action:string)
		{
			let dir = entity.dir;
			if(dir == DIRECTION.RIGHT) // 右
			{
				entity.mc.scaleX = 1;
				entity.mc.play(`${action}2`, -1);
			}
			else if(dir == DIRECTION.RIGHT_DOWN) // 右下
			{
				entity.mc.scaleX = 1;
				entity.mc.play(`${action}3`, -1);
			}
			else if(dir == DIRECTION.DOWN)
			{
				entity.mc.scaleX = 1;
				entity.mc.play(`${action}4`, -1);
			}
			else if(dir == DIRECTION.LEFT_DOWN)
			{
				entity.mc.scaleX = -1;
				entity.mc.play(`${action}3`, -1);
			}
			else if(dir == DIRECTION.LEFT)
			{
				entity.mc.scaleX = -1;
				entity.mc.play(`${action}2`, -1);
			}
			else if(dir == DIRECTION.LEFT_UP)
			{
				entity.mc.scaleX = -1;
				entity.mc.play(`${action}1`, -1);
			}
			else if(dir == DIRECTION.UP)
			{
				entity.mc.scaleX = -1;
				entity.mc.play(`${action}0`, -1);
			}
			else if(dir == DIRECTION.RIGHT_UP)
			{
				entity.mc.scaleX = 1;
				entity.mc.play(`${action}1`, -1);
			}
		}

		private showRenderByQueen(entity:EntityBase, action:number)
		{
			let actionName = Utils.GetActionName(action);
			entity.mc.play(`${action}`, -1);
		}
	}
}