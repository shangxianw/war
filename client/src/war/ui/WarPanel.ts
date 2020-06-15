module war
{
	export class WarPanelData extends ViewData
	{
		protected init()
		{
			this.resGroup = "";
			this.layer = LayerManager.Ins().Panel;
		}

		protected destroy()
		{
			WarDataMgr.Ins().endWar();
			WarDataMgr.Ins().destroyAll();
		}

		public packData()
		{
			WarDataMgr.Ins();
			WarDataMgr.Ins().startWar();
		}
	}

	export class WarPanel extends ViewBase
	{
		private testGrid:eui.Group;
		private entityGroup:eui.Group;
		public info:WarPanelData;
		public constructor()
		{
			super("WarPanelSkin", WarPanelData);	
		}

		protected init()
		{
			
		}

		protected destroy()
		{
			if(this.info != null)
				this.info.destroyAll();
		}

		public initData(data:any)
		{
			this.info.packData();
		}

		public initView()
		{
			DrawUtils.DrawGrid(this.testGrid);
			this.initEntity();
		}

		private initEntity()
		{
			let iptCom:InputCom = PoolManager.Ins().pop(InputCom) as InputCom;
			iptCom.packQueen(INPUT.CREATE_QUEEN, 7, 3, this.entityGroup, CAMP.WE);
			WarDataMgr.Ins().inputArray.push(iptCom);

			let iptCom2:InputCom = PoolManager.Ins().pop(InputCom) as InputCom;
			iptCom2.packQueen(INPUT.CREATE_QUEEN, 7, 12, this.entityGroup, CAMP.WE);
			WarDataMgr.Ins().inputArray.push(iptCom2);

			let iptCom3:InputCom = PoolManager.Ins().pop(InputCom) as InputCom;
			iptCom3.packQueen(INPUT.CREATE_QUEEN, 26, 3, this.entityGroup, CAMP.ENEMY);
			WarDataMgr.Ins().inputArray.push(iptCom3);

			let iptCom4:InputCom = PoolManager.Ins().pop(InputCom) as InputCom;
			iptCom4.packQueen(INPUT.CREATE_QUEEN, 26, 12, this.entityGroup, CAMP.ENEMY);
			WarDataMgr.Ins().inputArray.push(iptCom4);


			let iptCom5:InputCom = PoolManager.Ins().pop(InputCom) as InputCom;
			iptCom5.packKing(INPUT.CREATE_KING, 3, 7, this.entityGroup, CAMP.WE);
			WarDataMgr.Ins().inputArray.push(iptCom5);

			let iptCom6:InputCom = PoolManager.Ins().pop(InputCom) as InputCom;
			iptCom6.packKing(INPUT.CREATE_KING, 32, 7, this.entityGroup, CAMP.ENEMY);
			WarDataMgr.Ins().inputArray.push(iptCom6);
		}
	}
}