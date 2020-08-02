module war
{
	export class DrawUtils
	{
		public static isTest:boolean = false;

		public static DrawMapGrid(nCols:number, nRows:number)
		{
			let shiftX = WarDataMgr.Ins().MapStartX
			let shiftY = WarDataMgr.Ins().MapStartY
			let shape = new egret.Shape()
			shape.graphics.lineStyle(1, 0xff0000)
			for(let i=0, len=nCols; i<len; i++)
			{
				for(let j=0, len2=nRows; j<len2; j++)
				{
					let size = WarDataMgr.Ins().CeilSize;
					let x = i * size + shiftX
					let y = j * size + shiftY
					shape.graphics.drawRect(x, y, size, size)
				}
			}
			shape.graphics.endFill()
			LayerManager.Ins().map.addChild(shape)
		}

		public static DrawPath(entity:EntityBase)
		{
			if(this.isTest == false)
				return;
			
			let 
		}

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