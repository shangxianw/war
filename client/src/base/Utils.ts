class Utils
{
    // 获取对象的对象名
	public static GetClassNameByObj(value:any):string
	{
		var type = typeof value;
        if (!value || (type != "object" && !value.prototype)) {
            return type;
        }
        var prototype = value.prototype ? value.prototype : Object.getPrototypeOf(value);
        if (prototype.hasOwnProperty("__class__")) {
            return prototype["__class__"];
        }
        var constructorString = prototype.constructor.toString().trim();
        var index = constructorString.indexOf("(");
        var className = constructorString.substring(9, index);
        Object.defineProperty(prototype, "__class__", {
            value: className,
            enumerable: false,
            writable: true
        });
        return className;
	}

    // 获取类名
    public static GetClassNameByClass(value:any):string
    {
        let className;
        return className;
    }

    public static CheckNameValide(name:string):any[]
    {			
        if(name == "" || name == null)
        {
            return [false, "名字不能为空"];
        }

        if(name.length > 10)
        {
            return [false, "名字过长"];
        }

        if(0)
        {
            return [false, "敏感字"];
        }

        return [true, "ok"];
    }

    // ---------------------------------------------------------------------- 呼吸效果
    public static showBreathTween(target:egret.DisplayObject, show:boolean, query?:{scale?:number, time?:number})
    {
        egret.Tween.removeTweens(target);
        if(show == true)
        {
            target.scaleX = 1;
            target.scaleY = 1;
            
            let scale = query.scale != null ? query.scale : 1.02;
            let time = query.time != null ? query.time : 1000;

            egret.Tween.get(target, {loop:true})
            .to({
                scaleX : scale,
                scaleY : scale
            }, time)
            .to({
                scaleX : 1,
                scaleY : 1
            }, time)
        }
    }

    public static GetKaIcon(kaId:number)
    {
        return `heroicon_${kaId}_png`;
    }

    public static GetQualityBg(quality:number)
    {
        return `bg_card_di_${quality}_png`
    }

    public static GetHeadIcon(icon:number)
    {
        if(icon < 10)
            return `playericon_0${icon}`;
        else
            return `playericon_${icon}`;
    }

    public static GetHeadFrame(icon:number)
    {
        if(icon < 10)
            return `bg_phb_heroicon_up0${icon}`;
        else
            return `bg_phb_heroicon_up${icon}`;
    }

    public static GetMap(id:number)
    {
        return `map_${id}_jpg`
    }
}