module astar
{
	/**
	 * A星算法
	 * 参考文章：https://blog.csdn.net/hitwhylz/article/details/23089415
	 * 1、把起点加入到openList
	 * 2、重复以下过程：
	 * 		a、遍历openList，找到F值最小的节点，把它当做当前要处理的节点。
	 * 		b、把这个节点加入到closeList。
	 * 		c、对这个节点周围的8个相邻节点遍历：
	 * 			1)、如果它不可抵达或已在closeList中，忽略它。
	 * 			2)、如果它不在openList，则把它加入到openList，并将它的父节点设置为当前节点，计算FGH值。
	 * 			3)、如果它已经在openList中，比较一下该节点原先的g值与当前计算的g值，去最小的为准，如果新值更小，则将它的父节点设置单位当前节点。
	 * 		d、结束标志：
	 * 			1)、当把终点加入到openList中，此时终点找到。
	 * 			2)、查找终点失败，openList为空，此时没有路径。
	 * 
	 */
	export class AStar
	{
		private openArray:Node[];
		private closeArray:Node[];
		private grid:Grid;
		public startNode:Node;
		public endNode:Node;
		private tmpPath:Node[];

		private costArray:number[];
		private posArray:number[][];
		private hCost:number;
		public constructor()
		{
			this.init();
		}

		public init()
		{
			this.hCost = 10;
			this.costArray = [
				14, 10, 14,
				10,     10,
				14, 10, 14
			];
			this.posArray = [
				[-1, -1], [0, -1], [1, -1],
				[-1,  0],		   [1,  0],
				[-1,  1], [0,  1], [1,  1]
			]
		}

		public destroy()
		{

		}

		public findPath(startX:number, startY:number, endX:number, endY:number, grid:Grid):Node[]
		{
			this.grid = grid;
			this.openArray = [];
			this.closeArray = [];
			this.startNode = this.grid.getNode(startX, startY);
			this.endNode = this.grid.getNode(endX, endY);
			this.grid = grid;
			this.tmpPath = this.search();
			let p = this.floydPath(this.tmpPath);
			return p;
		}

		private search()
		{
			let currNode = this.startNode;
			this.openArray.push(currNode);
			while(currNode != this.endNode)
			{
				currNode = this.getMinFNode();
				if(currNode == null)
					break;
				this.closeArray.push(currNode);
				
				let node:Node;
				for(let i=0, len=8; i<len; i++)
				{
					node = this.grid.getNode(currNode.x + this.posArray[i][0], currNode.y + this.posArray[i][1]);
					if(node == null)
						continue;

					if(node.x == this.endNode.x && node.y == this.endNode.y) // 结束标志1
					{
						node.parent = currNode;
						return this.packPath();
					}

					if(this.closeArray.indexOf(node) >= 0)
						continue;
					if(node.walkable == false)
						continue;
					if(node.g != 0 && currNode.g + this.costArray[i] > node.g)
						continue;
					
					node.parent = currNode;
					node.g = node.parent.g + this.costArray[i];
					node.h = (Math.abs(this.endNode.y - node.y) + Math.abs(this.endNode.x - node.x)) * this.hCost;
					node.f = node.g + node.h;
					this.openArray.push(node);
				}

				if(this.openArray.length <= 0) // 结束标志2
				{
					return [];
				}
			}
			return [];
		}

		private floydPath(path:Node[])
		{
			let a:Node;
			let b:Node;
			let c:Node;

			// 去掉同一直线上的点，只保留端点
			let rateA:number;
			let rateB:number;
			for(let i=0; i<path.length; i++)
			{
				a = path[i];
				b = path[i+1];
				c = path[i+2];
				if(a == null || b == null || c == null)
					break;
				if( 
					(b.y - a.y == 0 && c.y - b.y == 0) == true ||
					(b.x - a.x == 0 && c.x - b.x == 0) == true
				)
				{
					path.splice(i+1, 1);
					i--;
					continue;
				}

				rateA = (b.x - a.x)/(b.y - a.y);
				rateB = (c.x - b.x)/(c.y - b.y);
				if(rateA == rateB)
				{
					path.splice(i+1, 1);
					i--;
				}
			}

			// 消除拐点
			let len = path.length;
			let ret:boolean;
			for (let i = len - 1; i >= 0; i--)
			{
				for (let j:number = 0; j <= i - 2; j++)
				{
					// ret = true;// 判断线段是否穿过节点，没穿过
					ret = this.checkIsCross(path[i].x, path[i].y, path[j].x, path[j].y);
					if (!ret)
					{
						for (var k:number = i - 1; k > j; k--)
						{
							path.splice(k, 1);
						}
						i = j+1;
						len = path.length;
						break;
					}
				}
			}

			return path;
		}

		private packPath()
		{
			let currNode:Node = this.endNode;
			let path:Node[] = [this.grid.getNode(currNode.x, currNode.y)];
			while(currNode != this.startNode)
			{
				currNode = currNode.parent;
				if(currNode == null)
					break;
				path.unshift(this.grid.getNode(currNode.x, currNode.y));
			}

			let arr = [].concat(this.openArray, this.closeArray);
			for(let node of arr)
			{
				node.resetGHF();
			}
			return path;
		}

		private getMinFNode():Node
		{
			let minIndex:number;
			let currIndex:number = 0;
			for(let openNode of this.openArray)
			{
				if(minIndex == null)
				{
					minIndex = currIndex;
				}
				else
				{
					if(openNode.f < this.openArray[minIndex].f)
					{
						minIndex = currIndex;
					}
				}
				currIndex++;
			}
			return this.openArray.splice(minIndex, 1)[0];
		}

		private checkIsCross(x1:number, y1:number, x2:number, y2:number):boolean
		{
			let cellSize = war.WarDataMgr.Ins().grid.space;
			let startX = x1*cellSize + cellSize*0.5;
			let startY = y1*cellSize + cellSize*0.5;
			let endX = x2*cellSize + cellSize*0.5;
			let endY = y2*cellSize + cellSize*0.5;
			let nodeArray = this.grid.getNodeArray();
			for(let node of nodeArray)
			{
				if(!node.walkable && this.isLineCross(node, startX, startY, endX, endY))
					return true;
			}
			return false;
		}

		//判断线段是否穿过该节点
		private isLineCross(node:Node, x1:number, y1:number, x2:number, y2:number)
		{
			function dcmp(_x:number):number
			{
				if(Math.abs(_x) < 0.001)
					return 0;
				else
					return _x<0?-1:1;
			}
			function dot(ax, ay, bx, by):number
			{
				return ax*bx+ay*by;
			}
			function cross(ax, ay, bx, by):number
			{
				return ax*by-ay*bx;
			}
			function inSegment(px, py, ax, ay, bx, by):boolean
			{
				return dcmp(cross(ax-px, ay-py, bx-px, by-py))==0 && dcmp(dot(ax-px, ay-py, bx-px, by-py))<=0;
			}
			function segmentIntersection(a1x, a1y, a2x, a2y, b1x, b1y, b2x, b2y):boolean
			{
				let c1 = cross(a2x-a1x, a2y-a1y,b1x-a1x, b1y-a1y);
				let c2 = cross(a2x-a1x, a2y-a1y,b2x-a1x, b2y-a1y);
				let c3 = cross(b2x-b1x, b2y-b1y,a1x-b1x, a1y-b1y);
				let c4 = cross(b2x-b1x, b2y-b1y,a2x-b1x, a2y-b1y);
				if(dcmp(c1)*dcmp(c2) < 0 && dcmp(c3)*dcmp(c4) < 0)
					return true;
				if(dcmp(c1) == 0 && inSegment(b1x, b1y, a1x, a1y, a2x, a2y))
					return true;
				if(dcmp(c2) == 0 && inSegment(b2x, b2y, a1x, a1y, a2x, a2y))
					return true;
				if(dcmp(c3) == 0 && inSegment(a1x, a1y, b1x, b1y, b2x, b2y))
					return true;
				if(dcmp(c4) == 0 && inSegment(a2x, a2y, b1x, b1y, b2x, b2y))
					return true;
				return false;
			}

			let cellSize = war.WarDataMgr.Ins().grid.space;
			let xmin = node.x*cellSize;
			let xmax = xmin+cellSize;
			let ymin = node.y*cellSize;
			let ymax = ymin+cellSize;
			
			if(x1>=xmin && x1<=xmax
			&&x2>=xmin && x2<=xmax
			&&y1>=ymin && y1<=ymax
			&&y2>=ymin && y2<=ymax)//线段在矩型内
				return true;
			
			if(x1==x2 && y1==y2)
			{
				return false;
			}
			
			//格子中心点到线段的距离 大于 cellSize*1.414 则线段和网格肯定不相交 通过这个过滤大部分情况 提高效率
			let dis = this.distanceFromPointToLine(xmin+cellSize/2, ymin+cellSize/2, x1, y1, x2, y2);
			if(dis >= cellSize*1.42)
				return false;
			
			//线段和格子的四个边框相交判断
			if(segmentIntersection(x1, y1, x2, y2, xmin, ymin, xmax, ymin))
				return true;
			if(segmentIntersection(x1, y1, x2, y2, xmax, ymin, xmax, ymax))
				return true;
			if(segmentIntersection(x1, y1, x2, y2, xmax, ymax, xmin, ymax))
				return true;
			if(segmentIntersection(x1, y1, x2, y2, xmin, ymax, xmin, ymin))
				return true;

			return false;
		}

		// 计算点(x, y)到经过两点(x1, y1)和(x2, y2)的直线的距离 (点到直线的垂直距离)
		private distanceFromPointToLine(x:number, y:number, x1:number, y1:number, x2:number, y2:number):number
		{
			let a:number = y2 - y1;
			let b:number = x1 - x2;
			let c:number = x2 * y1 - x1 * y2;
			if(Math.abs(a)>0 || Math.abs(b)>0)
				return Math.abs(a * x + b * y + c) / Math.sqrt(a * a + b * b);
			else
				return 0;
		}
	}
}