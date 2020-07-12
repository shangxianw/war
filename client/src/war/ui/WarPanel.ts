module war
{
	export class WarPanelData extends ViewData
	{
		public score:number;
		protected init()
		{
			this.resGroup = [];
			this.layer = LayerManager.Ins().war;
		}

		protected destroy()
		{
			
		}

		public startWar()
		{
			WarDataMgr.Ins().updateStepLevel();
			WarDataMgr.Ins().startWar();
		}

		public endWar()
		{
			WarDataMgr.Ins().endWar();
		}
	}

	export class WarPanel extends ViewBase
	{
		private startBtn:eui.Button;
		private infoGroup:eui.Group;
		private bgGroup:eui.Group;
		private gameArea:eui.Group;
		private optionGroup:eui.Group;
		private gameScro:eui.Scroller;
		private score:eui.Label;
		private restartBtn:eui.Button;
		private restartBtn2:eui.Button;
		private endGameGroup:eui.Group;
		
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
			// MessageMgr.Ins().unObserve(1, this.OnRefreshScore, this);
			MessageMgr.Ins().unObserve(2, this.OnRefreshScro, this);
			MessageMgr.Ins().unObserve(3, this.OnEndGame, this);
			this.optionGroup.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.OnOptionTap, this);
			this.optionGroup.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.OnOptionMoveTap, this);
			this.optionGroup.removeEventListener(egret.TouchEvent.TOUCH_END, this.OnOptionEndTap, this);
			this.optionGroup.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.OnOptionOutsideTap, this);
			this.restartBtn2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnReStartTap, this);
			this.restartBtn2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnReStart2Tap, this);
		}

		public open()
		{
			this.endGameGroup.visible = false;
			this.score.text = `分数：${0}`;
			this.gameScro.viewport.scrollV = 0;
			this.info.startWar();
			WarUtils.CreatePlayerEntity(200, 1000, this.gameArea);
			// WarUtils.CreateStepEntity(360, 1280, 720, 50, this.gameArea);
			WarUtils.CreateStepEntity(360, 1200, 720, 50, this.gameArea);
			// WarUtils.CreateStepEntity(360, 500, 720, 50, this.gameArea);
			// WarUtils.CreateStepEntity(360, 200, 720, 50, this.gameArea);
			// WarUtils.CreateStepEntity(360, -100, 720, 50, this.gameArea);
			// WarUtils.CreateStepEntity(360, -400, 720, 50, this.gameArea);
			MessageMgr.Ins().observe(1, this.OnRefreshScore, this);
			MessageMgr.Ins().observe(2, this.OnRefreshScro, this);
			MessageMgr.Ins().observe(3, this.OnEndGame, this);
			this.optionGroup.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.OnOptionTap, this);
			this.optionGroup.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.OnOptionMoveTap, this);
			this.optionGroup.addEventListener(egret.TouchEvent.TOUCH_END, this.OnOptionEndTap, this);
			this.optionGroup.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.OnOptionOutsideTap, this);
			this.restartBtn2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnReStartTap, this);
			this.restartBtn2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnReStart2Tap, this);
			DrawUtils.DrawStandardLine(WarDataMgr.Ins().currStepLevel, this.gameArea);
		}

		private OnRefreshScore(score:number)
		{
			this.score.text = `分数：${score}`;
		}

		private OnRefreshScro(addScro:number)
		{
			this.gameScro.viewport.scrollV += addScro;
			this.score.text = `分数：${Math.floor(Math.abs(this.gameScro.viewport.scrollV))} stepCount:${WarDataMgr.Ins().MaxStepCount}`;
			// WarDataMgr.Ins().updateStepLevel(WarDataMgr.Ins().currStepLevel - addScro);
		}

		private OnEndGame()
		{
			this.info.endWar();
			this.endGameGroup.visible = true;
		}

		// ---------------------------------------------------------------------- Event
		private OnOptionTap(e:egret.TouchEvent)
		{
			WarDataMgr.Ins().beginX = e.localX;
			WarDataMgr.Ins().endX = e.localX;
		}

		private OnOptionMoveTap(e:egret.TouchEvent)
		{
			WarDataMgr.Ins().beginX
			WarDataMgr.Ins().endX = e.localX;
			console.log(WarDataMgr.Ins().beginX, WarDataMgr.Ins().endX)
		}

		private OnOptionEndTap(e:egret.TouchEvent)
		{
			WarDataMgr.Ins().beginX = 0;
			WarDataMgr.Ins().endX = 0;
		}

		private OnOptionOutsideTap(e:egret.TouchEvent)
		{
			WarDataMgr.Ins().beginX = 0;
			WarDataMgr.Ins().endX = 0;
		}

		private OnReStartTap()
		{
			this.info.endWar();
			this.destroy();
			this.open();
		}

		private OnReStart2Tap()
		{
			this.endGameGroup.visible = false;
			this.info.startWar();
		}
	}
}


