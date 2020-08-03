module war
{
	export class WarFactory
	{
		public static CreateHero(heroId:number, localX:number, localY:number)
		{
			let entity = new HeroEntity()

			let posCom = new PosCom()
			let gridX = WarUtils.LocalX2GridX(localX)
			let gridY = WarUtils.LocalY2GridY(localY)
			posCom.x = WarUtils.GridX2LocalX(gridX)
			posCom.y = WarUtils.GridX2LocalX(gridY)
			entity.setComponent(posCom)
			
			let renderCom = new RenderCom()
			let render = new HeroRender()
			render.initData(heroId)
			render.x = posCom.x
			render.y = posCom.y
			renderCom.setRender(render)
			entity.setComponent(renderCom)

			WarDataMgr.Ins().addEntity(entity)
			LayerManager.Ins().body.addChild(render)
		}
	}
}