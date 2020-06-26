module war
{
	/**
	 * 速度系统
	 * 主要是计算速度的方向，供移动系统使用
	 */
	export class SpeedSystem extends SystemBase
	{
		protected init()
		{
			this.systemId = SYSTEM.PATH;
		}

		protected destroy()
		{

		}

		public update(entity:EntityBase, deltaTime:number)
		{
			if(entity == null)
				return;

			let sCom = entity.getCom(COMPONENT.SPEED) as SpeedCom;
			if(sCom == null)
				return;
			
			this.calcByPath(entity);
		}

		private calcByPath(entity:EntityBase)
		{
			let sCom = entity.getCom(COMPONENT.SPEED) as SpeedCom;
			if(sCom == null)
				return;

			let pCom = entity.getCom(COMPONENT.PATH) as PathCom;
			if(pCom != null)
			{
				let currStartNode = pCom.getCurrStartNode();
				if(currStartNode != null)
				{
					let currEndNode = pCom.getCurrEndNode();
					if(currEndNode == null)
						return;
					let startX = WarUtils.ToLocalX(currStartNode.x);
					let startY = WarUtils.ToLocalY(currStartNode.y);
					let endX = WarUtils.ToLocalX(currEndNode.x);
					let endY = WarUtils.ToLocalY(currEndNode.y);
					let angle = MathUtils.CalcAngle(startX, startY, endX, endY);
					sCom.angle = angle;
				}
			}
		}
	}
}