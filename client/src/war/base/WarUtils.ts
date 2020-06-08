module war
{
	export class WarUtils
	{
		public static Init()
		{

		}

		public static Destroy()
		{

		}

		// 根据各自坐标计算出实际位置
		public ToRealPos(x:number, y:number):number[]
		{
			let space = WarDataMgr.Ins().space;
			let localX = WarDataMgr.Ins().startX + space*x + space>>1;
			let localY = WarDataMgr.Ins().startY + space*y + space>>1;
			return [localX, localY];
		}

		public static ToRealX(x:number):number
		{
			return WarDataMgr.Ins().startX + WarDataMgr.Ins().space*x + WarDataMgr.Ins().space>>1;
		}

		public static ToRealY(y:number):number
		{
			return WarDataMgr.Ins().startY + WarDataMgr.Ins().space*y + WarDataMgr.Ins().space>>1;
		}
	}
}