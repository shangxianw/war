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
		
		public update(entity:EntityBase, dt:number)
		{
			if(entity == null)
				return;
			
			let renderCom = entity.getComponent(Component.Render) as RenderCom;
			if(renderCom == null)
				return;
			
			let posCom = entity.getComponent(Component.Pos) as PosCom;
			let pathCom = entity.getComponent(Component.Path) as PathCom

			if(posCom != null)
			{
				// let distance = posCom.x - renderCom.render.x
				// renderCom.render.x += distance / dt

				// let distancey = posCom.y - renderCom.render.y
				// renderCom.render.y += distancey / dt
				renderCom.render.x = posCom.x
				renderCom.render.y = posCom.y
			}

			DrawUtils.DrawPath(entity)
			DrawUtils.DrawAnchorCenter(entity)
			DrawUtils.DrawAttackRange(entity)
			DrawUtils.DrawHasCode(entity)
		}
	}
}