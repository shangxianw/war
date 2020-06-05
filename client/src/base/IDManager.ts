class IDManager
{
	private newId:number;
	public constructor()
	{
		this.init();
	}

	public init()
	{
		this.newId = 0;
	}

	public destroy()
	{
		this.newId = 0;
	}

	public getNewId()
	{
		this.newId++;
		return this.newId;
	}

	private static Instance:IDManager;
	public static Ins()
	{
		if(IDManager.Instance == null)
			IDManager.Instance = new IDManager();
		return IDManager.Instance;
	}
}