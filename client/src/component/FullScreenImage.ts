class FullImage extends eui.Image
{
	public constructor()
	{
		super()
	}

	protected childrenCreated():void
	{
		super.childrenCreated();
		// this.anchorOffsetX = this.width/2;
		// this.anchorOffsetY = this.height/2;
		// this.x = GameData.Width >> 1
		// this.y = GameData.Height >> 1
	}
}