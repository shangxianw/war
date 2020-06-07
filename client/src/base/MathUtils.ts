class MathUtils
{
	public static CalcSpeedXY(speed:number, oriX:number, oriY:number, tarX:number, tarY:number):number[]
	{
		if(oriX == tarX && oriY == tarY)
			return [0, 0];
		let width = tarX - oriX;
		let height = tarY - oriY;
		let hypotenuse = Math.sqrt(width * width + height * height);
		let speedX = (width * speed) / hypotenuse;
		let speedY = (height * speed) / hypotenuse;
		return [speedX, speedY];
	}

	public static IsCircleIntersect(x1:number, y1:number, radius1:number, x2:number, y2:number, radius2:number)
	{
		let width = x2 - x1;
		let height = y2 - y1;
		let distance = Math.sqrt(width * width + height * height);
		return distance < radius1 + radius2;
	}
}