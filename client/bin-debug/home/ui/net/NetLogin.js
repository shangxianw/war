var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var net;
(function (net) {
    var NetLogin = (function () {
        function NetLogin() {
        }
        NetLogin.prototype.init = function () {
            // NetManager.Ins().setNet(101, NetLogin.S2CLogin, this);
        };
        NetLogin.prototype.destroy = function () {
        };
        NetLogin.C2SLogin = function (account, cbFn, thisObj) {
            var isTest = true;
            if (!isTest) {
                var sendData = new Protocol.LoginGame_Request();
                sendData.account = account;
                var sendByte = Protocol.LoginGame_Request.encode(sendData).finish();
                NetManager.Ins().C2SMessage(Protocol.MessageID.LOGIN_GAME_REQ, sendByte, cbFn, thisObj);
            }
            else {
                home.HomeDataMgr.Ins();
                home.HomeDataMgr.Ins().packMyData();
                cbFn.call(thisObj);
            }
        };
        NetLogin.S2CLogin = function (data) {
            var info = Protocol.LoginGame_Respond.decode(data.bytes);
            1;
        };
        return NetLogin;
    }());
    net.NetLogin = NetLogin;
    __reflect(NetLogin.prototype, "net.NetLogin");
})(net || (net = {}));
//# sourceMappingURL=NetLogin.js.map