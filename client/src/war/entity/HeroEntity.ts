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
			// this.mc = new MovieClip();
			// this.mc.initData("hero_10010", "hero_10010");
			// this.mc.startPlay("run0", - 1);
			// this.addChild(this.mc);

			// let rCom2:RigidCom = new RigidCom();
			// rCom2.radius = 30;
			// this.setCom(rCom2);
			// DrawUtils.DrawGrigd(this);
			DrawUtils.DrawHeroId(this);
			DrawUtils.DrawHeroAnchor(this);
		}

		protected destroy()
		{

		}

		// -------
	}
}