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
			this.anchorOffsetX = this.width >> 1;
			this.anchorOffsetY = this.height;
			this.mc = new MovieClip();
			this.mc.initData("hero_10010", "hero_10010");
			this.mc.startPlay("run0", - 1);
			this.mc.visible = false;
			this.addChild(this.mc);

			DrawUtils.DrawHeroId(this);
			
		}

		protected destroy()
		{

		}

		// -------
	}
}