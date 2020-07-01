module net
{
	export class NetLogin
	{
		public init()
		{
			// NetManager.Ins().setNet(101, NetLogin.S2CLogin, this);
		}

		public destroy()
		{
			
		}

		public static C2SLogin(account:string, cbFn:Function, thisObj:Object)
		{
			let isTest = false;
			if(!isTest)
			{
				let sendData = new Protocol.LoginGame_Request();
				sendData.account = account;
				let sendByte = Protocol.LoginGame_Request.encode(sendData).finish();
				NetManager.Ins().C2SMessage(Protocol.MessageID.LOGIN_GAME_REQ, sendByte, cbFn, thisObj);
			}
			else
			{
				home.HomeDataMgr.Ins();
				home.HomeDataMgr.Ins().packMyData();
				cbFn.call(thisObj);
			}
		}

		public static S2CLogin(data:egret.ByteArray)
		{
			let info = Protocol.LoginGame_Respond.decode(data.bytes)
			1;

		}
	}
}