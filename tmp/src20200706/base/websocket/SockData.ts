class SockData
{
	public netId:number;
	public data:egret.ByteArray;
	public packData(netId:number, data:egret.ByteArray)
	{
		this.netId = netId;
		this.data = data;
	}

	public detsroy()
	{

	}
}