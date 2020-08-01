module war
{
	export class World
	{
		public lastTime:number;
		public sysArray:SystemBase[];

		public gravitySystem:GravitySystem;
		public renderSystem:RenderSystem;
		public moveSystem:MoveSystem;
		public collisionSystem:CollisionSystem;
		public inputSystem:InputSystem;
		public cameraSystem:CameraSystem;
		public aiSystem:AISystem;
		public constructor()
		{
			this.init()
		}

		protected init()
		{
			this.lastTime = 0;
			this.sysArray = [];

			this.renderSystem = new RenderSystem();
			this.moveSystem = new MoveSystem();
			this.gravitySystem = new GravitySystem();
			this.collisionSystem = new CollisionSystem();
			this.inputSystem = new InputSystem();
			this.cameraSystem = new CameraSystem();
			this.aiSystem = new AISystem();

			this.sysArray.push(this.moveSystem);
			this.sysArray.push(this.gravitySystem);
			this.sysArray.push(this.renderSystem);
			this.sysArray.push(this.collisionSystem);
			this.sysArray.push(this.inputSystem);
			this.sysArray.push(this.cameraSystem);
			this.sysArray.push(this.aiSystem);
		}

		public destroy()
		{
			this.sysArray.length = 0;

			this.renderSystem.destroyAll();
			this.moveSystem.destroyAll();
			this.gravitySystem.destroyAll();
			this.collisionSystem.destroyAll();
			this.inputSystem.destroyAll();
			this.cameraSystem.destroyAll();
			this.aiSystem.destroyAll();

			this.renderSystem = null;
			this.moveSystem = null;
			this.gravitySystem = null;
			this.collisionSystem = null;
			this.inputSystem = null;
			this.cameraSystem = null;
			this.aiSystem = null;
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
				
				this.inputSystem.update(entity, deltaTime);
				this.moveSystem.update(entity, deltaTime);
				this.gravitySystem.update(entity, deltaTime);
				this.collisionSystem.update(entity, deltaTime);
				this.aiSystem.update(entity, deltaTime);
				
				this.cameraSystem.update(entity, deltaTime);
				this.renderSystem.update(entity, deltaTime);
			}
			DrawUtils.DrawStandardLine(WarDataMgr.Ins().currStepLevel);
		}
	}
}