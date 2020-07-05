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

		public initHealth(value:number, max:number)
		{
			this.healthBar.minimum = 0;
			this.healthBar.value = value;
			this.healthBar.maximum = max;
		}

		public updateHealth(value:number, max?:number)
		{
			this.healthBar.value = value;
			if(max != null)
				this.healthBar.maximum = max;
		}

		public updatePos()
		{
			let entity = WarDataMgr.Ins().entityMap.get(this.entityId);
			if(entity == null)
				return;
			
			this.healthBar.y = -entity.mc.height;
		}
	}
}