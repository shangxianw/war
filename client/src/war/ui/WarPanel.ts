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
		
		private tapShape:egret.Shape;
		private OnGridTap(e:egret.TouchEvent)
		{
			let w = this.testGrid.width;
			let h = this.testGrid.height;
			let space = WarDataMgr.Ins().grid.space;
			
			let x = Math.floor(e.localX / space);
			let y = Math.floor(e.localY / space);
			if(this.tapShape != null)
				this.tapShape.graphics.clear();
			this.tapShape = DrawUtils.DrawPath([x, y], [0,0], this.tapShape, this);
			
			// 创建英雄
			let hero:HeroEntity = PoolManager.Ins().pop(HeroEntity);
			hero.x = WarDataMgr.Ins().grid.startX + space*x;
			hero.y = WarDataMgr.Ins().grid.startY + space*y;
			let sCom:SpeedCom = PoolManager.Ins().pop(SpeedCom);
			sCom.setSpeed(0, -0.4);
			hero.setCom(sCom);
			this.addChild(hero);
			WarDataMgr.Ins().addEntity(hero);
			DrawUtils.DrawHeroAnchor(hero);
		}
	}
}