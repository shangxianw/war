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
			this.anchorOffsetX = this.width >> 1;
			this.anchorOffsetY = this.height;
			this.mc = new MovieClip();
			this.mc.initData("hero_10010", "hero_10010");
			this.mc.startPlay("stand4", - 1);
			this.addChild(this.mc);

			let rCom2:RangeCom = new RangeCom();
			rCom2.radius = 30;
			this.setCom(rCom2);
			DrawUtils.DrawHeroId(this);
			// DrawUtils.DrawGrigd(this);
			DrawUtils.DrawHeroAnchor(this);
		}

		protected destroy()
		{

		}

		// -------
	}
}