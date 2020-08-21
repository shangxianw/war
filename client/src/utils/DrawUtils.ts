module war
{
	export class DrawUtils
	{
		public static isTest:boolean = true;

		public static DrawMapGrid(nCols:number, nRows:number)
		{
			if(this.isTest == false)
				return;
			let shiftX = WarDataMgr.Ins().MapStartX
			let shiftY = WarDataMgr.Ins().MapStartY
			let shape = new egret.Shape()
			let shape2 = new egret.Shape()
			shape.graphics.lineStyle(0.5, 0xff0000)
			shape2.graphics.beginFill(0xff0000, 0.5)
			for(let i=0, len=nCols; i<len; i++)
			{
				for(let j=0, len2=nRows; j<len2; j++)
				{
					let size = WarDataMgr.Ins().CeilSize;
					let x = i * size + shiftX
					let y = j * size + shiftY
					let node = WarDataMgr.Ins().grid.getNode(i, j)
					if(node.walkable == false)
						shape2.graphics.drawRect(x, y, size, size)
					shape.graphics.drawRect(x, y, size, size)
				}
			}
			shape.graphics.endFill()
			shape2.graphics.endFill()
			LayerManager.Ins().war.map.addChild(shape)
			LayerManager.Ins().war.map.addChild(shape2)
		}

		public static DrawPath(entity:EntityBase)
		{
			if(this.isTest == false)
				return;
			
			let renderCom = entity.getComponent(Component.Render) as RenderCom;
			let posCom = entity.getComponent(Component.Pos) as PosCom;
			let pathCom = entity.getComponent(Component.Path) as PathCom
			if(pathCom == null || posCom == null || renderCom == null)
				return;

			if(renderCom.pathShap == null)
			{
				renderCom.pathShap = new egret.Shape
				LayerManager.Ins().war.map.addChild(renderCom.pathShap)
			}

			renderCom.pathShap.graphics.clear()
			renderCom.pathShap.graphics.lineStyle(2, 0xffff00)
			renderCom.pathShap.graphics.moveTo(posCom.x, posCom.y)
			for(let node of pathCom.path)
			{
				let localX = WarUtils.GridX2LocalX(node.x)
				let localY = WarUtils.GridY2LocalY(node.y)
				renderCom.pathShap.graphics.lineTo(localX, localY)
			}
			renderCom.pathShap.graphics.endFill()
			
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