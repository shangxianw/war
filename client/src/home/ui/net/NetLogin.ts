module net
{
	export class NetLogin
	{
		public init()
		{
			NetManager.Ins().setNet(101, NetLogin.S2CLogin, this);
		}

		public destroy()
		{
			// NetManager 会清理
		}

		private static C2SLogin_Account:string;
		private static C2SLogin_CBFn:Function;
		private static C2SLogin_thisObj:Object;
		public static C2SLogin(account:string, cbFn:Function, thisObj:Object)
		{
			NetLogin.C2SLogin_CBFn = cbFn;
			NetLogin.C2SLogin_thisObj = thisObj;

			let isTest = false;
			if(!isTest)
			{
				let sendData = new Protocol.LoginGame_Request();
				sendData.account = account;
				let sendByte = Protocol.LoginGame_Request.encode(sendData).finish();
				NetManager.Ins().C2SMessage(Protocol.MessageID.LOGIN_GAME_REQ, sendByte);
			}
			else
			{
				home.HomeDataMgr.Ins();
				home.HomeDataMgr.Ins().packMyData();
				NetLogin.C2SLogin_CBFn.call(NetLogin.C2SLogin_thisObj);
			}
		}

		public static S2CLogin(data:egret.ByteArray)
		{
			let info = Protocol.LoginGame_Respond.decode(data.bytes)
			1;

		}
	}
}