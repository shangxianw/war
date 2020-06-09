module war
{
	export class WarPanelData extends DataBase
	{
		protected init()
		{

		}

		protected destroy()
		{

		}
	}

	export class WarPanel extends ViewBase
	{
		private testGrid:eui.Group;

		public PanelId:number;
		public Layer:eui.Component;

		public drawGroup:eui.Group;
		private entityGroup:eui.Group;
		public constructor()
		{
			super("WarPanelSkin");
		}

		protected init()
		{
			this.PanelId = ViewIdConst.WarPanel;
			this.Layer = LayerManager.Ins().War;
			this.addEventListener(egret.Event.ENTER_FRAME, this.OnUpdate, this);
			// WarDataMgr.Ins().startWar();
			this.addEventListener(egret.Event.ENTER_FRAME, ()=>{
				WarDataMgr.Ins().update();
			}, this);
		}

		protected destroy()
		{
			this.testGrid.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnGridTap, this);
			this.removeEventListener(egret.Event.ENTER_FRAME, this.OnUpdate, this);
		}

		private queen1Id:number;
		public initData(info:WarPanelData)
		{
			DrawUtils.DrawGrid(this.drawGroup);
			// let queen1 = WarUtils.CreateEntity(ENTITY.QUEEN) as QueenEntity;
			// queen1.x = WarUtils.ToLocalX(7);
			// queen1.y = WarUtils.ToLocalY(3);
			// this.entityGroup.addChild(queen1);
			// WarDataMgr.Ins().entityMap.set(queen1.id, queen1);

			// let queen2 = WarUtils.CreateEntity(ENTITY.QUEEN) as QueenEntity;
			// queen2.x = WarUtils.ToLocalX(7);
			// queen2.y = WarUtils.ToLocalY(12);
			// this.entityGroup.addChild(queen2);
			// WarDataMgr.Ins().entityMap.set(queen2.id, queen2);
			// let space = WarDataMgr.Ins().grid.space;
			// let localX = WarDataMgr.Ins().grid.startX + space * Math.floor(WarDataMgr.Ins().grid.numCols/4);
			// let localY = WarDataMgr.Ins().grid.startY + space * Math.floor(WarDataMgr.Ins().grid.numRows/4);
			// let queen1:QueenEntity = new QueenEntity();
			// (queen1.getCom(COMPONENT.ACTION) as ActionCom).setDir(DIRECTION.DOWN);
			// queen1.x = localX;
			// queen1.y = localY;
			// this.entityGroup.addChild(queen1);
			// this.queen1Id = queen1.id;

			// let queen2:QueenEntity = new QueenEntity();
			// localX = WarDataMgr.Ins().grid.startX + space * Math.floor(WarDataMgr.Ins().grid.numCols - WarDataMgr.Ins().grid.numCols/4);
			// localY = WarDataMgr.Ins().grid.startY + space * Math.floor(WarDataMgr.Ins().grid.numRows/4);
			// queen2.x = localX;
			// queen2.y = localY;
			// (queen2.getCom(COMPONENT.ACTION) as ActionCom).setDir(DIRECTION.DOWN);

			// this.entityGroup.addChild(queen2);
			// WarDataMgr.Ins().addEntity(queen1);
			// WarDataMgr.Ins().addEntity(queen2);

			this.testGrid.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnGridTap, this);
		}

		public OnUpdate(e:egret.Event)
		{
			WarDataMgr.Ins().update();
		}

		// ---------------------------------------------------------------------- test
		private OnGridTap(e:egret.TouchEvent)
		{	
			// 创建英雄
			let iCom = PoolManager.Ins().pop(InputCom) as InputCom;
			iCom.inputType = INPUT.CREATE_HERO;
			iCom.x1 = Math.floor(Math.random()*35);
			iCom.y1 = Math.floor(Math.random()*15);
			iCom.x2 = 3;
			iCom.y2 = 7;
			iCom.parent = this.entityGroup;
			WarDataMgr.Ins().inputArray.push(iCom);
		}
	}
}
