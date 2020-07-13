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
    var StepRender = (function (_super) {
        __extends(StepRender, _super);
        function StepRender() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        StepRender.prototype.init = function () {
            this.renderType = war.Render.Step;
            if (war.DrawUtils.isTest == true) {
                this.collisionShape = new egret.Shape();
                this.addChildAt(this.collisionShape, 0);
                war.DrawUtils.DrawRectCollision(this);
                war.DrawUtils.DrawAnchorCenter(this);
            }
            this.showImg = new eui.Image;
            this.showImg.top = this.showImg.bottom = this.showImg.left = this.showImg.right = 0;
            this.showImg.scale9Grid = new egret.Rectangle(14, 10, 12, 22);
            this.addChild(this.showImg);
            this.setShowImg("aaa_png");
        };
        StepRender.prototype.destroy = function () {
        };
        StepRender.prototype.setShowImg = function (source) {
            this.showImg.source = source;
        };
        StepRender.prototype.updateRender = function (posCom) {
            // DrawUtils.DrawRectCollision(this);
            war.DrawUtils.DrawAnchorCenter(this);
        };
        return StepRender;
    }(war.RenderBase));
    war.StepRender = StepRender;
    __reflect(StepRender.prototype, "war.StepRender");
})(war || (war = {}));
