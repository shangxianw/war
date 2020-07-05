module war
{
	export class KingEntity extends EntityBase
	{
		public constructor()
		{
			super();
		}

		protected init()
		{
			this.entityType = Entity.King;
			this.anchorOffsetX = this.width >> 1;
			this.anchorOffsetY = this.height;
			DrawUtils.DrawEntityId(this);
		}

		protected destroy()
		{

		}
	}
}