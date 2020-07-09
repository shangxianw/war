module war
{
	export class World extends DataBase
	{
		public lastTime:number;
		public sysArray:SystemBase[];
		public speedSystem:SpeedSystem;
		public moveSystem:MoveSystem;
		public pathSystem:PathSystem;
		public renderSystem:RenderSystem;
		public attackSystem:AttackSystem;
		public nextActionSystem:NextActionSystem;

		protected init()
		{
			this.lastTime = 0;
			this.sysArray = [];

			this.nextActionSystem = new NextActionSystem();
			this.sysArray.push(this.nextActionSystem);

			this.speedSystem = new SpeedSystem();
			this.sysArray.push(this.speedSystem);

			this.moveSystem = new MoveSystem();
			this.sysArray.push(this.moveSystem);

			this.pathSystem = new PathSystem();
			this.sysArray.push(this.pathSystem);

			this.renderSystem = new RenderSystem();
			this.sysArray.push(this.renderSystem);

			this.attackSystem = new AttackSystem();
			this.sysArray.push(this.attackSystem);

		}

		protected destroy()
		{
			DataUtils.DestroyDataBaseClass(this.speedSystem, true);
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
				
				this.nextActionSystem.update(entity, deltaTime);
				this.speedSystem.update(entity, deltaTime);
				this.moveSystem.update(entity, deltaTime);
				this.pathSystem.update(entity, deltaTime);
				this.renderSystem.update(entity, deltaTime);
				this.attackSystem.update(entity, deltaTime);
			}
		}
	}
}