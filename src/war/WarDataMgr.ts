module war
{
	export class WarDataMgr extends DataBase
	{
		public entityMap:Hash<number, EntityBase>;
		
		public sysArray:SystemBase[];
		protected init()
		{
			this.entityMap = new Hash<number, EntityBase>();
			this.sysArray = [];
		}

		protected destroy()
		{
			DataUtils.DestroyUIBaseMap(this.entityMap);
			DataUtils.DestroyDataBaseArray(this.sysArray);
		}

		public update()
		{
			for(let sys of this.sysArray)
			{
				if(sys == null)
					continue;
				sys.update();
			}
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