var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var net;
(function (net) {
    var NetLogin = (function () {
        function NetLogin() {
        }
        NetLogin.prototype.init = function () {
            NetManager.Ins().setNet(0, NetLogin.S2CLogin, this);
        };
        NetLogin.prototype.destroy = function () {
            // NetManager 会清理
        };
        NetLogin.C2SLogin = function (account, cbFn, thisObj) {
            NetLogin.C2SLogin_CBFn = cbFn;
            NetLogin.C2SLogin_thisObj = thisObj;
            var isTest = true;
            if (!isTest) {
            }
            else {
                home.HomeDataMgr.Ins();
                home.HomeDataMgr.Ins().packDataByClient();
                home.HomeDataMgr.Ins().kaDataMgr.packDataClient();
                NetLogin.C2SLogin_CBFn.call(NetLogin.C2SLogin_thisObj);
            }
        };
        NetLogin.S2CLogin = function () {
        };
        return NetLogin;
    }());
    net.NetLogin = NetLogin;
    __reflect(NetLogin.prototype, "net.NetLogin");
})(net || (net = {}));
//# sourceMappingURL=NetLogin.js.map