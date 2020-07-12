module war
{
	export class World
	{
		public lastTime:number;
		public sysArray:SystemBase[];
		public constructor()
		{
			this.init()
		}

		protected init()
		{
			this.lastTime = 0;
			this.sysArray = [];
		}

		public destroy()
		{
			this.sysArray.length = 0;
		}

		public update(currTime:number)
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
		}
	}
}