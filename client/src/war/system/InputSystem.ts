module war
{
	export class InputSystem extends SystemBase
	{
		protected init()
		{
			this.systemId = SYSTEM.MOVE;
		}

		protected destroy()
		{

		}

		// ---------------------------------------------------------------------- 创建英雄实体
		public createHero(x:number, y:number)
		{
			let hero:HeroEntity = PoolManager.Ins().pop(HeroEntity);
			hero.x = WarUtils.ToLocalX(x);
			hero.y = WarUtils.ToLocalY(y);

			let sCom:SpeedCom = PoolManager.Ins().pop(SpeedCom);
			sCom.speed = 60;
			sCom.angle = 0;
			hero.setCom(sCom);

			let pCom:PathCom = PoolManager.Ins().pop(PathCom);
			let endX = Math.floor(Math.random() * WarDataMgr.Ins().grid.numCols);
			let endY = Math.floor(Math.random() * WarDataMgr.Ins().grid.numRows);
			let newPath = WarDataMgr.Ins().findPath(x, y, endX, endY);
			pCom.setPath(newPath);
			hero.setCom(pCom);
			return hero;
		}
	}
}