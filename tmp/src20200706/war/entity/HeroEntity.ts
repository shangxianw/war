module war
{
	export class HeroEntity extends EntityBase
	{
		public constructor()
		{
			super();
		}

		protected init()
		{
			this.entityType = ENTITY.HERO;
			this.anchorOffsetX = this.width >> 1;
			this.anchorOffsetY = this.height;
			DrawUtils.DrawEntityId(this);
		}

		protected destroy()
		{

		}
	}
}