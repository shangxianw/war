/**
 * 存放过往使用过的方法
 */
class TmpUtils
{
	/**
	 * 计算刻度位置
	 * 主要处理刻度等分，但值不等分的进度条
	 * @param value 当前值
	 * @param values 刻度值，需要标明起始值，如[0, 150, 500, 1000, 2000, 3000]
	 * @returns 百分比 0~1
	 */
	public static CalcBarValueBy(value:number, values:number[]):number
	{
		if(values.length < 2) // 刻度至少有两个值
			return -1;
		
		// 特殊情况(简化计算)
		let min = values[0];
		if(value <= min)
			return 0;
		let max = values[values.length-1];
		if(value >= max)
			return 1;

		let item:number,
			tarIndex:number,
			len = values.length,
			barWidth = max - min,
			barSpace = barWidth/(len-1);
		for(let i=0; i<len; i++)
		{
			item = values[i];
			if(value >= item)
				tarIndex = i;
			else
			{
				let start = values[tarIndex];
				let end   = values[i];
				let lastSpace = end - start;
				let leftVaue = value - start;
				
				// 将刻度值转换为进度条实际的宽度
				return ((barSpace * tarIndex) + (leftVaue/lastSpace) * barSpace)/barWidth;
			}
		}
		return 0;
	}
}