module war
{
	export class WarDataMgr extends DataBase
	{
		public entityMap:Hash<number, EntityBase>;		
		
		public sysArray:SystemBase[];
		public moveSystem:MoveSystem;
		public actionSystem:ActionSystem;
		public collisionSystem:CollisionSystem;
		public pathSystem:PathSystem;
		public speedSystem:SpeedSystem;
		
		public mapId:number;
		public mapCfg:boolean[][];
		public astar:astar.AStar;
		public grid:astar.Grid;
		public pathMap:Hash<string, astar.Node[]>;
		public numCols:number;
		public numRows:number;
		public space:number;
		public startX:number;
		public startY:number;

		public world:World;

		protected init()
		{
			this.mapId = 1001;
			this.mapCfg = MapCfg[String(this.mapId)];
			this.numCols = 36;this.mapCfg[0].length // 18;
			this.numRows = 16;this.mapCfg.length;   // 30;
			this.space = 30;
			this.startX = 100;
			this.startY = 120;
			// 战场宽540高900
			this.world = new World();
			this.entityMap = new Hash<number, EntityBase>();
			this.sysArray = [];
			this.initGrid();

			this.moveSystem = new MoveSystem();
			this.sysArray.push(this.moveSystem); 

			this.pathSystem = new PathSystem();
			this.sysArray.push(this.pathSystem);

			// this.speedSystem = new SpeedSystem();
			// this.sysArray.push(this.speedSystem);

			this.actionSystem = new ActionSystem();
			this.sysArray.push(this.actionSystem);


			this.collisionSystem = new CollisionSystem();
			this.sysArray.push(this.collisionSystem);
		}

		protected destroy()
		{
			DataUtils.DestroyUIBaseMap(this.entityMap);

			if(this.moveSystem != null)
			{
				this.moveSystem.destroyAll();
				this.moveSystem = null;
			}

			if(this.actionSystem != null)
			{
				this.actionSystem.destroyAll();
				this.actionSystem = null;
			}
			this.sysArray.length = 0;
			this.astar.destroy();
			this.grid.destroy();
			this.astar = null;
			this.grid = null;
		}

		public startWar()
		{
			egret.startTick(this.update, this);
		}

		public endWar()
		{
			egret.stopTick(this.update, this);
		}

		public update(deltaTime:number = null):boolean
		{
			try
			{
				this.world.update(deltaTime);
			}
			catch(e)
			{

			}
			return true;
		}

		// ---------------------------------------------------------------------- 实体
		public addEntity(entity:any)
		{
			if(this.entityMap.has(entity.id) == true)
				return false;
			this.entityMap.set(entity.id, entity);
		}

		public removeEntity(id:number):EntityBase
		{
			if(this.entityMap.has(id) == false)
				return null;
			return this.entityMap.remove(id);
		}

		public destroyEntity(id:number):boolean
		{
			if(this.entityMap.has(id) == false)
				return false;
			let entity:EntityBase = this.entityMap.remove(id);
			entity != null && entity.destroyAll();
			PoolManager.Ins().push(entity);
		}

		// ---------------------------------------------------------------------- 寻路
		private initGrid()
		{
			this.astar = new astar.AStar();
			this.grid = new astar.Grid();
			this.grid.init(this.numRows, this.numCols, this.space, this.mapCfg);
			this.pathMap = new Hash<string, astar.Node[]>();
		}

		public findPath(startX:number, startY:number, endX:number, endY:number):astar.Node[]
		{
			// 如果存在缓存，则在缓存中查找
			let key = `${startX}_${startY}_${endX}_${endY}`;
			let path:astar.Node[];
			if(this.pathMap.has(key) == true)
			{
				path = this.pathMap.get(key);
				return DataUtils.CopyArray(path); // 如果直接返回的话，会因为引用同一段路径而使其他实体产生问题。
			}

			path = this.astar.findPath(startX, startY, endX, endY, this.grid);
			this.pathMap.set(key, path);
			return path;
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