class LogUtils
{
	public static Log(desc:string)
	{
		if(GameData.DevelopMode == DevelopMode.DEBUG)
			console.log(desc);
	}

	public static Warn(desc:string)
	{
		if(GameData.DevelopMode == DevelopMode.DEBUG)
			console.warn(desc);
	}

	public static Error(desc:string)
	{
		if(GameData.DevelopMode == DevelopMode.DEBUG)
		{
			let stack = new Error().stack;
			console.error(desc);
			console.error(stack);
		}
	}

	public static CheckParamValid(...params:any[]):boolean
	{
		let index:number = 0;
		for(let query of params)
		{
			// let type = typeof query;
			if(query == undefined)
			{
				LogUtils.Error(`参数有误`)
				return  false;
			}
		}
		return true;
	}
}