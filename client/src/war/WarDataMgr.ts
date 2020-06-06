module war
{
	export class WarDataMgr extends DataBase
	{
		public entityMap:Hash<number, EntityBase>;		
		
		public sysArray:SystemBase[];
		public moveSystem:MoveSystem;
		public actionSystem:ActionSystem;
		
		public grid:astar.Grid;
		public pathMap:Hash<string, astar.NodeItem[]>;

		public world:World;

		protected init()
		{
			this.world = new World();
			this.entityMap = new Hash<number, EntityBase>();
			this.sysArray = [];
			this.initGrid();

			this.actionSystem = new ActionSystem();
			this.sysArray.push(this.actionSystem);

			this.moveSystem = new MoveSystem();
			this.sysArray.push(this.moveSystem);

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
			this.destroyGrid();
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
			// this.grid = new astar.Grid(52, 80, 10, 100, 240); // 520, 800
			// this.grid = new astar.Grid(26, 40, 20, 100, 240); // 520, 800
			this.grid = new astar.Grid(13, 20, 40, 100, 240); // 520, 800
			this.pathMap = new Hash<string, astar.NodeItem[]>();
		}

		private destroyGrid()
		{
			this.grid.destroy();
			this.grid = null;

			let path:astar.NodeItem[];
			for(let key in this.pathMap)
			{
				path = this.pathMap.get(key);
				if(path = null)
					continue;
				for(let node of path)
				{
					node.destroy();
				}
				path.length = 0;
				path = null;
			}
			this.pathMap.destroy();
			this.pathMap = null;
		}

		public findPath(start:number[], end:number[]):astar.NodeItem[]
		{
			if(start == null || end == null)
				return;
			// 超出边界判断

			// 如果存在缓存，则在缓存中查找
			let key = `${start[0]}_${start[1]}_${end[0]}_${end[1]}`;
			if(this.pathMap.has(key) == true)
			{
				let path = this.pathMap.get(key);
				return DataUtils.CopyArray(path); // 如果直接返回的话，会因为引用同一段路径而使其他实体产生问题。
				// return path;
			}
			
			this.grid.setStartNode(start[0], start[1]);
			this.grid.setEndNode(end[0], end[1]);

			var star:astar.AStar = PoolManager.Ins().pop(astar.AStar) as astar.AStar;
			if(star.findPath(this.grid) == true)
			{
				this.pathMap.set(key, star.path)
				star.destroy();
				PoolManager.Ins().push(star);
				return DataUtils.CopyArray(star.path);
			}
			PoolManager.Ins().push(star);
			return [];
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