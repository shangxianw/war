module war
{
	export class WarUtils
	{
		public static GridX2LocalX(gridX:number)
		{
			return war.WarDataMgr.Ins().MapStartX + war.WarDataMgr.Ins().CeilSize*gridX + (war.WarDataMgr.Ins().CeilSize>>1); // 最后括号括起来是因为>>的优先级是最低的
		}

		public static GridY2LocalY(gridY:number)
		{
			return WarDataMgr.Ins().MapStartY + WarDataMgr.Ins().CeilSize*gridY + (WarDataMgr.Ins().CeilSize>>1);
		}

		public static LocalX2GridX(localX:number)
		{
			return Math.floor((localX - WarDataMgr.Ins().MapStartX) / WarDataMgr.Ins().CeilSize);
		}

		public static LocalY2GridY(localY:number)
		{
			return Math.floor((localY - WarDataMgr.Ins().MapStartY) / WarDataMgr.Ins().CeilSize);
		}
	}
}