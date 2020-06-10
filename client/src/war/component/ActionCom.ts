module war
{
	export class ActionCom extends ComBase
	{
		public hasChanged:boolean;
		public action:number;
		public direction:number;
		protected init()
		{
			this.componentId = COMPONENT.ACTION;
			this.direction = DIRECTION.DOWN;
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

		public setDirByXY(x:number, y:number)
		{
			let oldDir = this.direction;
			if(x == DIRECTION.NONE && y == DIRECTION.NONE)
				return;
			else if(x == DIRECTION.RIGHT && y == DIRECTION.NONE)
				this.direction = DIRECTION.RIGHT;
			else if(x == DIRECTION.LEFT && y == DIRECTION.NONE)
				this.direction = DIRECTION.LEFT;
			else if(x == DIRECTION.NONE && y == DIRECTION.UP)
				this.direction = DIRECTION.UP;
			else if(x == DIRECTION.NONE && y == DIRECTION.DOWN)
				this.direction = DIRECTION.DOWN;
			else if(x == DIRECTION.LEFT && y == DIRECTION.UP)
				this.direction = DIRECTION.LEFT_UP;
			else if(x == DIRECTION.LEFT && y == DIRECTION.DOWN)
				this.direction = DIRECTION.LEFT_DOWN;
			else if(x == DIRECTION.RIGHT && y == DIRECTION.UP)
				this.direction = DIRECTION.RIGHT_UP;
			else if(x == DIRECTION.RIGHT && y == DIRECTION.DOWN)
				this.direction = DIRECTION.DOWN;
			
			if(oldDir == this.direction)
				return;
			this.hasChanged = true;
		}

		public setDir(dir:number)
		{
			this.direction = dir;
			this.hasChanged = true;
		}
	}
}