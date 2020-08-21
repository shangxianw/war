module war
{
	export class World
	{
		public sysArray:SystemBase[];

		public moveSystem:MoveSystem
		public renderSystem:RenderSystem
		public speedSystem:SpeedSystem
		public pathSystem:PathSystem
		public constructor()
		{
			this.init()
		}

		protected init()
		{
			this.lastLogic = 0
			this.updateLogic = 0
			this.lastRender = 0
			this.updateRender = 0

			this.sysArray = [];

			this.moveSystem = new MoveSystem()
			this.sysArray.push(this.moveSystem)

			this.renderSystem = new RenderSystem()
			this.sysArray.push(this.renderSystem)

			this.speedSystem = new SpeedSystem()
			this.sysArray.push(this.speedSystem)

			this.pathSystem = new PathSystem()
			this.sysArray.push(this.pathSystem)
		}

		public destroy()
		{
			this.moveSystem.destroyAll()
			this.moveSystem = null

			this.renderSystem.destroyAll()
			this.renderSystem = null

			this.speedSystem.destroyAll()
			this.speedSystem = null

			this.pathSystem.destroyAll()
			this.pathSystem = null;

			this.sysArray.length = 0;
		}

		private lastLogic:number = 0
		private updateLogic:number = 0
		public logicLoop(t:number)
		{
			let dt = t - this.lastLogic
			let delay = 1000 / FrameFps.Logic
			this.updateLogic += dt
			if(this.updateLogic < delay)
				return true
			
			this.lastLogic = t
			let count = Math.floor(this.updateLogic / delay)
			this.updateLogic -= delay * count

			let warData = WarDataMgr.Ins();
			let entityArray = DataUtils.CopyArray(warData.entityMap.values());
			let entity:EntityBase;
			for(let i=0, len=entityArray.length; i<len; i++)
			{
				entity = entityArray[i];
				if(entity == null)
					continue;
				
				this.speedSystem.update(entity, dt)
				this.moveSystem.update(entity, dt)
				this.pathSystem.update(entity, dt)
			}
		}

		private lastRender:number = 0
		private updateRender:number = 0
		public renderLoop(t:number)
		{
			let dt = t - this.lastRender
			let delay = 1000 / FrameFps.Render
			this.updateRender += dt
			if(this.updateRender < delay)
				return true
			
			this.lastRender = t
			let count = Math.floor(this.updateRender / delay)
			this.updateRender -= delay & count

			let warData = WarDataMgr.Ins();
			let entityArray = DataUtils.CopyArray(warData.entityMap.values());
			let entity:EntityBase;
			for(let i=0, len=entityArray.length; i<len; i++)
			{
				entity = entityArray[i];
				if(entity == null)
					continue;
				this.renderSystem.update(entity, dt)
			}
		}
	}
}