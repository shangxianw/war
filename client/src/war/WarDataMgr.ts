module war
{
	export class WarDataMgr extends DataBase
	{	
		public entityMap:Hash<number, EntityBase>;
		public world:World;
		public lastTime:number;
		public sysArray:SystemBase[];

		protected init()
		{
			this.lastTime = 0;
			this.sysArray = [];
			this.world = new World();
			this.entityMap = new Hash<number, EntityBase>();
		}

		protected destroy()
		{
			this.world.destroy()
			for(let item of this.entityMap.values())
			{
				item.destroy()
			}
			this.entityMap.destroy();
			this.entityMap = null;
			this.sysArray.length = 0;
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
			let deltaTime = (currTime - this.lastTime)/1000;
			this.lastTime = currTime;
			
			let warData = WarDataMgr.Ins();
			let entityArray = DataUtils.CopyArray(warData.entityMap.values());
			let entity:EntityBase;
			for(let i=0, len=entityArray.length; i<len; i++)
			{
				entity = entityArray[i];
				if(entity == null)
					continue;
			}
			return true;
		}

		// ---------------------------------------------------------------------- 实体
		public addEntity(entity:EntityBase)
		{
			if(this.entityMap.has(entity.hasCode) == true)
				return false;
			this.entityMap.set(entity.hasCode, entity);
		}

		public removeEntity(id:number):EntityBase
		{
			if(this.entityMap.has(id) == false)
				return null;
			return this.entityMap.remove(id);
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