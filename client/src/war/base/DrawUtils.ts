module war
{
	export class DrawUtils
	{
		public static isTest:boolean = true;
		public static Destroy()
		{
			for(let key in this.pathMap.map)
			{
				let item:egret.Shape = this.pathMap.get(Number(key));
				item.parent != null && item.parent.removeChild(item);
				item = null;
			}
			this.pathMap.destroy();
		}

		public static DrawGrid(group:eui.Group)
		{
			if(DrawUtils.isTest == false)
				return;
			let space = WarDataMgr.Ins().grid.space;
			let rows = WarDataMgr.Ins().grid.numCols;
			let cols = WarDataMgr.Ins().grid.numRows;

			let shape = new egret.Shape();
			shape.graphics.lineStyle(1, 0x00ff00);
			shape.x = WarDataMgr.Ins().startX;
			shape.y = WarDataMgr.Ins().startY;
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

		public static pathMap:Hash<number, egret.Shape> = new Hash<number, egret.Shape>();
		public static DrawPath(entity:EntityBase, group:eui.Group = null)
		{
			if(DrawUtils.isTest == false)
				return;

			if(this.pathMap.has(entity.id) == false)
			{
				let testShap = new egret.Shape();
				testShap.x = WarDataMgr.Ins().startX;
				testShap.y = WarDataMgr.Ins().startY;
				group != null && group.addChild(testShap);
				this.pathMap.set(entity.id, testShap);
			}

			let testShap:egret.Shape = this.pathMap.get(entity.id);
			let space = WarDataMgr.Ins().grid.space;
			let pCom:PathCom = entity.getCom(COMPONENT.PATH);
			if(pCom != null)
			{
				testShap.graphics.clear();
				testShap.graphics.lineStyle(2, 0xff0000);
				testShap.graphics.moveTo(entity.x - WarDataMgr.Ins().startX, entity.y - WarDataMgr.Ins().startY);
				let path = pCom.getLeftPath();
				let index:number = 1;
				
				for(let i=1; i<path.length; i++)
				{
					let node = path[i];
					testShap.graphics.lineTo(space*node.x, space*node.y);
				}
				testShap.graphics.endFill();
			}
			else
			{
				testShap.parent != null && testShap.parent.removeChild(testShap);
			}
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

		public static DrawHeroId(hero:EntityBase)
		{
			if(DrawUtils.isTest == false)
				return;
			let lb = new eui.Label;
			lb.text = `${hero.id}`;
			lb.stroke = 2;
			lb.strokeColor = 0x000;
			lb.x = hero.width >>1;
			lb.y = -50;
			hero.addChild(lb);
		}

		public static DrawGrigd(entity:EntityBase)
		{
			if(entity.hasCom(COMPONENT.GRIGD) == false)
				return;
			let rCom:RigidCom = entity.getCom(COMPONENT.GRIGD);
			let shape = new egret.Shape();
			shape.graphics.beginFill(0xffff00);
			shape.graphics.lineStyle(1, 0x000000);
			shape.graphics.drawCircle(0, 0, rCom.radius);
			shape.graphics.endFill();
			entity.addChildAt(shape, 0);
		}
	}
}