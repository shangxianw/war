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
    var BgRender = (function (_super) {
        __extends(BgRender, _super);
        function BgRender() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BgRender.prototype.init = function () {
        };
        BgRender.prototype.destroy = function () {
        };
        return BgRender;
    }(war.RenderBase));
    war.BgRender = BgRender;
    __reflect(BgRender.prototype, "war.BgRender");
})(war || (war = {}));
//# sourceMappingURL=BgRender.js.map