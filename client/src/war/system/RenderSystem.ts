module war
{
	export class RenderSystem extends SystemBase
	{
		protected init()
		{
			this.sysType = System.Render;
		}
		
		protected destroy()
		{

		}
		
		public update(entity:EntityBase, deltaTime:number)
		{
			if(entity == null)
				return;
			
			let renderCom = entity.getComponent(Component.Render) as RenderCom;
			if(renderCom == null)
				return;
			
			let posCom = entity.getComponent(Component.Pos) as PosCom;
			if(posCom == null)
				return;
			
			let render = renderCom.render;
			render.scaleX = posCom.scaleX;
			render.scaleY = posCom.scaleY;
			render.x = posCom.x;
			render.y = posCom.y;

			render.rect.anchorOffsetX = posCom.anchorX;
			render.rect.anchorOffsetY = posCom.anchorY;
			render.rect.width = posCom.width;
			render.rect.height = posCom.height;
			render.rect.fillColor = posCom.color;

			if(entity.entityType == Entity.Bg)
			{
				posCom.alpha = posCom.alpha - 2 * deltaTime;
				render.rect.alpha = posCom.alpha;
			}
		}
	}
}