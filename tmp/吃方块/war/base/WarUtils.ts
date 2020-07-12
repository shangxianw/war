module war
{
	export class WarUtils
	{
		public static Init()
		{

		}

		public static Destroy()
		{

		}

		public static CreateMe(x:number, y:number, w:number, h:number, parent:egret.DisplayObjectContainer)
		{
			let hero = new HeroEntity();
			
			let posCom = new PosCom();
			posCom.setXY(x, y);
			posCom.setSize(w, h);
			posCom.setAnchorXY(w>>1, h>>1);
			posCom.setColor(EntityColor.Me);
			hero.setComponent(posCom);

			let renderCom = new RenderCom();
			let heroRender = new HeroRender();
			parent.addChild(heroRender)
			renderCom.setRender(heroRender, parent);
			hero.setComponent(renderCom);

			let ctrlCom = new ControlCom();
			hero.setComponent(ctrlCom);

			let healthCom = new HealthCom();
			healthCom.setHp(100)
			posCom.setScaleXY(1, 1);
			hero.setComponent(healthCom);

			WarDataMgr.Ins().addEntity(hero);
			DrawUtils.DrawHasCode(hero);
		}

		public static CreateAI(x:number, y:number, w:number, h:number, parent:egret.DisplayObjectContainer)
		{
			let hero = new HeroEntity();

			let renderCom = new RenderCom();
			let heroRender = new HeroRender();
			parent.addChild(heroRender)
			renderCom.setRender(heroRender, parent);
			hero.setComponent(renderCom);

			let aiType = Math.random() > 0.5 ? AIType.Nice : AIType.Bad
			let aiCom = new AICom();
			aiCom.setAiType(aiType);
			hero.setComponent(aiCom);

			let posCom = new PosCom();
			posCom.setXY(x, y);
			posCom.setSize(w, h);
			posCom.setAnchorXY(w>>1, h>>1);
			let color = aiType == AIType.Nice ? EntityColor.NiceAI : EntityColor.BadAI;
			posCom.setColor(color);
			hero.setComponent(posCom);

			let healthCom = new HealthCom();
			healthCom.setHp(100)
			posCom.setScaleXY(1, 1);
			hero.setComponent(healthCom);

			WarDataMgr.Ins().addEntity(hero);
			DrawUtils.DrawHasCode(hero);
		}

		public static CreateBgEntity(x:number, y:number, w:number, h:number, parent:egret.DisplayObjectContainer)
		{
			let bg = new BgEntity();

			let posCom = new PosCom();
			posCom.setXY(x, y);
			posCom.setSize(w, h);
			posCom.setColor(EntityColor.Bg);
			bg.setComponent(posCom);

			let renderCom = new RenderCom();
			let bgRender = new BgRender();
			parent.addChildAt(bgRender, 0);
			renderCom.setRender(bgRender, parent);
			bg.setComponent(renderCom);
			WarDataMgr.Ins().addEntity(bg)
			WarDataMgr.Ins().bgEntity = bg;
		}

		public static RemoveEntity(entity:EntityBase)
		{
			let entity2 = WarDataMgr.Ins().removeEntity(entity.hasCode);
			entity.destroyAll();
			entity = null;
			entity2 = null;
		}
	}
}