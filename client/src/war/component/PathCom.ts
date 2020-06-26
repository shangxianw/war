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
			this.currStep = 0;
		}

		protected destroy()
		{
			this.destroyPath();
			this.path.length = 0;
		}

		public setPath(path:astar.Node[])
		{
			this.destroyPath();
			for(let node of path)
			{
				this.path.push(node)
			}
		}

		//获取阶段目标点
		public getCurrEndNode():astar.Node
		{
			return this.path[this.currStep+1];
		}

		// 获取阶段起始点
		public getCurrStartNode():astar.Node
		{
			return this.path[this.currStep];
		}

		// 获取剩余路径
		public getLeftPath(hasStartNode:boolean = true)
		{
			if(hasStartNode == false)
				return this.path.slice(this.currStep+1)	
			return this.path.slice(this.currStep)
		}
		
		public toNextNode()
		{
			this.currStep++;	
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
			this.path.length = 0;
		}
	}
}