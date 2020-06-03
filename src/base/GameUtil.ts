class GameUtils
{
	public static main:Main;
	public static get StageWidth()
	{
		return GameUtils.main.stage.stageWidth;
	}

	public static get StageHeight()
	{
		return GameUtils.main.stage.stageHeight;
	}

	public static get ScreenWidth()
	{
		return document.documentElement.clientWidth;
	}

	public static get ScreenHeight()
	{
		return document.documentElement.clientHeight;
	}

	public static get Stage()
	{
		return GameUtils.main.stage;
	}

	public static get StageCenterX()
	{
		return this.StageWidth/2;
	}

	public static get StageCenterY()
	{
		return this.StageHeight/2;
	}
}