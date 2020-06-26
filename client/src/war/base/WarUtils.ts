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
		public static ToRealPos(x:number, y:number):number[]
		{
			let space = WarDataMgr.Ins().grid.space;
			let localX = WarDataMgr.Ins().startX + space*x + (space>>1);
			let localY = WarDataMgr.Ins().startY + space*y + (space>>1);
			return [localX, localY];
		}

		public static ToLocalX(x:number):number
		{
			return WarDataMgr.Ins().startX + WarDataMgr.Ins().grid.space*x + (WarDataMgr.Ins().grid.space>>1); // 最后括号括起来是因为>>的优先级是最低的
		}

		public static ToLocalY(y:number):number
		{
			return WarDataMgr.Ins().startY + WarDataMgr.Ins().grid.space*y + (WarDataMgr.Ins().grid.space>>1);
		}

		// 根据实际坐标计算出最近的格子坐标
		public static ToGridXY(localX:number, localY:number)
		{
			let space = WarDataMgr.Ins().grid.space;
			let x = Math.floor((localX - WarDataMgr.Ins().startX) / space);
			let y = Math.floor((localY - WarDataMgr.Ins().startY) / space);
			return [x, y];
		}

		public static ToGridX(localX:number)
		{
			let space = WarDataMgr.Ins().grid.space;
			let x = Math.floor((localX - WarDataMgr.Ins().startX) / space);
			return x;
		}

		public static ToGridY(localY:number)
		{
			let space = WarDataMgr.Ins().grid.space;
			let y = Math.floor((localY - WarDataMgr.Ins().startY) / space);
			return y;
		}

		// ---------------------------------------------------------------------- 检查XY是否在正常取值范围内
		public static CheckXYRangeValide(x:number, y:number)
		{
			if(x < 0 || y < 0)
				return false;
			
			if(x >= WarDataMgr.Ins().grid.numCols || y >= WarDataMgr.Ins().grid.numRows)
				return false;

			return true;
		}
	}
}