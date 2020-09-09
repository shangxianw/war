/**
 * 红点管理器
 * 当一次性需要更新的红点数目过多时，可考虑分帧处理 
 */
class RedPointMgr
{
	public redMap:Hash<string, RedPointData>
	public constructor()
	{
		this.init();
	}

	public init()
	{
		this.redMap = new Hash<string, RedPointData>()
		this.initRedData(RedConfig, "")
	}

	/**
	 * 初始化红点配置
	 * 将每个红点的父子关系都理顺
	 */
	private initRedData(obj:Object, pName:string)
	{
		for(let key in obj)
		{
			let children:string[] = []
			for(let childKey in obj[key])
			{
				children.push(childKey)
			}
			let redData = new RedPointData()
			redData.packData(key, pName, children)
			this.redMap.set(key, redData)
			this.initRedData(obj[key], key)
		}
	}

	/**
	 * 添加红点监听
	 * 可注册多个相同的监听(redName, cbFn, thisObj 完全相同那种)
	 */
	public addListenter(redName:string, cbFn:Function, thisObj:Object)
	{
		if(redName == null || cbFn == null || thisObj == null || this.redMap.has(redName) == false)
		{
			return false;
		}
		let redData = this.redMap.get(redName)
		redData.addRedCB(cbFn, thisObj)
		return true;
	}

	/**
	 * 动态添加红点监听
	 * 用于动态创建的子项，如列表子项
	 */
	public addlistener2(redName:string, parent:string, cbFn:Function, thisObj:Object)
	{
		if(redName == null || cbFn == null || thisObj == null || this.redMap.has(parent) == false)
		{
			return false;
		}

		let redData = new RedPointData()
		redData.packData(redName, parent, [])
		this.redMap.set(redName, redData)
		redData.addRedCB(cbFn, thisObj)
		return true;
	}

	public removeListenter(redName:string, cbFn:Function, thisObj:Object)
	{
		if(this.redMap.has(redName) == false)
		{
			return true;
		}

		if(redName == null || cbFn == null || thisObj == null)
		{
			return false;
		}
		let redData = this.redMap.get(redName)
		redData.removeCB(cbFn, thisObj)
		return true;
	}

	/**
	 * 更新红点
	 * 会处理其父节点极其上层节点关系，不会处理子节点
	 */
	public update(redName:string, state:boolean)
	{
		if(this.redMap.has(redName) == false)
		{
			return false;
		}
		let redData = this.redMap.get(redName)
		redData.update(state)
		return true
	}

	public destroy()
	{
		for(let item of this.redMap.values())
		{
			item.destroy()
		}
		this.redMap.destroy();
		this.redMap = null
	}

	private static Instance:RedPointMgr;
	public static Ins()
	{
		if(RedPointMgr.Instance == null)
			RedPointMgr.Instance = new RedPointMgr();
		return RedPointMgr.Instance;
	}
}