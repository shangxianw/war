module war
{
	export class MoveSystem extends SystemBase
	{
		protected init()
		{
			this.sysType = System.Move;
		}

		protected destroy()
		{

		}
		
		public update(entity:EntityBase, deltaTime:number)
		{
			if(entity == null)
				return;
			
			let speedCom = entity.getComponent(Component.Speed) as SpeedCom;
			let posCom = entity.getComponent(Component.Pos) as PosCom;
			if(speedCom == null || posCom == null)
				return;
			
			posCom.x += speedCom.speedX * deltaTime;
			posCom.y += speedCom.speedY * deltaTime;
		}
	}
}