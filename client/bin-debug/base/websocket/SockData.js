var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SockData = (function () {
    function SockData() {
    }
    SockData.prototype.packData = function (netId, data) {
        this.netId = netId;
        this.data = data;
    };
    SockData.prototype.detsroy = function () {
    };
    return SockData;
}());
__reflect(SockData.prototype, "SockData");
//# sourceMappingURL=SockData.js.map