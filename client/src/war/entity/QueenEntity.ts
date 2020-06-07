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
			this.anchorOffsetX = this.width >> 1;
			this.anchorOffsetY = this.height;
			this.mc = new MovieClip();
			this.mc.initData("hero_10010", "hero_10010");
			this.mc.startPlay("stand4", - 1);
			this.addChild(this.mc);

			let rCom2:RigidCom = new RigidCom();
			rCom2.radius = 30;
			this.setCom(rCom2);
			DrawUtils.DrawHeroId(this);
			DrawUtils.DrawHeroAnchor(this);
			DrawUtils.DrawGrigd(this);
		}

		protected destroy()
		{

		}

		// -------
	}
}