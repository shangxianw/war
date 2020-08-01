class IDManager
{
	private hasCode:number;
	public constructor()
	{
		this.init();
	}

	public init()
	{
		this.hasCode = 0;
	}

	public destroy()
	{
		this.hasCode = 0;
	}

	public getHashCode()
	{
		this.hasCode++;
		return this.hasCode;
	}

	private static Instance:IDManager;
	public static Ins()
	{
		if(IDManager.Instance == null)
			IDManager.Instance = new IDManager();
		return IDManager.Instance;
	}
}