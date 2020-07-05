module war
{
	export class QueenEntity extends EntityBase
	{
		public constructor()
		{
			super();
		}

		protected init()
		{
			this.entityType = Entity.Queen;
			this.anchorOffsetX = this.width >> 1;
			this.anchorOffsetY = this.height;
			DrawUtils.DrawEntityId(this);
		}

		protected destroy()
		{

		}
	}
}