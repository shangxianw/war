module war
{
	export class PathCom extends ComBase
	{
		public path:astar.Node[]
		protected init()
		{
			this.comType = Component.Path
			this.path = []
		}

		protected destroy()
		{

		}

		public setPath(newPath:astar.Node[])
		{
			while(this.path.length > 0)
			{
				let item = this.path.shift()
				item.destroy()
			}
			this.path.length = 0
			this.path = newPath
		}

		public getCurrNode()
		{
			return this.path[0]
		}
	}
}	