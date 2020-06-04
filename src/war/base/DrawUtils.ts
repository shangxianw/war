module war
{
	export class DrawUtils
	{
		public static isTest:boolean = true;

		public static DrawGrid(group:eui.Component)
		{
			if(DrawUtils.isTest == false)
				return;
			let space = WarDataMgr.Ins().grid.space;
			let rows = WarDataMgr.Ins().grid.numCols;
			let cols = WarDataMgr.Ins().grid.numRows;

			let shape = new egret.Shape();
			shape.graphics.lineStyle(1, 0xff0000);
			shape.x = WarDataMgr.Ins().grid.startX;
			shape.y = WarDataMgr.Ins().grid.startY;
			for(let i=0, len = rows; i<len; i++)
			{
				for(let j=0, len2 = cols; j<len2; j++)
				{
					shape.graphics.drawRect(space*i, space*j, space, space);
				}
			}
			shape.graphics.endFill();
			group.addChild(shape);
		}

		public static DrawPath(start:number[], end:number[], testShap:egret.Shape, group:eui.Component)
		{
			if(DrawUtils.isTest == false)
				return;
			let space = WarDataMgr.Ins().grid.space;
			if(testShap == null)
			{
				testShap = new egret.Shape();
				testShap.x = WarDataMgr.Ins().grid.startX;
				testShap.y = WarDataMgr.Ins().grid.startY;
				group.addChild(testShap);
			}
			testShap.graphics.clear();
			testShap.graphics.beginFill(0xff0000);
			let path = WarDataMgr.Ins().findPath([start[0], start[1]], [end[0], end[1]]);
			for(let node of path)
			{
				testShap.graphics.drawRect(space*node.x, space*node.y, space, space);
			}
			testShap.graphics.endFill();
			return testShap;
		}

		public static DrawHeroAnchor(hero:EntityBase)
		{
			if(DrawUtils.isTest == false)
				return;
			let shape = new egret.Shape();
			shape.graphics.beginFill(0xffff00);
			shape.graphics.lineStyle(1, 0x000000);
			shape.graphics.drawCircle(0, 0, 4);
			shape.graphics.endFill();
			hero.addChild(shape);
		}
	}
}