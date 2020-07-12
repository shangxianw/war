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

		public static CreateStepEntity(x:number, y:number, w:number, h:number, parent:egret.DisplayObjectContainer)
		{
			let entity = new StepEntity();

			let posCom = new PosCom();
			posCom.setXY(x, y);
			posCom.setWH(w, h);
			entity.setComponent(posCom);

			let rigidCom = new RigidCom();
			entity.setComponent(rigidCom);

			let stepCom = new StepCom();
			entity.setComponent(stepCom);

			let renderCom = new RenderCom();
			let stepRender = new StepRender();
			parent.addChild(stepRender);
			renderCom.setRender(stepRender);
			entity.setComponent(renderCom);

			WarDataMgr.Ins().addEntity(entity);
			return entity;
		}

		public static CreatePlayerEntity(x:number, y:number, parent:egret.DisplayObjectContainer)
		{
			let entity = new PlayerEntity();

			let posCom = new PosCom();
			posCom.setXY(x, y);
			posCom.setWH(204, 120);
			entity.setComponent(posCom);

			let ctrlCom = new CtrlCom();
			entity.setComponent(ctrlCom);

			let rigidCom = new RigidCom();
			entity.setComponent(rigidCom);

			let speedCom = new SpeedCom();
			speedCom.setSpeed(0, 0);
			entity.setComponent(speedCom);

			let gravityCom = new GravityCom();
			entity.setComponent(gravityCom);

			let renderCom = new RenderCom();
			let playerRender = new PlayerRender();
			parent.addChild(playerRender);
			renderCom.setRender(playerRender);
			entity.setComponent(renderCom);

			WarDataMgr.Ins().addEntity(entity);
			return entity;
		}
	}
}