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
        var _this = _super.call(this) || this;
        _this.width = 0;
        _this.height = 0;
        return _this;
    }
    MovieClip.prototype.init = function () {
        this.mc = new egret.MovieClip();
        this.addChild(this.mc);
        var shap = new egret.Shape();
        shap.graphics.beginFill(0xff0000);
        shap.graphics.drawCircle(0, 0, 5);
        shap.graphics.endFill();
        this.addChild(shap);
    };
    MovieClip.prototype.initData = function (fileName, clipName, action, count) {
        var _this = this;
        if (action === void 0) { action = null; }
        if (count === void 0) { count = -1; }
        if (fileName == null || clipName == null) {
            // LogUtils.Error(`参数错误`);
            return false;
        }
        ResManager.Ins().loadResAsync(fileName + "_json", function (data1, key1) {
            ResManager.Ins().loadResAsync(fileName + "_png", function (data2, key2) {
                var data = data1;
                var txtr = data2;
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
        this.mcFactory = null;
        this.mc = null;
    };
    MovieClip.prototype.play = function (action, count) {
        if (count === void 0) { count = -1; }
        if (this.mc.currentLabel == action)
            return;
        this.mc.gotoAndPlay(action, count);
    };
    MovieClip.prototype.stop = function () {
        this.mc.stop();
    };
    MovieClip.prototype.setFrameRate = function (frameRate) {
        this.mc.frameRate = frameRate;
    };
    return MovieClip;
}(UIBase));
__reflect(MovieClip.prototype, "MovieClip");
//# sourceMappingURL=MovieClip.js.map