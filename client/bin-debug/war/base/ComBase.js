var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var war;
(function (war) {
    var ComBase = (function () {
        function ComBase() {
        }
        ComBase.prototype.init = function () {
        };
        ComBase.prototype.destroy = function () {
        };
        return ComBase;
    }());
    war.ComBase = ComBase;
    __reflect(ComBase.prototype, "war.ComBase");
})(war || (war = {}));
//# sourceMappingURL=ComBase.js.map