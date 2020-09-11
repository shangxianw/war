class DataBase
{
	public hasCode:number
	
	public constructor()
	{
		this.hasCode = IDManager.Ins().getHashCode();
		this.attrMap = new Hash<string, [string, Function, Object][]>()
		this.init()
	}

	public init()
	{

	}

	public destroy()
	{
		this.removeAllAttrListener();
	}

	// ---------------------------------------------------------------------- 添加属性监听
	public attrMap:Hash<string, [string, Function, Object][]> // [attr, cbFn, thisObj][]
	public addAttrListener(attr:string, cbFn:Function, thisObj:Object)
	{
		// 错误参数
		if(attr == null || cbFn == null || thisObj == null)
		{
			return false;
		}

		if(this.attrMap.has(attr) == false)
		{
			this.attrMap.set(attr, [])
		}
		else
		{
			// 重复注册
			let array = this.attrMap.get(attr)
			for(let item of array)
			{
				if(item[0] == attr && item[1] == cbFn && item[2] == thisObj)
					return false
			}
		}

		let itemArray = this.attrMap.get(attr)
		itemArray.push([attr, cbFn, thisObj])
		return true;
	}

	public removeAttrListener(attr:string, cbFn:Function, thisObj:Object)
	{
		// 错误参数
		if(attr == null || cbFn == null || thisObj == null)
		{
			return false;
		}

		if(this.attrMap.has(attr) == false)
		{
			return true;
		}

		let array = this.attrMap.get(attr)
		let index = 0
		for(let item of array)
		{
			if(item[0] == attr && item[1] == cbFn && item[2] == thisObj)
				return true
			index += 1
		}
		return false
	}

	public removeAllAttrListener()
	{
		for(let item of this.attrMap.values())
		{
			item[0] = item[1] = item[2] = null
		}
		this.attrMap.destroy();
	}

	public updateAttr(attr:string, value:any)
	{
		if(attr == null)
			return false;

		if(this.attrMap.has(attr) == false)
			return true

		this[attr] = value
		return this.flush(attr)
	}

	public flush(attr:string)
	{
		if(this.attrMap.has(attr) == false)
			return true

		let array = this.attrMap.get(attr)
		for(let item of array)
		{
			item[1].apply(item[2])
		}
		return true;
	}
}