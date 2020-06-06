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

		public initData(info:WarPanelData)
		{
			DrawUtils.DrawGrid(this);
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
			let space = WarDataMgr.Ins().grid.space;
			let endX = Math.floor(Math.random() * WarDataMgr.Ins().grid.numCols);
			let endY = Math.floor(Math.random() * WarDataMgr.Ins().grid.numRows);
			
			let x = Math.floor(e.localX / space);
			let y = Math.floor(e.localY / space);
			
			
			// 创建英雄
			let hero:HeroEntity = PoolManager.Ins().pop(HeroEntity);
			hero.x = WarDataMgr.Ins().grid.startX + space*x; // e.stageX//
			hero.y = WarDataMgr.Ins().grid.startY + space*y; // e.stageY;
			let sCom:SpeedCom = PoolManager.Ins().pop(SpeedCom);
			sCom.speed = 0.8;
			hero.setCom(sCom);
			let dirCom:ActionCom = hero.getCom(COMPONENT.ACTION);
			dirCom.setActionAndDir(ACTION.RUN , Math.ceil(Math.random()*8));

			let pathCom:PathCom = PoolManager.Ins().pop(PathCom);
			let path = WarDataMgr.Ins().findPath([x, y], [endX, endY]);
			pathCom.setPath(path);
			hero.setCom(pathCom)

			this.addChild(hero);
			WarDataMgr.Ins().addEntity(hero);
			DrawUtils.DrawHeroAnchor(hero);
			DrawUtils.DrawHeroId(hero);
			DrawUtils.DrawPath(hero, this);
		}
	}
}
