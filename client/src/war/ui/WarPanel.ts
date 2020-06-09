module war
{
	export class WarPanelData extends DataBase
	{
		protected init()
		{

		}

		protected destroy()
		{

		}
	}

	export class WarPanel extends ViewBase
	{
		private testGrid:eui.Group;

		public PanelId:number;
		public Layer:eui.Component;

		public drawGroup:eui.Group;
		private entityGroup:eui.Group;
		public constructor()
		{
			super("WarPanelSkin");
		}

		protected init()
		{
			this.PanelId = ViewIdConst.WarPanel;
			this.Layer = LayerManager.Ins().War;
			this.addEventListener(egret.Event.ENTER_FRAME, this.OnUpdate, this);
			// WarDataMgr.Ins().startWar();
			this.addEventListener(egret.Event.ENTER_FRAME, ()=>{
				WarDataMgr.Ins().update();
			}, this);
		}

		protected destroy()
		{
			this.testGrid.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnGridTap, this);
			this.removeEventListener(egret.Event.ENTER_FRAME, this.OnUpdate, this);
		}

		private queen1Id:number;
		public initData(info:WarPanelData)
		{
			DrawUtils.DrawGrid(this.drawGroup);
			// let queen1 = WarUtils.CreateEntity(ENTITY.QUEEN) as QueenEntity;
			// queen1.x = WarUtils.ToLocalX(7);
			// queen1.y = WarUtils.ToLocalY(3);
			// this.entityGroup.addChild(queen1);
			// WarDataMgr.Ins().entityMap.set(queen1.id, queen1);

			// let queen2 = WarUtils.CreateEntity(ENTITY.QUEEN) as QueenEntity;
			// queen2.x = WarUtils.ToLocalX(7);
			// queen2.y = WarUtils.ToLocalY(12);
			// this.entityGroup.addChild(queen2);
			// WarDataMgr.Ins().entityMap.set(queen2.id, queen2);
			// let space = WarDataMgr.Ins().grid.space;
			// let localX = WarDataMgr.Ins().grid.startX + space * Math.floor(WarDataMgr.Ins().grid.numCols/4);
			// let localY = WarDataMgr.Ins().grid.startY + space * Math.floor(WarDataMgr.Ins().grid.numRows/4);
			// let queen1:QueenEntity = new QueenEntity();
			// (queen1.getCom(COMPONENT.ACTION) as ActionCom).setDir(DIRECTION.DOWN);
			// queen1.x = localX;
			// queen1.y = localY;
			// this.entityGroup.addChild(queen1);
			// this.queen1Id = queen1.id;

			// let queen2:QueenEntity = new QueenEntity();
			// localX = WarDataMgr.Ins().grid.startX + space * Math.floor(WarDataMgr.Ins().grid.numCols - WarDataMgr.Ins().grid.numCols/4);
			// localY = WarDataMgr.Ins().grid.startY + space * Math.floor(WarDataMgr.Ins().grid.numRows/4);
			// queen2.x = localX;
			// queen2.y = localY;
			// (queen2.getCom(COMPONENT.ACTION) as ActionCom).setDir(DIRECTION.DOWN);

			// this.entityGroup.addChild(queen2);
			// WarDataMgr.Ins().addEntity(queen1);
			// WarDataMgr.Ins().addEntity(queen2);

			this.testGrid.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnGridTap, this);
		}

		public OnUpdate(e:egret.Event)
		{
			WarDataMgr.Ins().update();
		}

		// ---------------------------------------------------------------------- test
		private OnGridTap(e:egret.TouchEvent)
		{
			let w = this.testGrid.width;
			let h = this.testGrid.height;
			let space = WarDataMgr.Ins().space;
			let endX = 3;
			let endY = 7;
			
			let x = Math.floor(Math.random()*35)//Math.floor(e.localX / space);
			let y = Math.floor(Math.random()*15)//Math.floor(e.localY / space);
			
			
			// 创建英雄
			let hero:HeroEntity = new HeroEntity//PoolManager.Ins().pop(HeroEntity);
			hero.x = WarUtils.ToLocalX(x);
			hero.y = WarUtils.ToLocalY(y);

			let sCom:SpeedCom = PoolManager.Ins().pop(SpeedCom);
			sCom.speed = Math.random();
			sCom.angle = 0;
			hero.setCom(sCom);

			let pathCom:PathCom = PoolManager.Ins().pop(PathCom);
			let path = WarDataMgr.Ins().findPath(x, y, endX, endY);
			pathCom.setPath(path);
			hero.setCom(pathCom);

			// let aCom:AttackCom = PoolManager.Ins().pop(AttackCom);
			// aCom.setRange(50);
			// hero.setCom(aCom);
			// DrawUtils.DrawAttackRange(hero);

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

			this.entityGroup.addChild(hero);
			WarDataMgr.Ins().addEntity(hero);
			// DrawUtils.DrawPath(hero, this.drawGroup);
		}
	}
}
