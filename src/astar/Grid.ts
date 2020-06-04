namespace astar
{
    export  class Grid
    {
        public startNode:NodeItem;    //起点
        public endNode:NodeItem;      //终点
        public nodes:Array<NodeItem[]>;  //Node数组
        public numCols:number;    //网格行列
        public numRows:number;
        public space:number;
        
        public startX:number;
        public startY:number;

        public constructor(numCols:number, numRows:number, space:number, startX:number, startY:number)
        {
            this.numCols = numCols;
            this.numRows = numRows;
            this.space = space;
            this.startX = startX;
            this.startY = startY;
            this.nodes = [];

            for(let i:number=0; i<numCols; i++)
            {
                this.nodes[i] = [];
                for(let j:number=0; j<numRows; j++)
                {
                    this.nodes[i][j] = new NodeItem(i,j);
                }
            }
        }

        public getNode(x:number , y:number):NodeItem
        {
            return this.nodes[x][y];
        }

        public setEndNode(x:number, y:number)
        {
            this.endNode = this.nodes[x][y];
        }

        public setStartNode(x:number, y:number)
        {
            this.startNode = this.nodes[x][y];
        }

        public setWalkable(x:number, y:number, value:boolean)
        {
            this.nodes[x][y].walkable = value;
        }

        public destroy()
        {
            for(let nodeArray of this.nodes)
            {
                for(let node of nodeArray)
                {
                    node.destroy();
                }
                nodeArray.length = 0;
            }
            this.nodes.length = 0;
            this.nodes = null;
        }
    }
}