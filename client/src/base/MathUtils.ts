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
		let h = Math.cos(r) * hypoSide; // 邻边
		let w = Math.sin(r) * hypoSide; // 对边
		return [h, w]; // 返回后记得保留小数点后两位
	}

	public static CalcAngle(x1:number, y1:number, x2:number, y2:number)
	{
		y1 = -y1; // 因为舞台的坐标系统与数学的坐标系统y是相反的。
		y2 = -y2;
		if(x1 == x2 && y1 == y2)
			return 0; // 其实应该是报错才对。
		if(x1 == x2 && y2 - y1 < 0)
			return 90;
		else if(x1 == x2 && y2 - y1 > 0)
			return 270;

		let h = x2 - x1;
		let w = y2 - y1;
		let hypo = Math.sqrt( h*h + w*w );
		let angle = Math.acos((w*w - h*h - hypo*hypo)/(-2*h*hypo)) * 180 / Math.PI;
		if(w > 0)
			angle = 180 + (180-angle);
		return angle;
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