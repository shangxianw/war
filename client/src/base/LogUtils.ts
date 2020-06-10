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
			console.log(desc);
	}

	public static Error(desc:string)
	{
		if(GameData.DevelopMode == DevelopMode.DEBUG)
			console.log(desc)
	}
}