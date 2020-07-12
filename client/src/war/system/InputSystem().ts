module war
{
	export class InputSystem extends SystemBase
	{
		protected init()
		{
			this.sysType = System.Input;
		}

		protected destroy()
		{

		}
		
		public update(entity:EntityBase, deltaTime:number)
		{
			if(entity == null)
				return;
			
			let ctrlCom = entity.getComponent(Component.Ctrl) as CtrlCom;
			let speedCom = entity.getComponent(Component.Speed) as SpeedCom;
			if(ctrlCom == null || speedCom == null)
				return;
			
			let speedX = WarDataMgr.Ins().endX - WarDataMgr.Ins().beginX;
			if(speedX > 0)
				speedX = WarDataMgr.Ins().moveXSpeed;
			else if(speedX < 0)
				speedX = -WarDataMgr.Ins().moveXSpeed;
			else
				speedX = 0;
			speedCom.setSpeedX(speedX);
		}
	}
}