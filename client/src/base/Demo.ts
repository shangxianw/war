class Demo extends DataBase
{
	public constructor()
	{
		super();
	}

	protected init()
	{
		
	}

	protected destroy()
	{
		
	}

	private static Instance:Demo;
	public static Ins()
	{
		if(Demo.Instance == null)
			Demo.Instance = new Demo();
		return Demo.Instance;
	}
}