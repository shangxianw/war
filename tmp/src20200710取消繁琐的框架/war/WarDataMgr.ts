module war
{
	export class WarDataMgr extends DataBase
	{
		public mapId:number;
		
		public entityMap:Hash<number, EntityBase>;
		public infoMap:Hash<number, UIBase>;
		private astar:astar.AStar;
		public pathMap:Hash<string, astar.Node[]>;
		
		public grid:astar.Grid;
		public startX:number;
		public startY:number;

		public world:World;
		public enemyTarget = [[40, 4], [40, 18], [42, 12]];

		protected init()
		{
			this.mapId = 1001;
			this.startX = 100;
			this.startY = 85;
			// 战场宽540高900
			this.astar = new astar.AStar();
			this.grid = new astar.Grid();
			this.grid.init(24, 54, 20);
			this.world = new World();
			this.pathMap = new Hash<string, astar.Node[]>();
			this.entityMap = new Hash<number, EntityBase>();
			this.infoMap = new Hash<number, UIBase>();
		}

		protected destroy()
		{
			DataUtils.DestroyUIBaseMap(this.entityMap);
			DataUtils.DestroyUIBaseMap(this.infoMap);
			
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

		public update(currTime:number = null):boolean
		{
			try
			{
				this.world.update(currTime);
			}
			catch(e)
			{

			}
			return true;
		}

		// ---------------------------------------------------------------------- 实体
		public addEntity(entity:EntityBase)
		{
			if(this.entityMap.has(entity.iii) == true)
				return false;
			this.entityMap.set(entity.iii, entity);
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

		public getEnemyTarget(entity:EntityBase)
		{
			let x = WarUtils.ToGridX(entity.x);
			let y = WarUtils.ToGridY(entity.y);

			let distanceArray = [];
			for(let pos of this.enemyTarget)
			{
				let distance = MathUtils.CalcDistance(x, y, pos[0], pos[1]);
				distanceArray.push(distance);
			}
			let minIndex = 0;
			let i = 0;
			for(let distance of distanceArray)
			{
				if(distance < distanceArray[minIndex])
					minIndex = i;
				i++;
			}
			return this.enemyTarget[minIndex];
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