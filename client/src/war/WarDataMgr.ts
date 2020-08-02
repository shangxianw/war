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

		protected init()
		{
			this.world = new World();
			this.entityMap = new Hash<number, EntityBase>();
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
			egret.startTick(this.update, this);
		}

		public endWar()
		{
			egret.stopTick(this.update, this);
			this.destroyEntityMap();
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