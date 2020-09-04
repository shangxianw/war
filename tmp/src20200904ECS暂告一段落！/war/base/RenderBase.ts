module war
{
	export abstract class RenderBase extends UIBase
	{
		public renderType:number;
		public hasCodeLb:eui.Label;

		public initAll()
		{
			super.initAll();
		}

		public destroyAll()
		{
			super.destroyAll();
		}

		public abstract updateRender(data:ComBase);
	}
}