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
			
			let posCom = entity.getComponent(Component.Pos) as PosCom;
			if(posCom == null)
				return;
			
			let renderCom = entity.getComponent(Component.Render) as RenderCom;
			if(renderCom == null)
				return;

			renderCom.render.x = posCom.x;
			renderCom.render.y = posCom.y;
			renderCom.render.width = posCom.width;
			renderCom.render.height = posCom.height;
			renderCom.render.anchorOffsetX = posCom.width >> 1;
			renderCom.render.anchorOffsetY = posCom.height;
			renderCom.updateRender(posCom);
			DrawUtils.DrawHasCode(entity);
		}
	}
}