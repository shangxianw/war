module war
{
	export class RenderCom extends ComBase
	{
		public render:RenderBase;
		protected init()
		{
			this.comType = Component.Render;
		}

		protected destroy()
		{
			this.render.destroyAll();
			if(this.render.parent != null)
				this.render.parent.removeChild(this.render);
		}

		public setRender(render:RenderBase)
		{
			this.render = render;
		}

		public updateRender(posCom:PosCom)
		{
			this.render.updateRender(posCom);
		}
	}
}