module war
{
	export class MoveSystem extends SystemBase
	{
		protected init()
		{

		}

		protected destroy()
		{

		}

		public update()
		{
			let entityMap = WarDataMgr.Ins().entityMap;
			let entity:EntityBase;
			for(let key in entityMap.map)
			{
				entity = entityMap.get(Number(key));
				if(entity == null)
					continue;
				
			}
		}
	}
}