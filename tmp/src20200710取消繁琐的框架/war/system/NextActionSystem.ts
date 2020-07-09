module war
{
	/**
	 * 下一步操作系统
	 * 当实体做完一个动作之后，就会停在原地，此时应该分配他做下一个操作
	 */
	export class NextActionSystem extends SystemBase
	{
		protected init()
		{
			this.systemId = System.NextAction;
		}

		protected destroy()
		{

		}

		public update(entity:EntityBase, deltaTime:number)
		{
			if(entity == null)
				return;

			if(entity.actionCom.action != Action.None)
				return;
			
			let pathC:PathCom = entity.getCom(Component.Path) as PathCom;
			if(pathC != null)
			{
				entity.actionCom.setAction(Action.Run);
				entity.speedCom.setSpeed(40);
				return;
			}
			else if(entity.entityType == Entity.Hero) // 如果英雄没路径了，就给他新的路径，暂为写死
			{
				let pathc:PathCom = WarPool.Ins().pop(PathCom) as PathCom;
				let x = WarUtils.ToGridX(entity.x);
				let y = WarUtils.ToGridY(entity.y);
				let pos = WarDataMgr.Ins().getEnemyTarget(entity);
				let path = WarDataMgr.Ins().findPath(x, y, pos[0], pos[1]);
				pathc.setPath(path);
				entity.setCom(pathc);
			}

			if(entity.entityType == Entity.King || entity.entityType == Entity.Queen)
			{
				entity.actionCom.setAction(Action.Stand);
			}
		}
	}
}