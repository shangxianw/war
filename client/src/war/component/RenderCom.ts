module war
{
	export class RenderCom extends ComBase
	{
		public render:RenderBase;
		protected init()
		{
			this.comType = Component.Render
		}

		protected destroy()
		{

		}

		public setRender(render:RenderBase)
		{
			this.render = render;
		}

		public updatePos(x:number, y:number)
		{
			this.render.x = x
			this.render.y = y
		}
	}
}