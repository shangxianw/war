module war
{
	/**
	 * 移动系统
	 * 同时拥有位置和速度，便认为该实体可以移动
	 * 负责刷新实体的位置
	 */
	export class MoveSystem extends SystemBase
	{
		protected init()
		{
			this.systemId = SYSTEM.MOVE;
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

				let sCom:SpeedCom = entity.getCom(COMPONENT.SPEED); // 连速度都没有，就不用移动了(除非闪现？到后面再说吧，反正刷新实体位置的操作就在这了)
				if(sCom == null)
					continue;
				
				// 当有路径组件时，就判断当前位置与当前路径阶段的关系。
				// 当实体到达阶段时，不进行下一步操作。(其实放这里也可以做)
				let pCom:PathCom = entity.getCom(COMPONENT.PATH);
				if(pCom != null)
				{
					let currTar:astar.NodeItem = pCom.getCurr();
					if(currTar != null)
					{
						let localX = warData.grid.startX + warData.grid.space * currTar.x;
						let localY = warData.grid.startY + warData.grid.space * currTar.y;

						let speedXY = MathUtils.CalcSpeedXY(sCom.speed, entity.x, entity.y, localX, localY);
						let speedX = speedXY[0],
							speedY = speedXY[1];
						entity.x = Number((entity.x + speedX).toFixed(2));
						entity.y = Number((entity.y + speedY).toFixed(2));

						if(
							(speedX < 0 && entity.x < localX) ||
							(speedX > 0 && entity.x > localX) ||
							(speedY < 0 && entity.y < localY) ||
							(speedY > 0 && entity.y > localY)
						)
						{
							entity.x = localX;
							entity.y = localY;
						}

						DrawUtils.DrawPath(entity);
					}
				}
			}
		}
	}
}