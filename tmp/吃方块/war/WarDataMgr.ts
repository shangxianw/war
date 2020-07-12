module war
{
	export class WarDataMgr extends DataBase
	{	
		public entityMap:Hash<number, EntityBase>;
		public lastTime:number;
		public MaxAiCount:number;

		public sysArray:SystemBase[];
		public renderSystem:RenderSystem;
		public inputSystem:InputSystem;
		public decaySystem:DecaySystem;
		public aiSystem:AISystem;
		public collisionSystem:CollisionSystem;

		public mouseX:number;
		public mouseY:number;
		public warPanel:WarPanel;
		public bgEntity:EntityBase;

		protected init()
		{
			this.lastTime = 0;
			this.MaxAiCount = 20;
			this.sysArray = [];
			this.entityMap = new Hash<number, EntityBase>();
			this.mouseX = null;
			this.mouseY = null;
			this.warPanel = null;
			this.bgEntity = null;

			this.renderSystem = new RenderSystem();
			this.sysArray.push(this.renderSystem);
			this.inputSystem = new InputSystem();
			this.sysArray.push(this.inputSystem);
			this.decaySystem = new DecaySystem();
			this.sysArray.push(this.decaySystem);
			this.aiSystem = new AISystem();
			this.sysArray.push(this.aiSystem);
			this.collisionSystem = new CollisionSystem();
			this.sysArray.push(this.collisionSystem);
		}

		protected destroy()
		{
			this.bgEntity = null;
			this.destroyEntityMap();
			this.entityMap = null;

			this.renderSystem.destroyAll();
			this.renderSystem = null;
			this.inputSystem.destroyAll();
			this.inputSystem = null;
			this.decaySystem.destroyAll();
			this.decaySystem = null;
			this.aiSystem.destroyAll();
			this.aiSystem = null;
			this.collisionSystem.destroyAll();
			this.collisionSystem = null;
			this.sysArray.length = 0;
		}

		public startWar()
		{
			egret.startTick(this.update, this);
		}

		public endWar()
		{
			egret.stopTick(this.update, this);
			this.bgEntity = null;
			this.destroyEntityMap();
			this.mouseX = null;
			this.mouseY = null;
			this.warPanel.OnEndWar();
		}

		public update(currTime:number = null):boolean
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
				// this.decaySystem.update(entity, deltaTime);
				this.aiSystem.update(entity, deltaTime);
				this.collisionSystem.update(entity, deltaTime)

				this.renderSystem.update(entity, deltaTime);
			}
			return true;
		}

		// ---------------------------------------------------------------------- 实体
		public addEntity(entity:EntityBase)
		{
			if(this.entityMap.has(entity.hasCode) == true)
				return false;
			this.entityMap.set(entity.hasCode, entity);
		}

		public removeEntity(hasCode:number):EntityBase
		{
			if(this.entityMap.has(hasCode) == false)
				return null;
			return this.entityMap.remove(hasCode);
		}

		private destroyEntityMap()
		{
			for(let item of this.entityMap.values())
			{
				item.destroyAll()
			}
			this.entityMap.destroy();
		}

		private static instance:WarDataMgr;
		public static Ins()
		{
			if(WarDataMgr.instance == null)
				WarDataMgr.instance = new WarDataMgr();
			return WarDataMgr.instance;
		}
	}
}