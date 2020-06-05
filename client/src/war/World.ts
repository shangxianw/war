module war
{
	export class World extends DataBase
	{
		protected init()
		{

		}

		protected destroy()
		{

		}

		public update(deltaTime:number)
		{
			let warData = WarDataMgr.Ins();
			let entity:EntityBase;
			for(let key in warData.entityMap.map)
			{
				entity = warData.entityMap.get(Number(key));
				if(entity == null)
					continue;
				// 动作
				if(entity.hasCom(COMPONENT.ACTION) == true)
				{
					warData.actionSystem.update(entity, deltaTime);
				}

				// 移动
				if(entity.hasCom(COMPONENT.SPEED) == true)
				{
					warData.moveSystem.update(entity, deltaTime);
				}
			}
		}
	}
}