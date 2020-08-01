module war
{
	export class StepRender extends RenderBase
	{
		public showImg:eui.Image;
		protected init()
		{
			this.renderType = Render.Step;
			if(DrawUtils.isTest == true)
			{
				this.collisionShape = new egret.Shape();
				this.addChildAt(this.collisionShape, 0);
				DrawUtils.DrawRectCollision(this);
				DrawUtils.DrawAnchorCenter(this);
			}
			this.showImg = new eui.Image;
			this.showImg.top = this.showImg.bottom = this.showImg.left = this.showImg.right = 0;
			this.showImg.scale9Grid = new egret.Rectangle(14, 10, 12, 22);
			this.addChild(this.showImg);
			this.setShowImg("aaa_png")
		}

		protected destroy()
		{
			
		}

		public setShowImg(source:string)
		{
			this.showImg.source = source;
		}

		public updateRender(posCom:PosCom)
		{
			// DrawUtils.DrawRectCollision(this);
			DrawUtils.DrawAnchorCenter(this);
		}
	}
}