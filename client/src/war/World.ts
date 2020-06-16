module war
{
	export class World extends DataBase
	{
		public sysArray:SystemBase[];
		public inputSystem:InputSystem;
		public moveSystem:MoveSystem;
		public actionSystem:ActionSystem;
		public collisionSystem:CollisionSystem;
		public pathSystem:PathSystem;
		public speedSystem:SpeedSystem;

		protected init()
		{
			this.sysArray = [];
			this.inputSystem = new InputSystem();
			this.sysArray.push(this.inputSystem);

			this.moveSystem = new MoveSystem();
			this.sysArray.push(this.moveSystem); 

			this.pathSystem = new PathSystem();
			this.sysArray.push(this.pathSystem);

			this.speedSystem = new SpeedSystem();
			this.sysArray.push(this.speedSystem);

			this.actionSystem = new ActionSystem();
			this.sysArray.push(this.actionSystem);

			this.collisionSystem = new CollisionSystem();
			this.sysArray.push(this.collisionSystem);
		}

		protected destroy()
		{
			DataUtils.DestroyDataBaseClass(this.inputSystem, true);
			DataUtils.DestroyDataBaseClass(this.moveSystem, true);
			DataUtils.DestroyDataBaseClass(this.actionSystem, true);
			DataUtils.DestroyDataBaseClass(this.collisionSystem, true);
			
			this.sysArray.length = 0;
		}

		public update(deltaTime:number)
		{
			this.inputSystem.update(deltaTime);
			let warData = WarDataMgr.Ins();
			let entityArray = DataUtils.CopyArray(warData.entityMap.values());
			let entity:EntityBase;
			for(let i=0, len=entityArray.length; i<len; i++)
			{
				entity = entityArray[i];
				if(entity == null)
					continue;
				
				this.speedSystem.update(entity, deltaTime);
				this.moveSystem.update(entity, deltaTime);
				this.pathSystem.update(entity, deltaTime);
				this.actionSystem.update(entity, deltaTime);
				this.collisionSystem.update(entity, deltaTime);
			}
		}

		public updateSystem(deltaTime:number)
		{
			let warData = WarDataMgr.Ins();
			for(let system of this.sysArray)
			{
				system.update(deltaTime);
			}
		}
	}
}