module war
{
	export class WarFactory
	{
		public static RemoveHero(hasCode:number)
		{
			let entity = WarDataMgr.Ins().getEntity(hasCode)
			WarDataMgr.Ins().removeEntity(entity)
			let renderCom = entity.getComponent(Component.Render) as RenderCom
			renderCom.render.parent.removeChild(renderCom.render)
			entity.destroyAll()
		}

		public static CreateHero(heroId:number, localX:number, localY:number)
		{
			let entity = new HeroEntity()

			let posCom = new PosCom()
			let gridX = WarUtils.LocalX2GridX(localX)
			let gridY = WarUtils.LocalY2GridY(localY)
			posCom.x = WarUtils.GridX2LocalX(gridX)
			posCom.y = WarUtils.GridX2LocalX(gridY)
			entity.setComponent(posCom)
			
			let speedCom = new SpeedCom()
			speedCom.setData(0.06, 0)
			entity.setComponent(speedCom)

			let renderCom = new RenderCom()
			let render = new HeroRender()
			// render.initData(heroId)
			render.x = posCom.x
			render.y = posCom.y
			renderCom.setRender(render)
			entity.setComponent(renderCom)

			// let collisionCom = new CollisionCom()
			// collisionCom.type = Collision.Circle;
			// collisionCom.range = 30
			// entity.setComponent(collisionCom)

			let attackCom = new AttackCom()
			attackCom.range = 20 + Math.floor(Math.random() * 40)
			entity.setComponent(attackCom)

			let actionCom = new ActionCom()
			actionCom.action = Action.Run
			entity.setComponent(actionCom)

			let pathCom = new PathCom()
			let path = WarDataMgr.Ins().findPath(gridX, gridY, Math.floor(Math.random() * WarDataMgr.Ins().Ncols), Math.floor(Math.random() * WarDataMgr.Ins().Nrows))
			pathCom.setPath(path)
			entity.setComponent(pathCom)

			WarDataMgr.Ins().addEntity(entity)
			LayerManager.Ins().war.body.addChild(render)
		}
	}
}