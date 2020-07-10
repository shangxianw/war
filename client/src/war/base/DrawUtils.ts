module war
{
	export class DrawUtils
	{
		public static isTest:boolean = true;
		public static DrawHasCode(entiy:EntityBase)
		{
			if(DrawUtils.isTest == false)
				return;
			let renderCom = entiy.getComponent(Component.Render) as RenderCom;
			if(renderCom == null)
				return;
			let a = new eui.Label();
			a.text = String(entiy.hasCode);
			a.size = 24;
			a.x = 0;
			a.y = 0;
			a.validateNow();
			a.anchorOffsetX = a.width>>1;
			a.anchorOffsetY = a.height>>1;

			a.textColor = 0x000000;
			renderCom.render.addChildAt(a, 999);
		}
	}
}