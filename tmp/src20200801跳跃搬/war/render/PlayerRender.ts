module war
{
	export class PlayerRender extends RenderBase
	{
		public showImg:eui.Image;
		protected init()
		{
			this.renderType = Render.Player;
			if(DrawUtils.isTest == true)
			{
				this.collisionShape = new egret.Shape();
				this.addChildAt(this.collisionShape, 0);
				DrawUtils.DrawRectCollision(this);
				DrawUtils.DrawAnchorCenter(this);
			}
			this.showImg = new eui.Image;
			this.addChild(this.showImg);
			this.setShowImg("heroicon_30100_png");
		}

		protected destroy()
		{
			
		}

		public updateRender(posCom:PosCom)
		{
			DrawUtils.DrawRectCollision(this);
			DrawUtils.DrawAnchorCenter(this);
		}

		public setShowImg(source:string)
		{
			this.showImg.source = source;
		}
	}
}