module war
{
	/**
	 * 渲染系统
	 */
	export class RenderSystem extends SystemBase
	{
		protected init()
		{
			this.systemId = System.Render;
		}

		protected destroy()
		{

		}

		public update(entity:EntityBase, deltaTime:number)
		{
			if(entity == null)
				return;

			if(entity.entityType == Entity.Queen)
			{
				// 暂时不处理，是个bug，会导致不能移动
				// this.showRenderByQueen(entity, entity.action);
			}
			else
			{
				if(entity.actionCom.action == Action.Stand)
				{
					this.showRender(entity, "stand");
				}
				else if(entity.actionCom.action == Action.Run)
				{
					this.showRender(entity, "run");
				}
				else if(entity.actionCom.action == Action.Attack)
				{
					this.showRender(entity, "attack");
				}
			}
		}

		private showRender(entity:EntityBase, action:string)
		{
			let dir = entity.dirCom.direction;
			if(dir == Direction.Right) // 右
			{
				entity.mc.scaleX = 1;
				entity.mc.play(`${action}2`, -1);
			}
			else if(dir == Direction.RightDown) // 右下
			{
				entity.mc.scaleX = 1;
				entity.mc.play(`${action}3`, -1);
			}
			else if(dir == Direction.Down)
			{
				entity.mc.scaleX = 1;
				entity.mc.play(`${action}4`, -1);
			}
			else if(dir == Direction.LeftDown)
			{
				entity.mc.scaleX = -1;
				entity.mc.play(`${action}3`, -1);
			}
			else if(dir == Direction.Left)
			{
				entity.mc.scaleX = -1;
				entity.mc.play(`${action}2`, -1);
			}
			else if(dir == Direction.LeftUp)
			{
				entity.mc.scaleX = -1;
				entity.mc.play(`${action}1`, -1);
			}
			else if(dir == Direction.Up)
			{
				entity.mc.scaleX = -1;
				entity.mc.play(`${action}0`, -1);
			}
			else if(dir == Direction.RightUp)
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