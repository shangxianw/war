module war
{
	export class RenderCom extends ComBase
	{
		public render:RenderBase;
		public pathShap:egret.Shape
		public anchorShap:egret.Shape
		public attackShap:egret.Shape;
		public hasCodeLb:eui.Label;
		protected init()
		{
			this.comType = Component.Render
		}

		protected destroy()
		{
			this.render.destroyAll()
			this.render.parent.removeChild(this.render)
			this.pathShap.parent.removeChild(this.pathShap)
			this.anchorShap.parent.removeChild(this.anchorShap)
			this.attackShap.parent.removeChild(this.attackShap)
			this.hasCodeLb.parent.removeChild(this.hasCodeLb)
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
