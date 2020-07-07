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

		public init(numRows:number, numCols:number, space:number)
		{
			this.numRows = numRows;
			this.numCols = numCols;
			this.space = space;

			this.nodeArray = [];
			let x:number, y:number;
			let cannotWalk = [
				[24, 0], [25, 0], [26,0], [27,0], [28,0], [29,0],
				[24, 1], [25, 1], [26,1], [27,1], [28,1], [29,1],
				[24, 2], [25, 2], [26,2], [27,2], [28,2], [29,2],
				
				[24, 7], [25, 7], [26, 7], [27, 7], [28, 7], [29, 7],
				[24, 8], [25, 8], [26, 8], [27, 8], [28, 8], [29, 8],
				[24, 9], [25, 9], [26, 9], [27, 9], [28, 9], [29, 9],
				[24, 10], [25, 10], [26, 10], [27, 10], [28, 10], [29, 10],
				[24, 11], [25, 11], [26, 11], [27, 11], [28, 11], [29, 11],
				[24, 12], [25, 12], [26, 12], [27, 12], [28, 12], [29, 12],
				[24, 13], [25, 13], [26, 13], [27, 13], [28, 13], [29, 13],
				[24, 14], [25, 14], [26, 14], [27, 14], [28, 14], [29, 14],
				[24, 15], [25, 15], [26, 15], [27, 15], [28, 15], [29, 15],
				[24, 16], [25, 16], [26, 16], [27, 16], [28, 16], [29, 16],

				// [24, 20], [25, 20], [26, 20], [27, 20], [28, 20], [29, 20],
				[24, 21], [25, 21], [26, 21], [27, 21], [28, 21], [29, 21],
				[24, 22], [25, 22], [26, 22], [27, 22], [28, 22], [29, 22],
				[24, 23], [25, 23], [26, 23], [27, 23], [28, 23], [29, 23],

				// king
				[4, 10], [5, 10], [6, 10], [7, 10],
				[4, 11], [5, 11], [6, 11], [7, 11],
				[4, 12], [5, 12], [6, 12], [7, 12],
				[4, 13], [5, 13], [6, 13], [7, 13],

				[46, 10], [47, 10], [48, 10], [49, 10],
				[46, 11], [47, 11], [48, 11], [49, 11],
				[46, 12], [47, 12], [48, 12], [49, 12],
				[46, 13], [47, 13], [48, 13], [49, 13],

				// 公主塔
				[11, 3], [12, 3], [13, 3],
				[11, 4], [12, 4], [13, 4],
				[11, 5], [12, 5], [13, 5],
				[11, 6], [12, 6], [13, 6],

				[11, 17], [12, 17], [13, 17],
				[11, 18], [12, 18], [13, 18],
				[11, 19], [12, 19], [13, 19],
				[11, 20], [12, 20], [13, 20],

				[40, 3], [41, 3], [42, 3],
				[40, 4], [41, 4], [42, 4],
				[40, 5], [41, 5], [42, 5],

				[40, 17], [41, 17], [42, 17],
				[40, 18], [41, 18], [42, 18],
				[40, 19], [41, 19], [42, 19],

			];
			for(let i=0, len=this.numRows; i<len; i++)
			{
				let rowArray:Node[] = [];
				for(let j=0, len2=this.numCols; j<len2; j++)
				{
					x = j;
					y = i;
					let node = new Node();
					let walkable = true;
					for(let pos of cannotWalk)
					{
						if(pos[0] == x && pos[1] == y)
						{
							walkable = false;
							break;
						}
					}
					node.init(x, y, walkable);
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