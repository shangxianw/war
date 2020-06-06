class DataUtils
{
	// 复制
	public static CopyArray(oriArray:any[])
	{
		let copyArray:any[] = [];
		for(let item of oriArray)
		{
			copyArray.push(item);
		}
		return copyArray;
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
			PoolManager.Ins().push(item);
		}
		map.destroy();
		if(setNull == true)
			map = null; // ???????????????????????????????????????????????可以的吗
	}

	// 销毁以 UIBase 为父类的哈希对象
	public static DestroyUIBaseMap(map:Hash<any, UIBase>, setNull:boolean = true)
	{
		let item:DataBase;
		for(let key in map.values)
		{
			item = map.get(key);
			if(item == null)
				continue;
			item.destroyAll();
			PoolManager.Ins().push(item);
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
			PoolManager.Ins().push(item);
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
			PoolManager.Ins().push(item);
		}
		arr.length = 0;
		if(setNull == true)
			arr = null;
	}
}