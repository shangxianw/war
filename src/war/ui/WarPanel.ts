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
		}

		protected destroy()
		{
			this.testGrid.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnGridTap, this);
		}

		public initData(info:WarPanelData)
		{
			this.drawGrid();
		}

		// ---------------------------------------------------------------------- test
		private gridShape:egret.Shape;
		private testGrid:eui.Group;
		private drawGrid()
		{
			this.gridShape = new egret.Shape();
			this.gridShape.graphics.lineStyle(1, 0xff0000);
			let space = 40;
			let rows = 13;
			let cols = 20;
			this.gridShape.x = 100;
			this.gridShape.y = 240;
			for(let i=0, len = rows; i<len; i++)
			{
				for(let j=0, len2 = cols; j<len2; j++)
				{
					this.gridShape.graphics.drawRect(space*i, space*j, space, space);
				}
			}
			this.gridShape.graphics.endFill();
			this.addChild(this.gridShape);
			this.testGrid.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnGridTap, this);
		}

		private tapShape:egret.Shape;
		private OnGridTap(e:egret.TouchEvent)
		{
			let w = this.testGrid.width;
			let h = this.testGrid.height;
			let space = 40;
			
			let x = Math.floor(e.localX / space);
			let y = Math.floor(e.localY / space);

			if(this.tapShape == null)
			{
				this.tapShape = new egret.Shape();
				this.tapShape.x = 100;
				this.tapShape.y = 240;
				this.addChild(this.tapShape);
			}
			this.tapShape.graphics.clear();
			this.tapShape.graphics.beginFill(0xff0000);
			
			let path = WarDataMgr.Ins().findPath([0, 0], [x, y]);
			for(let node of path)
			{
				this.tapShape.graphics.drawRect(space*node.x, space*node.y, space, space);
			}
			// console.log(x, y)

			this.tapShape.graphics.endFill();
			console.log(path)

			// 创建英雄
			let hero:HeroEntity = PoolManager.Ins().pop(HeroEntity);
			hero.x = 100 + space*x;
			hero.y = 240 + space*y;
			this.addChild(hero);
			WarDataMgr.Ins().addEntity(hero);
		}
	}
}