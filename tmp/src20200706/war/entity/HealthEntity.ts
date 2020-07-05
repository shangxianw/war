module war
{
	export class HealthBar extends UIBase
	{
		public entityId:number;
		public constructor()
		{
			super("HealthBarSkin");
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
	}
}