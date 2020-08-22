module war
{
	export class DrawUtils
	{
		public static isTest:boolean = true;

		public static DrawMapGrid(nCols:number, nRows:number)
		{
			if(this.isTest == false)
				return;
			let shiftX = WarDataMgr.Ins().MapStartX
			let shiftY = WarDataMgr.Ins().MapStartY
			let shape = new egret.Shape()
			let shape2 = new egret.Shape()
			shape.graphics.lineStyle(0.5, 0xff0000)
			shape2.graphics.beginFill(0xff0000, 0.5)
			for(let i=0, len=nCols; i<len; i++)
			{
				for(let j=0, len2=nRows; j<len2; j++)
				{
					let size = WarDataMgr.Ins().CeilSize;
					let x = i * size + shiftX
					let y = j * size + shiftY
					let node = WarDataMgr.Ins().grid.getNode(i, j)
					if(node.walkable == false)
						shape2.graphics.drawRect(x, y, size, size)
					shape.graphics.drawRect(x, y, size, size)
				}
			}
			shape.graphics.endFill()
			shape2.graphics.endFill()
			LayerManager.Ins().war.map.addChild(shape)
			LayerManager.Ins().war.map.addChild(shape2)
		}

		public static DrawPath(entity:EntityBase)
		{
			if(this.isTest == false)
				return;
			
			let renderCom = entity.getComponent(Component.Render) as RenderCom;
			let posCom = entity.getComponent(Component.Pos) as PosCom;
			let pathCom = entity.getComponent(Component.Path) as PathCom
			if(pathCom == null || posCom == null || renderCom == null)
				return;

			if(renderCom.pathShap == null)
			{
				renderCom.pathShap = new egret.Shape
				LayerManager.Ins().war.map.addChild(renderCom.pathShap)
			}

			renderCom.pathShap.graphics.clear()
			renderCom.pathShap.graphics.lineStyle(2, 0xffff00)
			renderCom.pathShap.graphics.moveTo(posCom.x, posCom.y)
			for(let node of pathCom.path)
			{
				let localX = WarUtils.GridX2LocalX(node.x)
				let localY = WarUtils.GridY2LocalY(node.y)
				renderCom.pathShap.graphics.lineTo(localX, localY)
			}
			renderCom.pathShap.graphics.endFill()
			
		}

		// ---------------------------------------------------------------------- 画中心点
		public static DrawAnchorCenter(entity:EntityBase)
		{
			if(DrawUtils.isTest == false)
				return;
			
			let renderCom = entity.getComponent(Component.Render) as RenderCom;
			let posCom = entity.getComponent(Component.Pos) as PosCom;
			if(renderCom == null || posCom == null)
				return
			if(renderCom.anchorShap == null)
			{
				renderCom.anchorShap = new egret.Shape();
				LayerManager.Ins().war.effect.addChild(renderCom.anchorShap)
			}
				
			renderCom.anchorShap.graphics.clear();
			renderCom.anchorShap.graphics.beginFill(0xff0000, 1);
			// renderCom.anchorShap.graphics.lineStyle(2, 0x000000);
			renderCom.anchorShap.graphics.drawCircle(posCom.x, posCom.y, 5);
			renderCom.anchorShap.graphics.endFill();
		}

		// ---------------------------------------------------------------------- 普攻射程
		public static DrawAttackRange(entity:EntityBase)
		{
			if(DrawUtils.isTest == false)
				return;
			
			let renderCom = entity.getComponent(Component.Render) as RenderCom;
			let atkCom = entity.getComponent(Component.Attack) as AttackCom;
			let actionCom = entity.getComponent(Component.Action) as ActionCom;
			let posCom = entity.getComponent(Component.Pos) as PosCom;
			if(renderCom == null || atkCom == null || posCom == null || actionCom == null)
				return
			if(renderCom.attackShap == null)
			{
				renderCom.attackShap = new egret.Shape();
				LayerManager.Ins().war.map.addChild(renderCom.attackShap)
			}

			renderCom.attackShap.graphics.clear();
			if(actionCom.action == Action.Attack)
				renderCom.attackShap.graphics.beginFill(0xffffff, 0.5);
			else
				renderCom.attackShap.graphics.beginFill(0x000000, 0.5);
			renderCom.attackShap.graphics.lineStyle(1, 0x000000);
			renderCom.attackShap.graphics.drawCircle(posCom.x, posCom.y, atkCom.range);
			renderCom.attackShap.graphics.endFill();
		}

		// ---------------------------------------------------------------------- hascode
		public static DrawHasCode(entity:EntityBase)
		{
			if(DrawUtils.isTest == false)
				return;
			
			let renderCom = entity.getComponent(Component.Render) as RenderCom;
			let posCom = entity.getComponent(Component.Pos) as PosCom;
			if(renderCom == null || posCom == null)
				return
			if(renderCom.hasCodeLb == null)
			{
				renderCom.hasCodeLb = new eui.Label();
				renderCom.hasCodeLb.text = `${entity.hasCode}`
				renderCom.hasCodeLb.validateNow()
				LayerManager.Ins().war.effect.addChild(renderCom.hasCodeLb)
			}

			renderCom.hasCodeLb.x = posCom.x
			renderCom.hasCodeLb.y = posCom.y
		}
	}
}