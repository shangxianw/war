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
		}

		public open()
		{
			this.initMap();
			WarDataMgr.Ins().startWar();
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
	}
}


