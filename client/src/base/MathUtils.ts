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
}