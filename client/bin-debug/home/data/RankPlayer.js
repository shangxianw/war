var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var home;
(function (home) {
    var RankPlayer = (function (_super) {
        __extends(RankPlayer, _super);
        function RankPlayer() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return RankPlayer;
    }(home.PlayerData));
    home.RankPlayer = RankPlayer;
    __reflect(RankPlayer.prototype, "home.RankPlayer");
})(home || (home = {}));
//# sourceMappingURL=RankPlayer.js.map