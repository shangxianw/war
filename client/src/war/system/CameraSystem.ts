module war
{
	/**
	 * 名称：镜头系统
	 * 原理：将render的本地坐标转换成舞台坐标，检测当该舞台坐标低于屏幕一半时，镜头发生滚动
	 * 注意点：1、拿posCom的坐标来比较，而不是render的，因为渲染系统是最后执行的，所以第一帧的坐标肯定是0，会出现镜头瞬间到达目标位置的情况
	 */
	export class CameraSystem extends SystemBase
	{
		protected init()
		{
			this.sysType = System.Camera;
		}

		protected destroy()
		{

		}
		
		public update(entity:EntityBase, deltaTime:number)
		{
			if(entity == null)
				return;
			
			let posCom = entity.getComponent(Component.Pos) as PosCom;
			let ctrlCom = entity.getComponent(Component.Ctrl) as CtrlCom;
			let renderCom = entity.getComponent(Component.Render) as RenderCom;
			if(posCom == null || ctrlCom == null || renderCom == null)
				return;
			
			let render = renderCom.render;
			let point = render.parent.localToGlobal(posCom.x, posCom.y);
			let halfStageHeight = render.stage.height/2;
			if(point.y > 1400) // 死亡
			{
				MessageManager.Ins().fire(3);
				return;
			}

			if(point.y >= 640)
				return;
			let addScro = point.y - 640;
			MessageManager.Ins().fire(2, addScro);
			WarDataMgr.Ins().updateStepLevel(posCom.y + WarDataMgr.Ins().StageHeight/2) // 用的是poscom，不是point！！！因为标准线是在滚动条上的，不是在舞台上
		}
	}
}