module war
{
	export class ActionCom extends ComBase
	{
		public hasChanged:boolean;
		private action:number;
		private direction:number;
		protected init()
		{
			this.componentId = COMPONENT.ACTION;
			this.direction = DIRECTION.UP;
			this.action = ACTION.STAND;
			this.hasChanged = true;
		}

		protected destroy()
		{
			
		}

		public setActionAndDir(action:number, dir:number)
		{
			this.direction = dir;
			this.action = action;
			this.hasChanged = true;
		}

		public setAction(action:number)
		{
			this.action = action;
			this.hasChanged = true;
		}

		public setDir(dir:number)
		{
			this.direction = dir;
			this.hasChanged = true;
		}

		public getAction()
		{
			return this.action;
		}

		public getDir()
		{
			return this.direction;
		}
	}
}