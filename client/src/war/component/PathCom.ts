module war
{
	export class PathCom extends ComBase
	{
		private path:astar.NodeItem[];
		protected init()
		{
			this.componentId = COMPONENT.PATH;
			this.path = [];
		}

		protected destroy()
		{
			this.destroyPath();
			this.path.length = 0;
		}

		public setPath(path:astar.NodeItem[])
		{
			this.destroyPath();
			this.path = path;
		}

		public getPath()
		{
			return this.path;
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