module war
{
	export class GravitySystem extends SystemBase
	{
		protected init()
		{
			this.sysType = System.Demo;
		}

		protected destroy()
		{

		}
		
		public update(entity:EntityBase, deltaTime:number)
		{
			if(entity == null)
				return;
			
			let speedCom = entity.getComponent(Component.Speed) as SpeedCom;
			let gravityCom = entity.getComponent(Component.Gravity) as GravityCom;
			if(speedCom == null || gravityCom == null)
				return;
			
			speedCom.setSpeedY(speedCom.speedY + gravityCom.g*deltaTime);
		}
	}
}