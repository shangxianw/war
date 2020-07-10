module war
{
	export class RenderCom extends ComBase
	{
		public render:RenderBase;
		public parent:egret.DisplayObjectContainer
		protected init()
		{
			this.comType = Component.Render;
		}

		protected destroy()
		{
			if(this.render.parent != null)
				this.render.parent.removeChild(this.render);
			this.render.destroyAll();
			this.parent = null;
		}

		public setRender(uiobj:RenderBase, parent:egret.DisplayObjectContainer)
		{
			this.render = uiobj;
			this.parent = parent;
		}
	}
}