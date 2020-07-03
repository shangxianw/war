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
var MovieClip = (function (_super) {
    __extends(MovieClip, _super);
    function MovieClip() {
        return _super.call(this) || this;
    }
    MovieClip.prototype.init = function () {
        this.mc = new egret.MovieClip();
        this.addChild(this.mc);
    };
    MovieClip.prototype.initData = function (fileName, clipName, action, count) {
        if (action === void 0) { action = null; }
        if (count === void 0) { count = 0; }
        if (fileName == null || clipName == null) {
            LogUtils.Error("\u53C2\u6570\u9519\u8BEF");
            return false;
        }
        var data = RES.getRes(fileName + "_json");
        var txtr = RES.getRes(fileName + "_png");
        if (data == null || txtr == null) {
            LogUtils.Error("\u8D44\u6E90\u672A\u52A0\u8F7D");
            return false;
        }
        this.mcFactory = new egret.MovieClipDataFactory(data, txtr);
        this.mc.movieClipData = this.mcFactory.generateMovieClipData(clipName);
        if (action != null) {
            this.play(action, count);
        }
        return true;
    };
    MovieClip.prototype.destroy = function () {
        this.mcFactory.clearCache();
    };
    MovieClip.prototype.play = function (action, count) {
        this.mc.gotoAndPlay(action, count);
    };
    return MovieClip;
}(UIBase));
__reflect(MovieClip.prototype, "MovieClip");
//# sourceMappingURL=MovieClip.js.map