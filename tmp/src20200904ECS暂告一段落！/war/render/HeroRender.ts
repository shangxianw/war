module war
{
	export class HeroRender extends RenderBase
	{
		private mc:MovieClip;
		protected init()
		{
			this.renderType = Render.Hero;
			this.mc = new MovieClip()
			this.addChild(this.mc)
			this.width = this.height = 0;
		}

		protected destroy()
		{

		}

		public initData(heroId:number)
		{
			this.mc.initData(`hero_${heroId}`, `hero_${heroId}`, "run4", -1)
		}

		public updateRender()
		{

		}
	}
}