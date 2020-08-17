class GameData
{
	public static DevelopMode

	public static setFrameRate(frameRate:number)
	{
		LayerManager.Ins().stageMain.stage.frameRate = frameRate
	}

	public static getFrameRate()
	{
		return LayerManager.Ins().stageMain.stage.frameRate
	}
}