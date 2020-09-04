class GameData
{
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