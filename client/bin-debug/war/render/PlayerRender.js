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
var war;
(function (war) {
    var PlayerRender = (function (_super) {
        __extends(PlayerRender, _super);
        function PlayerRender() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PlayerRender.prototype.init = function () {
            this.renderType = war.Render.Player;
            if (war.DrawUtils.isTest == true) {
                this.collisionShape = new egret.Shape();
                this.addChildAt(this.collisionShape, 0);
                war.DrawUtils.DrawRectCollision(this);
                war.DrawUtils.DrawAnchorCenter(this);
            }
            this.showImg = new eui.Image;
            this.addChild(this.showImg);
            this.setShowImg("heroicon_30100_png");
        };
        PlayerRender.prototype.destroy = function () {
        };
        PlayerRender.prototype.updateRender = function (posCom) {
            war.DrawUtils.DrawRectCollision(this);
            war.DrawUtils.DrawAnchorCenter(this);
        };
        PlayerRender.prototype.setShowImg = function (source) {
            this.showImg.source = source;
        };
        return PlayerRender;
    }(war.RenderBase));
    war.PlayerRender = PlayerRender;
    __reflect(PlayerRender.prototype, "war.PlayerRender");
})(war || (war = {}));
//# sourceMappingURL=PlayerRender.js.map