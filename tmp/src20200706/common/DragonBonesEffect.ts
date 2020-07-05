class DragonBonesEffect extends UIBase
{
	private armatureDisplay:dragonBones.EgretArmatureDisplay;
	private egretFactory:dragonBones.EgretFactory;
	protected init()
	{
		
	}

	public destroy()
	{
		this.egretFactory.clear();
		this.armatureDisplay.dbClear();
	}

	public initData(fileName:string, clipName:string, action:string=null, count:number=0)
	{
		if(fileName == null || clipName == null)
		{
			LogUtils.Error(`参数错误`);
			return false;
		}

		var dragonbonesData = RES.getRes(`${fileName}_ske_json`);
		var textureData = RES.getRes(`${fileName}_tex_json`);
		var texture = RES.getRes(`${fileName}_tex_png`);

		if(dragonbonesData == null || textureData == null || texture == null)
		{
			LogUtils.Error(`资源未加载`);
			return false;
		}

		this.egretFactory = dragonBones.EgretFactory.factory;
		this.egretFactory.parseDragonBonesData(dragonbonesData);  
		this.egretFactory.parseTextureAtlasData(textureData, texture);

		this.armatureDisplay = this.egretFactory.buildArmatureDisplay(clipName);
		this.addChild(this.armatureDisplay);

		if(action != null)
			this.play(action, count);
		return true;
	}

	public play(action:string, count:number=0)
	{
		this.armatureDisplay.animation.play("199030", count);
	}
}