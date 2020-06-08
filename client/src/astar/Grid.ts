module astar
{
	export class Grid
	{
		public numCols:number; // 列
		public numRows:number;
		public space:number;
		public nodeArray:Node[][];
		public constructor()
		{

		}

		public init(numRows:number, numCols:number, space:number, mapCfg:boolean[][])
		{
			this.numRows = numRows;
			this.numCols = numCols;
			this.space = space;

			this.nodeArray = [];
			let x:number, y:number;
			for(let i=0, len=this.numRows; i<len; i++)
			{
				let rowArray:Node[] = [];
				for(let j=0, len2=this.numCols; j<len2; j++)
				{
					x = j;
					y = i;
					let node = new Node();
					node.init(x, y, mapCfg[y][x]);
					rowArray.push(node);
				}
				this.nodeArray.push(rowArray);
			}
		}

		public destroy()
		{
			for(let i=0, len=this.numRows; i<len; i++)
			{
				for(let j=0, len2=this.numCols; j<len2; j++)
				{
					this.nodeArray[i][j].destroy();
					this.nodeArray[i][j] = null;
				}
				this.nodeArray[i].length = 0;
				this.nodeArray[i] = null;
			}
			this.nodeArray.length  = 0;
			this.nodeArray = null;
		}

		public getNode(x:number, y:number)
		{
			// 第一个是y，第二个是x，容易搞反
			if(this.nodeArray[y] == null)
				return null;
			return this.nodeArray[y][x];
		}

		public setWalkable(x:number, y:number, walkable:boolean)
		{
			if(this.nodeArray[y] == null || this.nodeArray[y][x] == null)
				return false;
			this.nodeArray[y][x].walkable = walkable;
			return true;
		}

		public getNodeArray()
		{
			let tarArray:Node[] = [];
			for(let nodeArray of this.nodeArray)
			{
				for(let node of nodeArray)
				{
					tarArray.push(node);
				}
			}
			return tarArray;
		}
	}
}