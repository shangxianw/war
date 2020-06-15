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
    var MovieClip = (function (_super) {
        __extends(MovieClip, _super);
        function MovieClip() {
            return _super.call(this) || this;
        }
        MovieClip.prototype.initData = function (fileName, clipName) {
            // 很危险。
            ResManager.Ins().loadRes(fileName + "_json");
            ResManager.Ins().loadRes(fileName + "_png");
            var data = RES.getRes(fileName + "_json");
            var txtr = RES.getRes(fileName + "_png");
            var mcFactory = new egret.MovieClipDataFactory(data, txtr);
            this.movieClipData = mcFactory.generateMovieClipData(clipName);
        };
        MovieClip.prototype.startPlay = function (action, count) {
            if (this.currAction != action) {
                this.currAction = action;
                this.gotoAndPlay(action, count);
            }
        };
        return MovieClip;
    }(egret.MovieClip));
    war.MovieClip = MovieClip;
    __reflect(MovieClip.prototype, "war.MovieClip");
})(war || (war = {}));
//# sourceMappingURL=MovieClip.js.map