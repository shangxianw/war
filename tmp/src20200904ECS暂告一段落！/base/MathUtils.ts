/**
 * 数学计算工具
 * 关于角度的东西：0角在x轴正方向上，顺时针方向递增。
 */
class MathUtils
{
	/**
	 * 直角三角形的两个边
	 * @param htpoSide 斜边
	 * @param angle 斜边与x轴形成的角
	 */
	public static CalcLegSide(hypoSide:number, angle:number):number[]
	{
		if(hypoSide == null && angle == null)
		{
			console.error(`MathUtils.CalcLegSide 方法参数为空`)
			return [0, 0];
		}
		let r = angle * Math.PI / 180;
		let h = Math.cos(r) * hypoSide; // 邻边
		let w = Math.sin(r) * hypoSide; // 对边
		return [h, w];
	}

	/**
	 * 两点之间形成的射线 与 x轴 的角度
	 * 角度为0时时x轴正方向，顺时针递增
	 * @param toFixed 保留小数点(其实只是根据小数点为数进行四舍五入，如果结果为整数，则不会带小数点)
	 */
	public static CalcAngle(x1:number, y1:number, x2:number, y2:number, toFixed:number=5)
	{
		if(x1 == null || y1 == null || x2 == null || y2 == null)
		{
			console.error(`MathUtils.CalcAngle 参数为空`)
			return 0;
		}

		if(x1 == x2 && y1 == y2)
		{
			console.error(`MathUtils.CalcAngle 两个坐标为同一点`);
			return 0;
		}

		let w = x2 - x1;
		let h = y2 - y1;

		// 特殊情况处理，减少计算量
		if(x1 == x2)
			return h > 0 ? 90: 270;

		if(y1 == y2)
			return w > 0 ? 0 : 180;

		let ww = Math.abs(w);
		let hh = Math.abs(h);
		if(ww == hh)
		{
			if(w > 0 && h < 0)
				return 315;
			else if(w > 0 && h > 0)
				return 45;
			else if(w < 0 && h < 0)
				return 225;
			else if(w < 0 && h > 0)
				return 135;
		}

		let hypo = Math.sqrt(h*h + w*w);
		let angle = 360*Math.atan(hh/ww)/(2*Math.PI);
		// angel计算结果范围在[0, 90]，四个象限均以x轴为旋转角
		if(w < 0 && h < 0)
			angle = 180 + angle;
		else if(w < 0 && h > 0)
			angle = 180 - angle;
		else if(w > 0 && h > 0)
			angle = angle;
		else if(w > 0 && h < 0)
			angle = 360 - angle;
		angle = Number(angle.toFixed(toFixed));
		return angle;
	}

	/**
	 * 两点之间的距离
	 */
	public static TwoPointDistance(x1:number, y1:number, x2:number, y2:number, needKaiFang:boolean = true)
	{
		let w = x2 - x1;
		let h = y2 - y1;
		let a = w * w + h * h;
		if(needKaiFang == false)
			return a;
		return Math.sqrt(a);
	}

	/**
	 * 点(x, y)到直线(x1, y1),(x2, y2)的距离
	 */
	public static PointToLineDistance(x:number, y:number, x1:number, y1:number, x2:number, y2:number):number
	{
		if(x == null || y == null || x1 == null || y1 == null || x2 == null || y2 == null)
		{
			console.error(`MathUtils.PointToLineDistance 参数为空`);
			return 0;
		}

		let a = y2 - y1;
		let b = x1 - x2;
		let c = x2 * y1 - x1 * y2;
		if(Math.abs(a) > 0 || Math.abs(b) > 0)
			return Math.abs(a * x + b * y + c) / Math.sqrt(a * a + b * b);
		else
			return 0;
	}

	/**
	 * 两个矩形是否相交(前提是两个矩形无旋转)
	 */
	public static CheckTwoRectIntersect(x1:number, y1:number, w1:number, h1:number, x2:number, y2:number, w2:number, h2:number)
	{
		return Math.max(x1, x2) <= Math.min(x1+w1, x2+w2) && Math.max(y1, y2) <= Math.min(y1+h1, y2+h2);
		// 白鹭自带的矩形碰撞检测
		// let a = new egret.Rectangle(x1, y1, w1, h1);
		// let b = new egret.Rectangle(x2, y2, w2, h2);
		// return a.intersects(b);
	}

	/**
	 * 四舍五入到某个标准的整数倍位置
	 * 如 value=5， space=3，则最终输出6，因为在3的整数倍0,3,6...中，5更靠近6，如果在中间位置，则取向上的值
	 * @param value 当前值
	 * @param space 间隔
	 * @returns 返回该值更靠近space倍数的那个数
	 */
	public static CalcRoundBySpace(value:number, space:number):number
	{
		let times = Math.floor(value / space);
		let bottomLine = times * space;
		let topLine = (times + 1) * space;
		if(topLine - value <= value - bottomLine)
			return topLine;
		return bottomLine;
	}

	/**
	 * 贝塞尔曲线
	 * tips：可根据传入的percent来控制物体沿着曲线的速度，如前慢后快，则前期的百分比调用多一点
	 * @param percent 百分比0~1，即整段贝塞尔曲线中所处的位置
	 */
	public static BezierCurve(percent:number, x1:number, y1:number, x2:number, y2:number, x3:number, y3:number):number[]
	{
		if(percent < 0 || percent > 1)
			return
		let x = (1 - percent) * (1 - percent) * x1 + 2 * percent * (1 - percent) * x2 + percent * percent * x3;
		let y = (1 - percent) * (1 - percent) * y1 + 2 * percent * (1 - percent) * y2 + percent * percent * y3;
		return [x, y]
	}
}