module war
{
	export class World
	{
		public lastTime:number;
		public sysArray:SystemBase[];

		public moveSystem:MoveSystem
		public renderSystem:RenderSystem
		public speedSystem:SpeedSystem
		public constructor()
		{
			this.init()
		}

		protected init()
		{
			this.lastTime = 0;
			this.sysArray = [];

			this.moveSystem = new MoveSystem()
			this.sysArray.push(this.moveSystem)

			this.renderSystem = new RenderSystem()
			this.sysArray.push(this.renderSystem)

			this.speedSystem = new SpeedSystem()
			this.sysArray.push(this.speedSystem)
		}

		public destroy()
		{
			this.moveSystem.destroyAll()
			this.moveSystem = null

			this.renderSystem.destroyAll()
			this.renderSystem = null

			this.speedSystem.destroyAll()
			this.speedSystem = null

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
				
				this.speedSystem.update(entity, deltaTime)
				this.moveSystem.update(entity, deltaTime)

				this.renderSystem.update(entity, deltaTime)
			}
		}
	}
}