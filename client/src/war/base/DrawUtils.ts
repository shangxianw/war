module war
{
	export class DrawUtils
	{
		public static isTest:boolean = true;
		private static _pathMap:Hash<number, egret.Shape>;
		private static activeCeil:egret.Shape;
		private static cannotWalk:egret.Shape;
		public static Destroy()
		{
			
		}

		// ---------------------------------------------------------------------- 绘制网格
		public static DrawGrid(group:eui.Group)
		{
			if(DrawUtils.isTest == false)
				return;
			let space = WarDataMgr.Ins().grid.space;
			let rows = WarDataMgr.Ins().grid.numCols;
			let cols = WarDataMgr.Ins().grid.numRows;
			let starX = WarDataMgr.Ins().startX;
			let starY = WarDataMgr.Ins().startY;

			let shape = new egret.Shape();
			shape.graphics.lineStyle(1, 0x0000ff);

			if(this.cannotWalk == null)
			{
				this.cannotWalk = new egret.Shape();
				group.addChild(this.cannotWalk);
			}
			this.cannotWalk.graphics.clear();
			this.cannotWalk.graphics.beginFill(0x00ff00, 0.5);
			
			for(let i=0, len = rows; i<len; i++)
			{
				for(let j=0, len2 = cols; j<len2; j++)
				{
					let x = starX + space*i;
					let y = starY + space*j;
					shape.graphics.drawRect(x, y, space, space);

					let grid = WarDataMgr.Ins().grid.getNode(i, j);
					if(grid.walkable == false)
						this.cannotWalk.graphics.drawRect(x, y, space, space);
				}
			}
			shape.graphics.endFill();
			group.addChild(shape);
		}

		// ---------------------------------------------------------------------- 绘制格子的中心点
		public static DrawNodeXY(group:eui.Group)
		{
			if(DrawUtils.isTest == false)
				return;

			let shape = new egret.Shape();
			shape.graphics.beginFill(1, 0x0000ff);			
			let nodeArray = WarDataMgr.Ins().grid.nodeArray;
			for(let nodeRow of nodeArray)
			{
				for(let nodeCol of nodeRow)
				{
					let x = WarUtils.ToLocalX(nodeCol.x);
					let y = WarUtils.ToLocalY(nodeCol.y);
					shape.graphics.drawCircle(x, y, 2);
				}
			}
			shape.graphics.endFill();
			group.addChild(shape);
		}

		// ---------------------------------------------------------------------- 绘制当前拖动到的格子
		public static DrawActiveCeil(localX:number, localY:number, group:eui.Group)
		{
			if(DrawUtils.isTest == false)
				return;
			
			if(this.activeCeil == null)
			{
				this.activeCeil = new egret.Shape();
				group.addChild(this.activeCeil);
			}
			
			let space = WarDataMgr.Ins().grid.space;
			let xy = WarUtils.GetRealXY(localX, localY)
			let realX = xy[0];
			let realY = xy[1];


			this.activeCeil.graphics.clear();
			this.activeCeil.graphics.beginFill(1, 0x00ff00);
			this.activeCeil.graphics.drawRect(realX-space/2, realY-space/2, space, space);
			this.activeCeil.graphics.endFill();
		}

		// 绘制实体id
		public static DrawEntityId(entity:EntityBase)
		{
			if(DrawUtils.isTest == false)
				return;
			let idLb = new eui.Label();
			idLb.text = `${entity.uniqueCode}`;
			idLb.stroke = 2;
			idLb.strokeColor = 0x000;
			idLb.x = -20;
			idLb.y = -50;
			entity.addChild(idLb);
		}

		public static DrawPath(entity:EntityBase)
		{
			if(this.isTest == false)
				return;
			
			let pCom:PathCom = entity.getCom(COMPONENT.PATH) as PathCom;
			if(pCom == null)
				return;

			let pathShape:egret.Shape;
			if(this.pathMap.has(entity.uniqueCode) == false)
			{
				pathShape = new egret.Shape();
				this.pathMap.set(entity.uniqueCode, pathShape);
				entity.parent.parent.addChild(pathShape);
			}
			pathShape = this.pathMap.get(entity.uniqueCode);
			pathShape.graphics.clear();
			pathShape.graphics.lineStyle(1, 0xff0000);
			pathShape.graphics.moveTo(entity.x, entity.y);
			let path = pCom.getLeftPath(false);
			for(let node of path)
			{
				let localX = WarUtils.ToLocalX(node.x);
				let localY = WarUtils.ToLocalX(node.y);
				pathShape.graphics.lineTo(localX, localY);
			}
			pathShape.graphics.endFill();
		}

		public static get pathMap()
		{
			if(this._pathMap == null)
				this._pathMap = new Hash<number, egret.Shape>();
			return this._pathMap;
		}
	}
}