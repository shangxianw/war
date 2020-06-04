class AStarTest extends egret.Sprite
{
    private _cellSize:number = 20;
    public _grid:astar.Grid;
    private _player:egret.Sprite;
    private _index:number;
    private _path:Array<any>;
    
    public constructor()
    {
        super();
        this.makePlayer();
        this.makeGrid();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, ()=>{
            this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGridClick, this);
        },this);
        
    }
    
    /**
     * Creates the player sprite. Just a circle here.
     */
    private makePlayer()
    {
        this._player = new egret.Sprite();
        this._player.graphics.beginFill(0xff0000);
        this._player.graphics.drawCircle(0, 0, 5);
        this._player.graphics.endFill();
        this._player.x = Math.random() * 600;
        this._player.y = Math.random() * 600;
        this.addChild(this._player);
    }

    
    /**
     * Creates a grid with a bunch of random unwalkable nodes.
     */
    private makeGrid():void
    {
        this._grid = new astar.Grid(30,30, 20, 0, 0);
        for(var i = 0; i < 200; i++)
        {
            this._grid.setWalkable(Math.floor(Math.random() * 30),
                                Math.floor(Math.random() * 30),
                                false);
        }
        this.drawGrid();
    }
    
    /**
     * Draws the given grid, coloring each cell according to its state.
     */
    private drawGrid():void
    {
        this.graphics.clear();
        for(let i = 0; i < this._grid.numCols; i++)
        {
            for(let j = 0; j <this._grid.numRows; j++)
            {
                var node:astar.NodeItem =this._grid.getNode(i, j);
                //这里有Bug, 绘制将近150次时， drawRect会出错
                // this.graphics.lineStyle(0);
                // this.graphics.beginFill(this.getColor(node));
                // this.graphics.drawRect(i * this._cellSize, j * this._cellSize, this._cellSize, this._cellSize);
                let sp:egret.Sprite = new egret.Sprite();
                sp.graphics.beginFill(this.getColor(node));
                sp.graphics.drawRect(0,0,20,20);
                sp.graphics.endFill();
                sp.x = i*this._cellSize;
                sp.y = j*this._cellSize;
                this.addChild(sp);
            }
        }
        this.addChild(this._player);
    }
    
    /**
     * Determines the color of a given node based on its state.
     */
    private getColor(node:astar.NodeItem)
    {
        if(!node.walkable) return 0;
        if(node == this._grid.startNode) return 0xcccccc;
        if(node == this._grid.endNode) return 0xcccccc;
        return 0xffffff;
    }

    /**
     * Handles the click event on the GridView. Finds the clicked on cell and toggles its walkable state.
     */
    private onGridClick(event:egret.TouchEvent):void
    {
        var xpos = Math.floor(event.stageX / this._cellSize);
        var ypos = Math.floor(event.stageY / this._cellSize);
        this._grid.setEndNode(xpos, ypos);
        
        xpos = Math.floor(this._player.x / this._cellSize);
        ypos = Math.floor(this._player.y / this._cellSize);
        this._grid.setStartNode(xpos, ypos);
        
        this.drawGrid();

        this.startTime = egret.getTimer();
        this.findPath();
        console.log("耗时:", egret.getTimer() - this.startTime);
    }

    private startTime = 0;
    
    /**
     * Creates an instance of AStar and uses it to find a path.
     */
    public findPath():any[]
    {
        var aStar:astar.AStar = new astar.AStar();
        if(aStar.findPath(this._grid))
        {
            this._path = aStar.path;
            this._index = 0;
            this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
            return this._path
        }
    }
    
    /**
     * Finds the next node on the path and eases to it.
     */
    private onEnterFrame(event:egret.Event):void
    {
        var targetX = this._path[this._index].x * this._cellSize +  this._cellSize / 2;
        var targetY = this._path[this._index].y * this._cellSize + this._cellSize / 2;
        var dx = targetX - this._player.x;
        var dy = targetY - this._player.y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if(dist < 1)
        {
            this._index++;
            if(this._index >= this._path.length)
            {
                this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
            }
        }
        else
        {
            this._player.x += dx * .5;
            this._player.y += dy * .5;
        }
    }
}