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

		public update(deltaTime:number)
		{
			let warData = WarDataMgr.Ins();
			while(warData.inputArray.length > 0)
			{
				let iCom = warData.inputArray.shift();
				if(iCom == null)
					continue;
				
				if(iCom.inputType == INPUT.CREATE_HERO)
					this.createHero(iCom);
				else if(iCom.inputType == INPUT.CREATE_QUEEN)
					this.createQueen(iCom);
				else if(iCom.inputType == INPUT.CREATE_KING)
					this.createKing(iCom);
			}
		}

		private createHero(inputCom:InputCom)
		{
			let hero:HeroEntity = PoolManager.Ins().pop(HeroEntity);
			hero.x = WarUtils.ToLocalX(inputCom.x1);
			hero.y = WarUtils.ToLocalY(inputCom.y1);

			let sCom:SpeedCom = PoolManager.Ins().pop(SpeedCom);
			sCom.speed = Math.random();
			sCom.angle = 0;
			hero.setCom(sCom);

			let pathCom:PathCom = PoolManager.Ins().pop(PathCom);
			let path = WarDataMgr.Ins().findPath(inputCom.x1, inputCom.y1, inputCom.x2, inputCom.y2);
			pathCom.setPath(path);
			hero.setCom(pathCom);

			let aCom:ActionCom = new ActionCom();
			aCom.setActionAndDir(ACTION.RUN, DIRECTION.DOWN);
			hero.setCom(aCom);

			let rCom:RigidCom = new RigidCom();
			rCom.radius = 20;
			hero.setCom(rCom);

			let cCom:CampCom = new CampCom();
			cCom.camp = Math.random() > 0.5 ? CAMP.WE : CAMP.ENEMY;
			hero.setCom(cCom);
			DrawUtils.DrawGrigd(hero);
			DrawUtils.DrawHeroAnchor(hero);

			inputCom.parent.addChild(hero);
			WarDataMgr.Ins().addEntity(hero);
		}

		private createQueen(inputCom:InputCom)
		{
			let hero:QueenEntity = PoolManager.Ins().pop(QueenEntity);
			hero.x = WarUtils.ToLocalX(inputCom.x1);
			hero.y = WarUtils.ToLocalY(inputCom.y1);

			let aCom:ActionCom = new ActionCom();
			aCom.setActionAndDir(ACTION.RUN, DIRECTION.DOWN);
			hero.setCom(aCom);

			let rCom:RigidCom = new RigidCom();
			rCom.radius = 20;
			hero.setCom(rCom);

			let cCom:CampCom = new CampCom();
			cCom.camp = Math.random() > 0.5 ? CAMP.WE : CAMP.ENEMY;
			hero.setCom(cCom);
			DrawUtils.DrawGrigd(hero);
			DrawUtils.DrawHeroAnchor(hero);

			inputCom.parent.addChild(hero);
			WarDataMgr.Ins().addEntity(hero);
		}

		private createKing(inputCom:InputCom)
		{
			let hero:QueenEntity = PoolManager.Ins().pop(QueenEntity);
			hero.x = WarUtils.ToLocalX(inputCom.x1);
			hero.y = WarUtils.ToLocalY(inputCom.y1);

			let aCom:ActionCom = new ActionCom();
			aCom.setActionAndDir(ACTION.RUN, DIRECTION.DOWN);
			hero.setCom(aCom);

			let rCom:RigidCom = new RigidCom();
			rCom.radius = 20;
			hero.setCom(rCom);

			let cCom:CampCom = new CampCom();
			cCom.camp = Math.random() > 0.5 ? CAMP.WE : CAMP.ENEMY;
			hero.setCom(cCom);
			DrawUtils.DrawGrigd(hero);
			DrawUtils.DrawHeroAnchor(hero);

			inputCom.parent.addChild(hero);
			WarDataMgr.Ins().addEntity(hero);
		}
	}
}