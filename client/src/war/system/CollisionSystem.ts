module war
{
	export class CollisionSystem extends SystemBase
	{
		protected init()
		{
			this.sysType = System.Collision;
		}

		protected destroy()
		{

		}
		
		public update(entity:EntityBase, dt:number)
		{
			if(entity == null)
				return;
			
			// 暂不实现刚体
			// let posCom = entity.getComponent(Component.Pos) as PosCom;
			// let collCom = entity.getComponent(Component.Collision) as CollisionCom;
			// if(posCom == null || collCom == null)
			// 	return;
			
			// let array:EntityBase[] = DataUtils.CopyArray(WarDataMgr.Ins().entityMap.values())
			// for(let entity2 of array)
			// {
			// 	if(entity2 == null)
			// 		continue
				
			// 	if(entity.hasCode == entity2.hasCode) // 自己
			// 		continue
				
			// 	let collCom2 = entity2.getComponent(Component.Collision) as CollisionCom
			// 	if(collCom2 == null) // 当二者都是刚体时才
			// 		continue
			// }
		}
	}
}