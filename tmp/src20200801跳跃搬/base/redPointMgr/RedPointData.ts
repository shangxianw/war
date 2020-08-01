class RedPointData
{
	public redName:string;
	public children:string[];
	public parent:string;
	public state:boolean; // 不适用数值型是因为当其子节点都显示，且一个为2，一个为3时，传递的参数就不好界定了
	public cbArray:any[][];
	public packData(redName:string, parent:string, children:string[])
	{
		this.redName = redName
		this.parent = parent;
		this.children = children
		this.state = false;
		this.cbArray = []
	}

	public addRedCB(cbFn:Function, thisObj:Object)
	{
		this.cbArray.push([cbFn, thisObj])
	}

	public removeCB(cbFn:Function, thisObj:Object)
	{
		let array = DataUtils.CopyArray(this.cbArray)
		for(let i=0; i<array.length; i++)
		{
			let item = this.cbArray[i]
			if(item[0] == cbFn && item[1] == thisObj)
			{
				this.cbArray.splice(i, 1)
			}
		}
	}

	/**
	 * 更新红点
	 * 红点规则：当前节点显示，则父节点极其更上层必定显示，不处理子节点(理论上更新的节点应该是从最底层开始)
	 * 			当前节点不显示，父节点极其更上层应该检测他的其他子节点的显示情况，只要有一个显示，则该父节点显示
	 */
	public update(state:boolean)
	{
		if(state == true)
		{
			this.state = state;
		}
		else
		{
			let newState = false
			for(let child of this.children)
			{
				let pPointInfo = RedPointMgr.Ins().redMap.get(child)
				if(pPointInfo == null)
					continue;
				if(pPointInfo.state == true)
				{
					newState = true
					break;
				}
			}
			this.state = newState;
		}

		for(let item of this.cbArray)
		{
			(item[0] as Function).call(item[1], this.state)
		}
		let pPointInfo = RedPointMgr.Ins().redMap.get(this.parent)
		if(pPointInfo == null)
			return null;
		pPointInfo.update(state)
	}

	public destroy()
	{
		this.children.length = 0;
		this.cbArray.length = 0;
	}
}