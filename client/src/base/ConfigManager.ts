class ConfigManager extends DataBase
{
	public cfgMap:Hash<string, any>;
	protected init()
	{
		this.cfgMap = new Hash<string, any>();
	}

	protected destroy()
	{
		this.cfgMap.destroy();
	}

	public set(name:string, cfg:any)
	{
		if(name == null || name == "" || cfg == null)
		{
			LogUtils.Error("参数错误");
			return false;
		}

		if(this.cfgMap.has(name) == true)
		{
			LogUtils.Error("已存在配置");
			return false;
		}

		this.cfgMap.set(name, cfg);
		return true;
	}

	public remove(name:string)
	{
		if(name == null || name == "")
		{
			LogUtils.Error("参数错误");
			return false;
		}

		if(this.cfgMap.has(name) == false)
		{
			LogUtils.Error("不存在配置");
			return false;
		}

		let cfg = this.cfgMap.remove(name); // 因为本身只是一个json对象，所以也不需要destroy了
		return true;
	}

	public get(name:string)
	{
		if(name == null || name == "")
		{
			LogUtils.Error("参数错误");
			return false;
		}

		if(this.cfgMap.has(name) == false)
		{
			LogUtils.Error("不存在配置");
			return false;
		}

		return this.cfgMap.get(name);
	}

	private static instance:ConfigManager;
	public static Ins()
	{
		if(ConfigManager.instance == null)
			ConfigManager.instance = new ConfigManager();
		return ConfigManager.instance;
	}
}