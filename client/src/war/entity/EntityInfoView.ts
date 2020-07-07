module war
{
	export class EntityInfoViewData extends DataBase
	{
		public entityId:number;
		public value:number;
		public max:number;
		protected destroy()
		{

		}

		public packData(entityId:number, value:number, max:number)
		{
			this.entityId = entityId;
			this.value = value;
			this.max = max;
		}
	}

	export class EntityInfoView extends UIBase
	{
		private healthBar:eui.ProgressBar;

		public info:EntityInfoViewData;
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

		public initView()
		{
			this.healthBar.minimum = 0;
			this.healthBar.value = this.info.value;
			this.healthBar.maximum = this.info.max;

			let entity:EntityBase = WarDataMgr.Ins().entityMap.get(this.info.entityId);
			if(entity == null)
			{
				LogUtils.Error(`不存在对应实体 ${this.info.entityId}`);
				return false;
			}

			this.addAttrCB(entity.healthCom, "hp", this.OnHpUpdate, this);
			1;
		}

		public updatePos()
		{
			let entity = WarDataMgr.Ins().entityMap.get(this.info.entityId);
			if(entity == null)
				return;
			
			this.healthBar.y = -entity.mc.height;
		}

		private OnHpUpdate()
		{
			let entity:EntityBase = WarDataMgr.Ins().entityMap.get(this.info.entityId);
			this.healthBar.value = entity.healthCom.hp;
		}
	}
}