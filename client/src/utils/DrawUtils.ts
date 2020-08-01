module war
{
	export class DrawUtils
	{
		public static isTest:boolean = false;
		public static DrawHasCode(entity:EntityBase)
		{
			if(DrawUtils.isTest == false)
				return;
		}

		public static DrawRectCollision(render:RenderBase)
		{
			if(DrawUtils.isTest == false)
				return;
		}

		// ---------------------------------------------------------------------- 画中心点
		public static DrawAnchorCenter(render:RenderBase)
		{
			if(DrawUtils.isTest == false)
				return;
			
			if(render.collisionShape == null)
			{
				render.collisionShape = new egret.Shape();
				render.addChildAt(render.collisionShape, 999);
			}
				
			render.collisionShape.graphics.clear();
			render.collisionShape.graphics.beginFill(0xffff00, 1);
			render.collisionShape.graphics.lineStyle(2, 0x000000);
			render.collisionShape.anchorOffsetX = -render.anchorOffsetX;
			render.collisionShape.anchorOffsetY = -render.anchorOffsetY;
			render.collisionShape.graphics.drawCircle(0, 0, 5); // 这个是没有设置锚点的，所以直接在0，0上即可
			render.collisionShape.graphics.endFill();
		}
	}
}