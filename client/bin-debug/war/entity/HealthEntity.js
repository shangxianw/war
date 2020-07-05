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
    var HealthBar = (function (_super) {
        __extends(HealthBar, _super);
        function HealthBar() {
            return _super.call(this, "HealthBarSkin") || this;
        }
        HealthBar.prototype.init = function () {
            this.anchorOffsetX = this.width >> 1;
            this.anchorOffsetY = this.height >> 1;
            // DrawUtils.DrawEntityId(this);
        };
        HealthBar.prototype.destroy = function () {
        };
        return HealthBar;
    }(UIBase));
    war.HealthBar = HealthBar;
    __reflect(HealthBar.prototype, "war.HealthBar");
})(war || (war = {}));
//# sourceMappingURL=HealthEntity.js.map