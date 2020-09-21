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
var FullImage = (function (_super) {
    __extends(FullImage, _super);
    function FullImage() {
        return _super.call(this) || this;
    }
    FullImage.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        // this.anchorOffsetX = this.width/2;
        // this.anchorOffsetY = this.height/2;
        // this.x = GameData.Width >> 1
        // this.y = GameData.Height >> 1
    };
    return FullImage;
}(eui.Image));
__reflect(FullImage.prototype, "FullImage");
//# sourceMappingURL=FullScreenImage.js.map