module war
{
	export class DrawUtils
	{
		public static isTest:boolean = true;
		public static Destroy()
		{
			if(this.pathMap != null)
			{
				for(let key in this.pathMap.map)
				{
					let item:egret.Shape = this.pathMap.get(Number(key));
					item.parent != null && item.parent.removeChild(item);
					item = null;
				}
				this.pathMap.destroy();
			}

			if(this.colorMap != null)
			{
				for(let key in this.colorMap.map)
				{
					let item:egret.ColorMatrixFilter = this.pathMap.get(Number(key));
					item.matrix = null;
					item = null;
				}
				this.pathMap.destroy();
			}
		}

		public static DrawGrid(group:eui.Group)
		{
			if(DrawUtils.isTest == false)
				return;
			let space = WarDataMgr.Ins().grid.space;
			let rows = WarDataMgr.Ins().grid.numCols;
			let cols = WarDataMgr.Ins().grid.numRows;

			let shape = new egret.Shape();
			shape.graphics.lineStyle(1, 0x00ff00);
			shape.x = WarDataMgr.Ins().startX;
			shape.y = WarDataMgr.Ins().startY;
			let mapCfg:boolean[][] = MapCfg["1001"];
			for(let i=0, len = rows; i<len; i++)
			{
				for(let j=0, len2 = cols; j<len2; j++)
				{
					let x = space*i// - space/2;
					let y = space*j// - space/2

					// if(mapCfg[j][i] == false)
					// {
					// 	let a = new egret.Shape();
					// 	a.x = shape.x;
					// 	a.y = shape.y;
					// 	a.graphics.beginFill(0x0000ff);
					// 	a.graphics.drawRect(x, y, space, space);
					// 	a.graphics.endFill();
					// 	group.addChild(a);
					// }
					shape.graphics.drawRect(x, y, space, space);

				}
			}
			shape.graphics.endFill();
			group.addChild(shape);
		}

		public static pathMap:Hash<number, egret.Shape>;
		public static DrawPath(entity:EntityBase, group:eui.Group = null)
		{
			if(DrawUtils.isTest == false)
				return;
			
			if(this.pathMap == null)
				this.pathMap = new Hash<number, egret.Shape>();

			if(this.pathMap.has(entity.id) == false)
			{
				let testShap = new egret.Shape();
				testShap.x = WarDataMgr.Ins().startX;
				testShap.y = WarDataMgr.Ins().startY;
				group != null && group.addChild(testShap);
				this.pathMap.set(entity.id, testShap);
			}

			let testShap:egret.Shape = this.pathMap.get(entity.id);
			let space = WarDataMgr.Ins().grid.space;
			let pCom:PathCom = entity.getCom(COMPONENT.PATH);
			if(pCom != null)
			{
				testShap.graphics.clear();
				testShap.graphics.lineStyle(2, 0xff0000);
				testShap.graphics.moveTo(entity.x - WarDataMgr.Ins().startX, entity.y - WarDataMgr.Ins().startY);
				let path = pCom.getLeftPath();
				let index:number = 1;
				
				for(let i=1; i<path.length; i++)
				{
					let node = path[i];
					testShap.graphics.lineTo(space*node.x + space/2, space*node.y + space/2);
				}
				testShap.graphics.endFill();
			}
			else
			{
				testShap.parent != null && testShap.parent.removeChild(testShap);
			}
		}

		public static DrawHeroAnchor(hero:EntityBase)
		{
			if(DrawUtils.isTest == false)
				return;
			
			let cCom:CampCom = hero.getCom(COMPONENT.CAMP);
			if(cCom == null)
				return;
			let shape = new egret.Shape();
			if(cCom.camp == CAMP.WE)
				shape.graphics.beginFill(0xffffff);
			else if(cCom.camp == CAMP.ENEMY)
				shape.graphics.beginFill(0x000000);
			shape.graphics.lineStyle(2, 0x000000);
				shape.graphics.drawCircle(0, 0, 4);
			shape.graphics.endFill();
			hero.addChildAt(shape, 777);
		}

		public static DrawHeroId(hero:EntityBase)
		{
			if(DrawUtils.isTest == false)
				return;
			let lb = new eui.Label;
			lb.text = `${hero.id}`;
			lb.stroke = 2;
			lb.strokeColor = 0x000;
			lb.x = hero.width >>1;
			lb.y = -50;
			hero.addChild(lb);
		}

		public static DrawGrigd(entity:EntityBase)
		{
			if(entity.hasCom(COMPONENT.GRIGD) == false)
				return;
			let rCom:RigidCom = entity.getCom(COMPONENT.GRIGD);
			let shape = new egret.Shape();
			shape.graphics.beginFill(0xffff00);
			shape.graphics.lineStyle(1, 0x000000);
			shape.graphics.drawCircle(0, 0, rCom.radius);
			shape.graphics.endFill();
			entity.addChildAt(shape, 0);
		}

		public static colorMap:Hash<number, egret.ColorMatrixFilter>;
		public static SetColor(entity:EntityBase, show:boolean, r:number, g:number, b:number, strength:number=1)
		{
			if(this.colorMap == null)
				this.colorMap = new Hash<number, egret.ColorMatrixFilter>();

			if(this.colorMap.has(entity.id) == false)
			{
				let colorFilter = new egret.ColorMatrixFilter();
				this.colorMap.set(entity.id, colorFilter);
				entity.filters = [colorFilter];
			}
			let colorFilter:egret.ColorMatrixFilter = this.colorMap.get(entity.id);
			if(show == false)
			{
				colorFilter.matrix = null;
				return;
			}
			let color = (r<<16) + (g<<8) + b;
			if(!egret.WebGLUtils.checkCanUseWebGL())
			{
				entity.tint = color;
				return;
			}
			if(r==256 && g==256 && b==256)
			{
				entity.filters = null;
			}
			else
			{
				let colorMatrix = [
					1, 0, 0, 0, 100, 
					0, 1, 0, 0, 100, 
					0, 0, 1, 0, 100, 
					0, 0, 0, 1, 0 
				];
				colorMatrix[0] = r / 255;
				colorMatrix[6] = g / 255;
				colorMatrix[12] = b / 255;
				colorMatrix[4] = strength;
				colorMatrix[9] = strength;
				colorMatrix[14] = strength;
				
				colorFilter.matrix = colorMatrix;
			}
		}

		public static DrawAttackRange(entity:EntityBase)
		{
			if(DrawUtils.isTest == false)
				return;
			let aCom:AttackCom = entity.getCom(COMPONENT.ATTACK);
			if(aCom == null)
				return;
			let rangeShape = new egret.Shape();
			rangeShape.name = `attackCom_${entity.id}`;
			rangeShape.graphics.beginFill(0xffff00);
			rangeShape.graphics.lineStyle(1, 0x000);
			rangeShape.graphics.drawCircle(0, 0, aCom.range);
			rangeShape.graphics.endFill();
			entity.addChildAt(rangeShape, 0);
		}
	}
}