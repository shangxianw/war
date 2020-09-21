class GameData
{
	static Width:number = 1280;
	static Height:number = 720;
	
	public static DevelopMode:number = DevelopMode.DEBUG

	public static setFrameRate(frameRate:number)
	{
		LayerManager.Ins().stageMain.stage.frameRate = frameRate
	}

	public static getFrameRate()
	{
		return LayerManager.Ins().stageMain.stage.frameRate
	}
}