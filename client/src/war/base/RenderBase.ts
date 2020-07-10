module war
{
	export abstract class RenderBase extends UIBase
	{
		public renderType:number;
		public rect:eui.Rect; // 大家都是这个形式

		public initAll()
		{
			this.width = 0;
			this.height = 0;
			this.renderType = Render.Bg;
			this.rect = new eui.Rect();
			this.addChild(this.rect);
			super.initAll();
		}

		public destroyAll()
		{
			super.destroyAll();
		}
	}
}