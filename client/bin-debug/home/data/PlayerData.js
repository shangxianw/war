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
    var PlayerData = (function (_super) {
        __extends(PlayerData, _super);
        function PlayerData() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PlayerData.prototype.init = function () {
            this.playerId = null;
            this.iconId = null;
            this.iconFrameId = null;
            this.level = null;
            this.exp = null;
            this.playerName = null;
            this.cups = null;
            this.teamArray = [];
            this.kaMap = new Hash();
        };
        PlayerData.prototype.destroy = function () {
            DataUtils.DestroyDataBaseMap(this.kaMap);
        };
        return PlayerData;
    }(DataBase));
    home.PlayerData = PlayerData;
    __reflect(PlayerData.prototype, "home.PlayerData");
})(home || (home = {}));
//# sourceMappingURL=PlayerData.js.map