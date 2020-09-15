class ConfigManager extends DataBase
{
	public cfgMap:Hash<number, HeroData>
	public init()
	{
		this.cfgMap = new Hash<number, HeroData>()
	}

	public destroy()
	{
		super.destroy();
		this.cfgMap.destroy();
	}

	private static instance:ConfigManager;
	public static Ins()
	{
		if(ConfigManager.instance == null)
			ConfigManager.instance = new ConfigManager();
		return ConfigManager.instance;
	}
}
