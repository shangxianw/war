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

	// 销毁以 DataBase 为父类的数组
	public static DestroyDataBaseArray(arr:DataBase[], setNull:boolean = true)
	{
		for(let item of arr)
		{
			item.destroy();
		}
		arr.length = 0;
		if(setNull == true)
			arr = null;
	}
}