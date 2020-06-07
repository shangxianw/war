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
			return this.search();
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
	}
}