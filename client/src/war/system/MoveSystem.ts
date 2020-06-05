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

		public update(entity:EntityBase, deltaTime:number)
		{
			let sCom:SpeedCom = entity.getCom(COMPONENT.SPEED);
			entity.x += sCom.speedX;
			entity.y += sCom.speedY;
		}
	}
}