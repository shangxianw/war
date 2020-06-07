class MathUtils
{
	/**
	 * 计算直角三角形的两个边
	 * @param htpoSide 斜边
	 * @param angle 斜边与x轴形成的角
	 */
	public static CalcLegSide(hypoSide:number, angle:number):number[]
	{
		if(hypoSide == null && angle == null)
			return [0, 0];
		let r = angle * Math.PI / 180;
		let speedX = Math.cos(r) * hypoSide; // 邻边
		let speedY = Math.sin(r) * hypoSide; // 对边
		return [speedX, speedY]; // 返回后记得保留小数点后两位
	}

	public static CalcSpeedAngle(x1:number, y1:number, x2:number, y2:number)
	{
		let speedY = x2 - x1;
		let speedX = y2 - y1;Math.sqrt
		return -Math.atan(speedX/speedY)*180/Math.PI;
	}

	public static IsCircleIntersect(x1:number, y1:number, radius1:number, x2:number, y2:number, radius2:number)
	{
		let width = x2 - x1;
		let height = y2 - y1;
		let distance = Math.sqrt(width * width + height * height);
		return distance < radius1 + radius2;
	}

	public static CalcDistance(x1:number, y1:number, x2:number, y2:number, needKaiFang:boolean = false)
	{
		let a = (x2 - x1)*(x2- x1) + (y2 - y1)*(y2 - y1);
		if(needKaiFang == false)
			return a;
		return Math.sqrt(a);
	}
}