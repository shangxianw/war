class MathUtils
{
	public static CalcSpeedXY(speed:number, oriX:number, oriY:number, tarX:number, tarY:number):number[]
	{
		let width = tarX - oriX;
		let height = tarY - oriY;
		let hypotenuse = Math.sqrt(width * width + height * height);

		// let sinA = height / hypotenuse;
		// let cosA = width / hypotenuse;

		let speedX = (width * speed) / hypotenuse;
		let speedY = (height * speed) / hypotenuse;
		return [speedX, speedY];
	}
}