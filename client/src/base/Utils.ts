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
}