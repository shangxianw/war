module war
{
	export class WarPanelData extends ViewData
	{
		public score:number;
		protected init()
		{
			this.resGroup = [];
			this.layer = LayerManager.Ins().panel;
		}

		protected destroy()
		{
			
		}
	}

	export class WarPanel extends ViewBase
	{	
		private touchGroup:eui.Group;
		public info:WarPanelData;
		private addEntity:eui.Button
		private addSpeed:eui.Button;
		private rmSpeed:eui.Button;
		public constructor()
		{
			super();
			this.skinName = "WarPanelSkin";
		}

		protected init()
		{
			
		}

		protected destroy()
		{
			this.touchGroup.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnTouchGroupTap, this)
			this.addEntity.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnAddTap, this)
			this.addSpeed.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnAddSpeed, this)
			this.rmSpeed.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnRmSpeed, this)
		}

		public open()
		{
			WarDataMgr.Ins().startWar();
			this.initMap();
			this.addEntity.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnAddTap, this)
			this.addSpeed.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnAddSpeed, this)
			this.rmSpeed.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnRmSpeed, this)
		}

		private initMap()
		{
			// 初始化地图
			let map = new eui.Image()
			map.source = "map_1001_jpg"
			map.horizontalCenter = 0
			map.verticalCenter = 0
			map.scaleX = map.scaleY = 2
			LayerManager.Ins().war.map.addChild(map)
			egret.Tween.get(map)
			.wait(100)
			.to({
				scaleX:1,
				scaleY:1
			}, 500)
			.call(()=>{
				DrawUtils.DrawMapGrid(WarDataMgr.Ins().Ncols, WarDataMgr.Ins().Nrows)
			})

			this.touchGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnTouchGroupTap, this)
		}

		private OnTouchGroupTap(e:egret.TouchEvent)
		{
			WarFactory.CreateHero(10010, e.localX, e.localY)
		}

		private heroId:number;
		private OnAddTap(e:egret.TouchEvent)
		{
			// WarFactory.CreateHero(10010, e.localX, e.localY)
			let heroId = 10010
			let entity = new HeroEntity()
			this.heroId = entity.hasCode
			let posCom = new PosCom()
			posCom.x = 640
			posCom.y = 360
			entity.setComponent(posCom)

			let renderCom = new RenderCom()
			let render = new HeroRender()
			render.initData(heroId)
			render.x = posCom.x
			render.y = posCom.y
			renderCom.setRender(render)
			entity.setComponent(renderCom)

			WarDataMgr.Ins().addEntity(entity)
			LayerManager.Ins().war.body.addChild(render)
		}

		private OnAddSpeed()
		{
			let entity = WarDataMgr.Ins().entityMap.get(this.heroId)
			let speedCom = new SpeedCom()
			speedCom.setData(0.06, 90)
			entity.setComponent(speedCom)
		}

		private OnRmSpeed()
		{
			let entity = WarDataMgr.Ins().entityMap.get(this.heroId)
			entity.removeComponent(Component.Speed)
		}
	}
}


