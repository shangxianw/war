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
}