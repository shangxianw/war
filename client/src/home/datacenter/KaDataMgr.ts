module home
{
	export class KaDataMgr extends DataBase
	{
		public kaMap:Hash<number, KaDataInfo>; // 已有的卡
		public teamArray:number[]; // 卡组
		protected init()
		{
			this.teamArray = [];
			this.kaMap = new Hash<number, KaDataInfo>();

		}

		protected destroy()
		{
			this.teamArray.length = 0;
			DataUtils.DestroyDataBaseMap(this.kaMap);
		}

		public addKa(id:number, level:number)
		{
			if(this.kaMap.has(id) == true)
			{
				LogUtils.Error(`已存在卡`);
				return false;
			}

			let ka = PoolManager.Ins().pop(KaDataInfo) as KaDataInfo;
			ka.packData(id, level);
			this.kaMap.set(id, ka);
			return true;
		}

		public removeKa(id:number)
		{
			if(this.kaMap.has(id) == false)
			{
				LogUtils.Error(`已存在卡`);
				return false;
			}

			let ka = this.kaMap.remove(id);
			ka.destroyAll();
			PoolManager.Ins().push(ka);
			return true;
		}

		public getKa(kaId:number):KaDataInfo
		{
			return this.kaMap.get(kaId);
		}

		// ---------------------------------------------------------------------- 组装前端数据
		public packDataClient()
		{
			let herosIdArray = [10010, 10040, 10050, 10070, 10080, 10090, 10100, 10110];
			let herosLvArray = [1,1,1,1,2,2,2,2];

			let index = 0;
			for(let id of herosIdArray)
			{
				this.addKa(id, herosLvArray[index]);
				index++;
			}
			this.teamArray = herosIdArray;
		}
	}
}