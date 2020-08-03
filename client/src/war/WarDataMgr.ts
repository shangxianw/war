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
		
		public mapGrid:astar.Grid;
		public astar:astar.AStar;

		public entityMap:Hash<number, EntityBase>;
		public world:World;

		protected init()
		{
			this.world = new World();
			this.entityMap = new Hash<number, EntityBase>();
			this.mapGrid = new astar.Grid()
			this.astar = new astar.AStar()
		}

		protected destroy()
		{
			this.world.destroy();
			this.world = null;
			this.destroyEntityMap();
			this.entityMap = null;
		}

		public startWar()
		{
			this.mapGrid.init(this.Nrows, this.Ncols, this.CeilSize);
			egret.startTick(this.update, this);
		}

		public endWar()
		{
			egret.stopTick(this.update, this);
			this.destroyEntityMap();
		}

		public findPath(x1:number, y1:number, x2:number, y2:number)
		{
			let path = this.astar.findPath(x1, y1, x2, y2, this.mapGrid)
			return path
		}

		public update(currTime:number = null):boolean
		{
			try
			{
				this.world.update(currTime);
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

		private destroyEntityMap()
		{
			for(let item of this.entityMap.values())
			{
				item.destroyAll()
			}
			this.entityMap.destroy();
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