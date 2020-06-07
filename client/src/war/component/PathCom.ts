module war
{
	export class PathCom extends ComBase
	{
		public currStep:number;
		private path:astar.Node[];
		protected init()
		{
			this.componentId = COMPONENT.PATH;
			this.path = [];
			this.currStep = -1;
		}

		protected destroy()
		{
			this.destroyPath();
			this.path.length = 0;
		}

		public setPath(path:astar.Node[])
		{
			this.destroyPath();
			this.path = path;
			this.currStep = 0;
		}

		public getPath()
		{
			return this.path;
		}

		public getLeftPath()
		{
			return this.path.slice(Math.max(this.currStep-1, 0));
		}

		public getEndNode()
		{
			return this.path[this.path.length - 1];
		}

		public getCurr()
		{
			return this.path[this.currStep];
		}

		public getLast()
		{
			return this.path[this.currStep-1];
		}

		public getNext()
		{
			return this.path[this.currStep+1];
		}

		public getEnd()
		{
			return this.path[this.path.length-1];
		}

		public toNext()
		{
			this.currStep++;
			return this.getCurr();
		}

		private destroyPath()
		{
			for(let node of this.path)
			{
				if(node == null)
					continue;
				node.destroy();
				PoolManager.Ins().push(node);
			}
		}
	}
}