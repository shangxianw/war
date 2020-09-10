module war
{
	export class WarDataMgr extends DataBase
	{
		public init()
		{
		}

		public destroy()
		{
			super.destroy();
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