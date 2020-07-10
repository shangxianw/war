module war
{
	export class WarPanelData extends DataBase
	{
		public score:number;
		protected init()
		{
			
		}

		protected destroy()
		{
			WarDataMgr.Ins().endWar();
			WarDataMgr.Ins().destroyAll();
		}

		public startWar()
		{
			this.score = 0;
			WarDataMgr.Ins();
			WarDataMgr.Ins().startWar();
		}

		public endWar()
		{

		}
	}

	export class WarPanel extends eui.Component
	{
		private bgRect:eui.Rect;
		private score:eui.Label;
		public gameArea:eui.Group;
		private startBtn:eui.Button;
		private optionGroup:eui.Group;
		
		public info:WarPanelData;
		public constructor()
		{
			super();
			this.skinName = "WarPanelSkin";
		}

		protected init()
		{
			
		}

		protected destroy()
		{
			if(this.info != null)
				this.info.destroyAll();
			this.startBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnStarTap, this)
			this.gameArea.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.OnTouchBegin, this);
			this.gameArea.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.OnTouchMove, this);
			this.gameArea.removeEventListener(egret.TouchEvent.TOUCH_END, this.OnTouchEnd, this);
			this.gameArea.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.OnTouchRelease, this);
		}

		public initData(data:any)
		{
			this.info = data;
			WarDataMgr.Ins().warPanel = this;
		}

		public initView()
		{
			this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnStarTap, this);
			this.gameArea.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.OnTouchBegin, this);
			this.gameArea.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.OnTouchMove, this);
			this.gameArea.addEventListener(egret.TouchEvent.TOUCH_END, this.OnTouchEnd, this);
			this.gameArea.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.OnTouchRelease, this);
		}

		private OnStarTap(e:egret.TouchEvent)
		{
			this.optionGroup.visible = false;
			this.info.startWar();
			WarUtils.CreateBgEntity(0, 0, this.gameArea.width, this.gameArea.height, this.gameArea);

			let p = this.optionGroup.localToGlobal(e.stageX, e.stageY);
			let p2 = this.gameArea.globalToLocal(p.x, p.y);
			WarUtils.CreateMe(p2.x, p2.y, 50, 50, this.gameArea);
		}

		private OnTouchBegin(e:egret.TouchEvent)
		{
			let p = this.optionGroup.localToGlobal(e.stageX, e.stageY);
			let p2 = this.gameArea.globalToLocal(p.x, p.y);
			WarDataMgr.Ins().mouseX = p2.x;
			WarDataMgr.Ins().mouseY = p2.y;
		}

		private OnTouchMove(e:egret.TouchEvent)
		{
			let p = this.optionGroup.localToGlobal(e.stageX, e.stageY);
			let p2 = this.gameArea.globalToLocal(p.x, p.y);
			if(p2.x < 0)
				p2.x = 0;
			else if(p2.x > this.gameArea.width)
				p2.x = this.gameArea.width;
			if(p2.y < 0)
				p2.y = 0;
			else if(p2.y > this.gameArea.height)
				p2.y = this.gameArea.height;
			WarDataMgr.Ins().mouseX = p2.x;
			WarDataMgr.Ins().mouseY = p2.y;
		}

		private OnTouchEnd(e:egret.TouchEvent)
		{
			WarDataMgr.Ins().mouseX = null;
			WarDataMgr.Ins().mouseY = null;
		}

		private OnTouchRelease(e:egret.TouchEvent)
		{
			WarDataMgr.Ins().mouseX = null;
			WarDataMgr.Ins().mouseY = null;
		}

		public OnEndWar()
		{
			this.optionGroup.visible = true;
			this.startBtn.label = `重新开始`;
			this.info.score = 0;
			this.score.text = `分数:${this.info.score}`
			this.destroyGameArea();
		}
		
		public OnRefreshScore(addScore:number)
		{
			this.info.score += addScore;
			this.score.text = `分数:${this.info.score}`
		}

		private destroyGameArea()
		{
			while(this.gameArea.numChildren > 0)
			{
				let child = this.gameArea.removeChildAt(0) as UIBase;
				child.destroyAll();
			}
		}
	}
}