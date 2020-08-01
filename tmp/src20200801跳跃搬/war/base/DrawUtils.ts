module war
{
	export class DrawUtils
	{
		public static isTest:boolean = false;
		public static DrawHasCode(entity:EntityBase)
		{
			if(DrawUtils.isTest == false)
				return;
			
			let renderCom = entity.getComponent(Component.Render) as RenderCom;
			let render = renderCom.render;
			if(render.hasCodeLb == null)
			{
				render.hasCodeLb = new eui.Label;
				render.hasCodeLb.size = 50;
				render.hasCodeLb.stroke = 2;
				render.addChildAt(render.hasCodeLb, 999);
			}
			render.hasCodeLb.text = `${entity.hasCode}`;
			render.hasCodeLb.x = (render.width>>1) - render.hasCodeLb.width/2;
			render.hasCodeLb.y = render.height>>1;
		}

		public static DrawRectCollision(render:RenderBase)
		{
			if(DrawUtils.isTest == false)
				return;
			
			if(render.collisionShape == null)
			{
				render.collisionShape = new egret.Shape();
				render.addChildAt(render.collisionShape, 0);
			}
				
			render.collisionShape.graphics.clear();
			render.collisionShape.graphics.beginFill(0xffff00, 1);
			render.collisionShape.graphics.lineStyle(2, 0x000000);
			render.collisionShape.graphics.drawRect(0, 0, render.width, render.height); // 这个是没有设置锚点的，所以直接在0，0上即可
			render.collisionShape.graphics.endFill();
		}

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

		public static standerLineShap:egret.Shape;
		public static DrawStandardLine(y:number, parent:egret.DisplayObjectContainer=null)
		{
			if(this.standerLineShap == null)
			{
				this.standerLineShap = new egret.Shape();
				parent.addChild(this.standerLineShap);
			}
			this.standerLineShap.graphics.clear();
			this.standerLineShap.graphics.lineStyle(5, 0xff0000);
			this.standerLineShap.graphics.moveTo(0, y);
			this.standerLineShap.graphics.lineTo(WarDataMgr.Ins().StageWidth, y);
			this.standerLineShap.graphics.endFill();
		}
	}
}