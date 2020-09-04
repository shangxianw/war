module war
{
	export class WarDataMgr extends DataBase
	{	
		public StageWidth:number = 640;
		public StageHeight:number = 1280;
		public MapStartX:number = 100
		public MapStartY:number = 100
		public Ncols:number = 54
		public Nrows:number = 24
		public CeilSize:number = 20

		public entityMap:Hash<number, EntityBase>;
		public world:World;

		public grid:astar.Grid;
		private astar:astar.AStar;

		protected init()
		{
			this.world = new World();
			this.entityMap = new Hash<number, EntityBase>();
			this.grid = new astar.Grid()
		}

		protected destroy()
		{
			try
			{
				this.world.destroy();
				this.world = null;
				this.destroyEntityMap();
				this.entityMap = null;
			}
			catch(e)
			{

			}
		}

		public startWar()
		{
			this.astar = new astar.AStar()
			this.grid.init(this.Nrows, this.Ncols, this.CeilSize)
			egret.startTick(this.update, this);
		}

		public endWar()
		{
			this.astar.destroy()
			egret.stopTick(this.update, this);
			this.grid.destroy();
			this.destroyEntityMap();
		}

		public update(currTime:number = null):boolean
		{
			try
			{
				this.world.logicLoop(currTime);
				this.world.renderLoop(currTime);
				return true;
			}
			catch(e)
			{
				return false;
			}
		}

		// ---------------------------------------------------------------------- 实体
		public addEntity(entity:EntityBase)
		{
			if(this.entityMap.has(entity.hasCode) == true)
				return false;
			this.entityMap.set(entity.hasCode, entity);
		}

		public removeEntity(entity:EntityBase):EntityBase
		{
			if(this.entityMap.has(entity.hasCode) == false)
				return null;
			this.entityMap.remove(entity.hasCode);
			entity.destroyAll();
		}

		public getEntity(hasCode:number)
		{
			return this.entityMap.get(hasCode)
		}

		private destroyEntityMap()
		{
			for(let item of this.entityMap.values())
			{
				item.destroyAll()
			}
			this.entityMap.destroy();
		}

		// ---------------------------------------------------------------------- 寻路相关
		public findPath(gridX1:number, gridY1:number, gridX2:number, gridY2:number, needFrist:boolean = false)
		{
			let path = this.astar.findPath(gridX1, gridY1, gridX2, gridY2, this.grid)
			if(needFrist == false)
			{
				let node = path.shift()
				node.destroy()
				node = null
			}
			return path
		}

		public getCanWalkNodeByRandom()
		{
			let node = null
			while(node == null)
			{
				let gridX = Math.floor(Math.random() * this.Ncols)
				let gridY = Math.floor(Math.random() * this.Nrows)
				node = this.grid.getNode(gridX, gridY)
				if(node.walkable == false)
					node = null
			}
			return node
		}

		private static instance:WarDataMgr;
		public static Ins()
		{
			if(WarDataMgr.instance == null)
				WarDataMgr.instance = new WarDataMgr();
			return WarDataMgr.instance;
		}
	}
}