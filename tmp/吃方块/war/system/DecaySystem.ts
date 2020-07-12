module war
{
	export class DecaySystem extends SystemBase
	{
		protected init()
		{
			this.sysType = System.Decay;
		}

		protected destroy()
		{

		}
		
		public update(entity:EntityBase, deltaTime:number)
		{
			if(entity == null)
				return;
			
			let healthCom = entity.getComponent(Component.Health) as HealthCom;
			if(healthCom == null)
				return;
			
			let ctrlCom = entity.getComponent(Component.Ctrl) as ControlCom;
			
			if(healthCom.hp <= 5) // 死亡
			{
				WarUtils.RemoveEntity(entity);
				if(ctrlCom != null) // 玩家
				{
					WarDataMgr.Ins().endWar();
				}
				return;
			}

			let posCom = entity.getComponent(Component.Pos) as PosCom;
			if(posCom == null)
				return;
			
			let newHp = healthCom.hp - 0.5
			healthCom.setHp(newHp);
			posCom.setScaleXY(healthCom.hp/100, healthCom.hp/100)
			return;
		}
	}
}
