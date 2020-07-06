module war
{
	export class EntityInfoView extends UIBase
	{
		public entityId:number;
		private healthBar:eui.ProgressBar;
		public constructor()
		{
			super("EntityInfoViewSkin");
		}

		protected init()
		{
			this.anchorOffsetX = this.width >> 1;
			this.anchorOffsetY = this.height >> 1;
			// DrawUtils.DrawEntityId(this);
		}

		protected destroy()
		{

		}

		public initData(entityId:number, value:number, max:number)
		{
			this.entityId = entityId;
			this.healthBar.minimum = 0;
			this.healthBar.value = value;
			this.healthBar.maximum = max;

			let entity:EntityBase = WarDataMgr.Ins().entityMap.get(this.entityId);
			if(entity == null)
			{
				LogUtils.Error(`不存在对应实体 ${entityId}`);
				return false;
			}

			this.addAttrCB(entity.healthCom, "hp", this.OnHpUpdate, this);
			
		}

		public updatePos()
		{
			let entity = WarDataMgr.Ins().entityMap.get(this.entityId);
			if(entity == null)
				return;
			
			this.healthBar.y = -entity.mc.height;
		}

		private OnHpUpdate()
		{
			let entity:EntityBase = WarDataMgr.Ins().entityMap.get(this.entityId);
			this.healthBar.value = entity.healthCom.hp;
		}
	}
}