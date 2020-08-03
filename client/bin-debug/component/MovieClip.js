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
        var _this = this;
        if (action === void 0) { action = null; }
        if (count === void 0) { count = 0; }
        if (fileName == null || clipName == null) {
            // LogUtils.Error(`参数错误`);
            return false;
        }
        var data = RES.getResAsync(fileName + "_json", function () {
            var txtr = RES.getResAsync(fileName + "_png", function () {
                data = RES.getRes(fileName + "_json");
                var txtr = RES.getRes(fileName + "_png");
                if (data == null || txtr == null) {
                    // LogUtils.Error(`资源未加载`);
                    return false;
                }
                _this.mcFactory = new egret.MovieClipDataFactory(data, txtr);
                _this.mc.movieClipData = _this.mcFactory.generateMovieClipData(clipName);
                if (action != null) {
                    _this.play(action, count);
                }
                return true;
            }, _this);
        }, this);
    };
    MovieClip.prototype.destroy = function () {
        this.mcFactory.clearCache();
    };
    MovieClip.prototype.play = function (action, count) {
        if (this.mc.currentLabel == action)
            return;
        this.mc.gotoAndPlay(action, count);
        this.height = this.mc.height;
    };
    return MovieClip;
}(UIBase));
__reflect(MovieClip.prototype, "MovieClip");
//# sourceMappingURL=MovieClip.js.map