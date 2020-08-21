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
		
		public update(entity:EntityBase, dt:number)
		{
			if(entity == null)
				return;
			
			let posCom = entity.getComponent(Component.Pos) as PosCom;
			let speedCom = entity.getComponent(Component.Speed) as SpeedCom;
			if(posCom == null || speedCom == null)
				return;
			
			let speed = MathUtils.CalcLegSide(speedCom.speed, speedCom.angle) // 计算速度在xy轴上的分速度
			posCom.setAddPos(speed[0] * dt, speed[1] * dt)
		}
	}
}