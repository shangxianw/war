module war
{
	export class AISystem extends SystemBase
	{
		protected init()
		{
			this.sysType = System.AI;
		}

		protected destroy()
		{

		}
		
		public update(entity:EntityBase, deltaTime:number)
		{
			let entityArray = WarDataMgr.Ins().entityMap.values()
			let aiCount = 0;
			for(let e of entityArray)
			{
				if(e == null)
					continue;
				
				let aiCom = e.getComponent(Component.AI) as AICom;
				if(aiCom == null)
					continue;
				
				aiCount += 1;
			}

			if(aiCount >= WarDataMgr.Ins().MaxAiCount)
				return;
			
			// 当场上的ai数量少于最大数量时，会添加到舞台中
			let addCount = WarDataMgr.Ins().MaxAiCount - aiCount;
			let gameArea:eui.Group = WarDataMgr.Ins().warPanel.gameArea;
			for(let i=0, len=addCount; i<len; i++)
			{
				let x = Math.floor(Math.random() * gameArea.width)
				let y = Math.floor(Math.random() * gameArea.height)
				let w = Math.max(Math.floor(Math.random() * 150), 50);
				WarUtils.CreateAI(x, y, w, w, gameArea);
			}
		}
	}
}