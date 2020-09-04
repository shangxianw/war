module astar
{
	export class AStarTest extends eui.Component
	{
		private numCols:number; // 列
		private numRows:number; // 行
		private space:number;
		private astar:AStar;
		private grid:Grid;
		public constructor()
		{
			super();
			this.init();
			this.touchChildren = false;
			this.touchEnabled = true;
		}

		public init()
		{
			this.numCols = 54;
			this.numRows = 24;
			this.space = 20;
			this.astar = new AStar();
			this.initData();
		}

		public destroy()
		{
			this.grid.destroy();
			this.grid = null;
			this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnTap, this);
		}

		public initData()
		{
			let tect = new eui.Rect();
			tect.width = this.space * this.numCols;
			tect.height = this.space * this.numRows;
			tect.graphics.beginFill(0xeeeeee)
			tect.graphics.drawRect(0, 0, this.space * this.numCols, this.space * this.numRows)
			tect.graphics.endFill()
			this.addChild(tect);
			let gridMap = new egret.Shape();
			let walkMap = new egret.Shape();
			gridMap.graphics.lineStyle(1, 0xdddddd);
			walkMap.graphics.beginFill(0xffff00);
			
			this.grid = new Grid();
			this.grid.init(this.numRows, this.numCols, this.space);

			for(let i=0, len=this.numRows; i<len; i++)
			{
				for(let j=0, len2=this.numCols; j<len2; j++)
				{
					let x = j * this.space;
					let y = i * this.space;
					gridMap.graphics.drawRect(x, y, this.space, this.space);
					let walkabel = Math.random() > 0.05;
					this.grid.setWalkable(j, i, walkabel)
					if(walkabel == false)
						walkMap.graphics.drawRect(x, y, this.space, this.space)
				}
			}

			gridMap.graphics.endFill();
			walkMap.graphics.endFill();
			this.addChild(gridMap);
			this.addChild(walkMap);

			this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnTap, this);
		}

		private pathShap:egret.Shape;
		private nodeShap:egret.Shape;
		private OnTap(e:egret.TouchEvent)
		{
			let x = Math.floor(e.localX / this.space);
			let y = Math.floor(e.localY / this.space);

			if(this.pathShap == null)
			{
				this.pathShap = new egret.Shape();
				this.addChild(this.pathShap);
				this.nodeShap = new egret.Shape()
				this.addChild(this.nodeShap);
			}
			this.pathShap.graphics.clear();
			this.pathShap.graphics.lineStyle(2, 0xff0000);
			this.nodeShap.graphics.clear();
			this.nodeShap.graphics.beginFill(0xff0000);

			if(this.astar.startNode == null && this.astar.endNode == null)
			{
				this.astar.startNode = this.grid.getNode(0, 0);
				this.astar.endNode = this.grid.getNode(x, y);
			}
			else
			{
				this.astar.startNode = this.astar.endNode;
				this.astar.endNode = this.grid.getNode(x, y);
			}
			let path = this.astar.findPath(this.astar.startNode.x, this.astar.startNode.y, this.astar.endNode.x, this.astar.endNode.y, this.grid);
			for(let node of path)
			{
				let x = node.x * this.space + (this.space >> 1)
				let y = node.y * this.space + (this.space >> 1)
				this.pathShap.graphics.lineTo(x, y);
				this.nodeShap.graphics.drawCircle(x, y, 5)
			}
			this.pathShap.graphics.endFill();
			this.nodeShap.graphics.endFill();
		}
	}
}