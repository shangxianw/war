abstract class DataBase
{
	public attrMap:Hash<string, CBData[]>
	public hasCode:number
	
	public constructor()
	{
		this.initAll()
	}

	public initAll()
	{
		this.hasCode = IDManager.Ins().getHashCode();
		this.attrMap = new Hash<string, CBData[]>()
		this.init();
	}

	public destroyAll()
	{
		this.hasCode = null;
		for(let itemArray of this.attrMap.values())
		{
			for(let item of itemArray)
			{
				item.destroy()
			}
		}
		this.attrMap.destroy();
		this.destroy();
	}

	protected abstract init()
	protected abstract destroy()

	public addAttrListener(attr:string, cbFn:Function, thisObj:Object)
	{
		if(attr == null || cbFn == null || thisObj == null)
		{
			return false;
		}

		let itemArray:CBData[];
		if(this.attrMap.has(attr) == false)
		{
			itemArray = []
			this.attrMap.set(attr, itemArray)
		}
		itemArray = this.attrMap.get(attr)
		let item = new CBData()
		item.packData1(cbFn, thisObj)
		itemArray.push(item)
		return true;
	}

	public removeAttrListener(attr:string, cbFn:Function, thisObj:Object)
	{
		if(attr == null || cbFn == null || thisObj == null)
		{
			return false;
		}

		if(this.attrMap.has(attr) == false)
		{
			return true;
		}

		let array = this.attrMap.get(attr)
		let itemArray:CBData[] = DataUtils.CopyArray(array)
		for(let i=0, len=itemArray.length; i<len; i++)
		{
			let item = itemArray[i]
			if(item.cbFn == cbFn && item.thisObj == thisObj)
			{
				array.splice(i, 1)
				item.destroy()
				item = null
			}
		}
		return true
	}

	public updateAttr(attr:string, value:any)
	{
		if(attr == null || this.attrMap.has(attr) == false)
		{
			return false;
		}

		this[attr] = value
		this.flush(attr)
	}

	public flush(attr:string)
	{
		let itemArray:CBData[] = this.attrMap.get(attr)
		for(let i=0, len=itemArray.length; i<len; i++)
		{
			let item = itemArray[i]
			item.exec()
		}
	}
}