/**
 * A星寻路
 */
namespace astar
{
    export class AStar
    {
        private open:Array<any>;               //待考察表
        private closed:Array<any>;             //已考察表
        private grid:astar.Grid;               //网格
        private endNode:NodeItem;                  //终点Node
        private startNode:NodeItem;                //起点Node
        private heuristic:Function;            //寻路算法
        private straightCost:number = 1.0;     //上下左右走的代价
        private diagCost:number = Math.SQRT2;  //斜着走的代价 
        public path:Array<NodeItem>;               //保存路径
        
        public constructor()
        {    
            this.heuristic = this.diagonal;
        }

        // 寻路
        public findPath(grid:Grid):boolean
        {
            this.grid = grid;
            this.open = [];
            this.closed = [];
            
            this.startNode = this.grid.startNode;
            this.endNode = this.grid.endNode;
            
            this.startNode.g = 0;
            this.startNode.h = this.heuristic(this.startNode);
            this.startNode.f = this.startNode.g + this.startNode.h;
            
            return this.search();
        }
        
        // 查找路径
        public search():boolean
        {
            var node:NodeItem = this.startNode;
            while(node != this.endNode)
            {
                var startX = Math.max(0, node.x - 1);
                var endX = Math.min(this.grid.numCols - 1, node.x + 1);
                var startY = Math.max(0, node.y - 1);
                var endY = Math.min(this.grid.numRows - 1, node.y + 1);
                
                for(var i = startX; i <= endX; i++)
                {
                    for(var j = startY; j <= endY; j++)
                    {    
                        //不让斜着走
                        // if(i != node.x && j != node.y){
                        //     continue;
                        // }

                        var test:NodeItem = this.grid.getNode(i, j);
                        if(test == node || 
                            !test.walkable ||
                            !this.grid.getNode(node.x, test.y).walkable ||
                            !this.grid.getNode(test.x, node.y).walkable)
                        {
                            continue;
                        }
                        
                        var cost:number = this.straightCost;
                        if(!((node.x == test.x) || (node.y == test.y)))
                        {
                            cost = this.diagCost;
                        }
                        var g = node.g + cost * test.costMultiplier;
                        var h = this.heuristic(test);
                        var f = g + h;
                        if(this.isOpen(test) || this.isClosed(test))
                        {
                            if(test.f > f)
                            {
                                test.f = f;
                                test.g = g;
                                test.h = h;
                                test.parent = node;
                            }
                        }
                        else
                        {
                            test.f = f;
                            test.g = g;
                            test.h = h;
                            test.parent = node;
                            this.open.push(test);
                        }
                    }
                }
                for(var o = 0; o < this.open.length; o++)
                {
                }
                this.closed.push(node);
                if(this.open.length == 0)
                {
                    console.log("AStar >> no path found");
                    return false
                }
                
                let openLen = this.open.length;
                for(let m=0;m<openLen;m++){
                    for(let n=m+1;n<openLen;n++){
                        if(this.open[m].f > this.open[n].f){
                            let temp = this.open[m];
                            this.open[m] = this.open[n];
                            this.open[n] = temp;
                        }
                    }
                }

                node = this.open.shift() as NodeItem;
            }
            this.buildPath();
            return true;
        }
        
        //获取路径
        private buildPath():void
        {
            this.path = new Array();
            var node:NodeItem = this.endNode;
            this.path.push(node);
            while(node != this.startNode)
            {
                node = node.parent;
                this.path.unshift(node);
            }
        }
        
        // 是否待检查
        private isOpen(node:NodeItem):boolean
        {
            for(var i = 0; i < this.open.length; i++)
            {
                if(this.open[i] == node)
                {
                    return true;
                }
            }
            return false;
        }
        
        // 是否已检查
        private isClosed(node:NodeItem):boolean
        {
            for(var i = 0; i < this.closed.length; i++)
            {
                if(this.closed[i] == node)
                {
                    return true;
                }
            }
            return false;
        }
        
        // 曼哈顿算法
        private manhattan(node:NodeItem)
        {
            return Math.abs(node.x - this.endNode.x) * this.straightCost + Math.abs(node.y + this.endNode.y) * this.straightCost;
        }
        

        private euclidian(node:NodeItem)
        {
            var dx = node.x - this.endNode.x;
            var dy = node.y - this.endNode.y;
            return Math.sqrt(dx * dx + dy * dy) * this.straightCost;
        }
        
        private diagonal(node:NodeItem)
        {
            var dx = Math.abs(node.x - this.endNode.x);
            var dy = Math.abs(node.y - this.endNode.y);
            var diag = Math.min(dx, dy);
            var straight = dx + dy;
            return this.diagCost * diag + this.straightCost * (straight - 2 * diag);
        }
        
        public get visited()
        {
            return this.closed.concat(this.open);
        }

        public destroy()
        {
            
        }
    }

}