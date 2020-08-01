module war
{
	/**
	 * 名称：AI系统
	 * 功能：负责创建各类跳板
	 * 原理：将滚动区域分成一个个矩形，每次检测当前的滚动条进度，
	 */
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
			if(entity == null)
				return;
			
			// if(1)
			// 	return;
				
			let posCom = entity.getComponent(Component.Pos) as PosCom;
			let ctrlCom = entity.getComponent(Component.Ctrl) as CtrlCom;
			let renderCom = entity.getComponent(Component.Render) as RenderCom;
			if(posCom == null || ctrlCom == null || renderCom == null)
				return;

			let warData = WarDataMgr.Ins();
			let lastLevel = warData.lastStepLevel;
			let currLevel = warData.currStepLevel;
			let space = warData.StepLevelHeight;
			if(lastLevel == null || lastLevel == currLevel)
				return;
			warData.lastStepLevel = warData.currStepLevel;


			let checkCount = warData.CheckSpaceCount;
			let bottomLine = 0;
			let topLine = 0;
			let count = 0;
			let randomStepCount = 0;
			let x, y;
			// 向上检查阶梯数
			for(let i=0, len=checkCount; i<len; i++)
			{
				topLine = currLevel - space * (i + 1);
				bottomLine = currLevel - space * i;
				count = 0;

				let entityArray:EntityBase[] = DataUtils.CopyArray(WarDataMgr.Ins().entityMap.values());
				for(let entity2 of entityArray)
				{
					if(entity2 == null)
						continue;
					
					let stepCom2 = entity2.getComponent(Component.Step) as StepCom;
					let posCom2 = entity2.getComponent(Component.Pos) as PosCom;
					if(stepCom2 == null || posCom2 == null)
						continue;

					if(posCom2.y <= bottomLine && posCom2.y > topLine) // 因为y越向下，y越大，所以y<= bottomLine而不是 >=
						count += 1;
				}

				if(count > 0)
					continue;
				
				// 创建阶梯
				randomStepCount = Math.max(Math.floor(Math.random() * warData.MaxStepCount), 1);
				for(let j=0, len2=randomStepCount; j<len2; j++)
				{
					x = Math.floor(Math.random() * warData.StageWidth);
					y = Math.floor(bottomLine - Math.random() * space);
					WarUtils.CreateStepEntity(x, y, warData.StepWidth, warData.StepHeight, renderCom.render.parent);
				}
			}

			// 向下检查阶梯数
			let remoceEntityArray = [];
			for(let i=0, len=checkCount; i<len; i++)
			{
				topLine = currLevel + space * i;
				bottomLine = currLevel + space * (i + 1);
				remoceEntityArray.length = 0;

				let entityArray:EntityBase[] = DataUtils.CopyArray(WarDataMgr.Ins().entityMap.values());
				for(let entity2 of entityArray)
				{
					if(entity2 == null)
						continue;
					
					let stepCom = entity2.getComponent(Component.Step) as StepCom;
					let posCom2 = entity2.getComponent(Component.Pos) as PosCom;
					if(stepCom == null || posCom2 == null)
						continue;
					
					if(posCom2.y <= bottomLine && posCom2.y > topLine)
						remoceEntityArray.push(entity2);
				}

				// 创建阶梯
				while(remoceEntityArray.length > 0)
				{
					let e = remoceEntityArray.pop();
					WarDataMgr.Ins().removeEntity(e);
				}
			}
		}
	}
}