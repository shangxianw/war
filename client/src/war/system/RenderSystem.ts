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
			let renderCom = entity.getComponent(Component.Render) as RenderCom;
			if(posCom == null || renderCom == null)
				return;
			
			renderCom.updatePos(posCom.x, posCom.y)
		}
	}
}