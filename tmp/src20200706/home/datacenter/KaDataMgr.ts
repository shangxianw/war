module home
{
	export class KaDataMgr extends DataBase
	{
		protected init()
		{

		}

		protected destroy()
		{
		
		}

		public addKa(id:number, level:number)
		{
			let kaMap = HomeDataMgr.Ins().myData.kaMap;
			if(kaMap.has(id) == true)
			{
				LogUtils.Error(`已存在此`);
				return false;
			}

			let ka = PoolManager.Ins().pop(KaData) as KaData;
			ka.packData(id, level);
			kaMap.set(id, ka);
			return true;
		}

		public removeKa(id:number)
		{
			let kaMap = HomeDataMgr.Ins().myData.kaMap;
			if(kaMap.has(id) == false)
			{
				LogUtils.Error(`不存在卡`);
				return false;
			}

			let ka = kaMap.remove(id);
			ka.destroyAll();
			PoolManager.Ins().push(ka);
			return true;
		}
		
	}
}