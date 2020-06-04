class CalcPath
{
	public grid:astar.Grid;
	public nodeArray:astar.NodeItem[] = [];
	public allPathMap = {};
	public constructor()
	{

	}

	public calc()
	{
		this.grid = new astar.Grid(10,10);

		for(let i=0, len=this.grid.nodes.length; i<len; i++)
		{
			for(let j=0, len2=this.grid.nodes.length; j<len2; j++)
			{
				this.nodeArray.push(this.grid.nodes[i][j]);
			}
		}
	}

	public calc2()
	{
		var aStar:astar.AStar = new astar.AStar();
		for(let i=0, len=this.nodeArray.length; i<len; i++)
		{
			this.grid.startNode = this.nodeArray[i];
			for(let j=i+1, len2=this.nodeArray.length; j<len2; j++)
			{
				this.grid.endNode = this.nodeArray[j];
				if(aStar.findPath(this.grid))
				{
					let arr = [];
					for(let node of aStar.path)
					{
						arr.push([node.x, node.y]);
					}
					this.allPathMap[`${arr[0][0]}_${arr[0][1]}_${arr[arr.length-1][0]}_${arr[arr.length-1][1]}`] = arr;
				}
			}
		}
	}
}