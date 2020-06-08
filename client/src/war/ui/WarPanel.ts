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

		private drawGroup:eui.Group;
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
			
			let x = Math.floor(e.localX / space);
			let y = Math.floor(e.localY / space);
			
			
			// 创建英雄
			let hero:HeroEntity = PoolManager.Ins().pop(HeroEntity);
			hero.x = WarUtils.ToRealX(x);
			hero.y = WarUtils.ToRealY(y);

			let sCom:SpeedCom = PoolManager.Ins().pop(SpeedCom);
			sCom.speed = 0.8;
			sCom.angle = 0;
			hero.setCom(sCom);

			let pathCom:PathCom = PoolManager.Ins().pop(PathCom);
			let path = WarDataMgr.Ins().findPath(x, y, endX, endY);
			pathCom.setPath(path);
			hero.setCom(pathCom);

			this.entityGroup.addChild(hero);
			WarDataMgr.Ins().addEntity(hero);
			DrawUtils.DrawPath(hero, this.drawGroup);
		}
	}
}
