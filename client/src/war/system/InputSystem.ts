module war
{
	export class InputSystem extends SystemBase
	{
		protected init()
		{
			this.sysType = System.Input;
		}

		protected destroy()
		{

		}
		
		public update(entity:EntityBase, deltaTime:number)
		{
			if(entity == null)
				return;
				
			let ctrlCom = entity.getComponent(Component.Ctrl) as ControlCom;
			if(ctrlCom == null)
				return;
			
			let posCom = entity.getComponent(Component.Pos) as PosCom;
			if(posCom == null)
				return;
			
			let mouseX = WarDataMgr.Ins().mouseX;
			let mouseY = WarDataMgr.Ins().mouseY;
			if(mouseX == null || mouseY == null)
				return;
			
			let renderCom = entity.getComponent(Component.Render) as RenderCom

			if(mouseX - posCom.width/2 < 0)
				posCom.setX(posCom.width/2);
			else if(mouseX + posCom.width/2 > renderCom.render.parent.width)
				posCom.setX(renderCom.render.parent.width - posCom.width/2);
			else
				posCom.setX(mouseX)

			if(mouseY - posCom.height/2 < 0)
				posCom.setY(posCom.height/2);
			else if(mouseY + posCom.height/2 > renderCom.render.parent.height)
				posCom.setY(renderCom.render.parent.height - posCom.height/2);
			else
				posCom.setY(mouseY)
			return;
		}
	}
}