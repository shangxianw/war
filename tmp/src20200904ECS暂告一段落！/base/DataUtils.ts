class DataUtils
{
	// 浅复制
	public static CopyArray(oriArray:any[])
	{
		let copyArray:any[] = [];
		for(let item of oriArray)
		{
			copyArray.push(item);
		}
		return copyArray;
	}

	public static DestroyCBDataMap(map:Hash<any, CBData[]>, setNull:boolean = true)
	{
		for(let value of map.values())
		{
			for(let cbData of value)
			{
				cbData.destroy();
				cbData = null;
			}
			value.length = 0;
		}
		map.destroy();
		if(setNull)
			map = null;
	}

	// 销毁以 DataBase 为父类的哈希对象
	public static DestroyDataBaseMap(map:Hash<any, DataBase>, setNull:boolean = true)
	{
		let item:DataBase;
		for(let key in map.values)
		{
			item = map.get(key);
			if(item == null)
				continue;
			item.destroyAll();
		}
		map.destroy();
		if(setNull == true)
			map = null;
	}

	// 销毁以 UIBase 为父类的哈希对象
	public static DestroyUIBaseMap(map:Hash<any, UIBase>, setNull:boolean = true)
	{
		let item:DataBase;
		for(let item of map.values())
		{
			if(item == null)
				continue;
			item.destroyAll();
		}
		map.destroy();
		if(setNull == true)
			map = null;
	}

	// 销毁以 DataBase 为父类的数组
	public static DestroyDataBaseArray(arr:DataBase[], setNull:boolean = true)
	{
		for(let item of arr)
		{
			item.destroyAll();
		}
		arr.length = 0;
		if(setNull == true)
			arr = null;
	}

	// 销毁以 UIBase 为父类的数组
	public static DestroyUIBaseArray(arr:UIBase[], setNull:boolean = true)
	{
		for(let item of arr)
		{
			item.destroyAll();
		}
		arr.length = 0;
		if(setNull == true)
			arr = null;
	}

	// 销毁继承 DataBase 的子类
	public static DestroyDataBaseClass(data:DataBase, setNull:boolean = true)
	{
		if(data != null)
		{
			data.destroyAll();
			if(setNull == true)
				data = null;
		}
	}
}