module war
{
	export class RigidCom extends ComBase
	{
		public radius:number;
		protected init()
		{
			this.componentId = COMPONENT.GRIGD;
			this.radius = 0;
		}

		protected destroy()
		{
			
		}
	}
}