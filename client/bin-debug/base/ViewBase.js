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
var ViewBase = (function (_super) {
    __extends(ViewBase, _super);
    function ViewBase(skinName) {
        return _super.call(this, skinName) || this;
    }
    ViewBase.prototype.initData = function (data) {
        if (data === void 0) { data = null; }
    };
    ;
    ViewBase.prototype.initAll = function () {
        _super.prototype.initAll.call(this);
    };
    ViewBase.prototype.destroyAll = function () {
        _super.prototype.destroyAll.call(this);
    };
    ViewBase.prototype.checkSkinSourceRef = function () {
        this.skinSourceArray = [];
        this.groupSourceArray = [];
        this.findChild(this);
        this.calcGroupSource();
        this.compareSource();
    };
    ViewBase.prototype.findChild = function (obj) {
        var child;
        for (var i = 0, len = obj.numChildren; i < len; i++) {
            child = obj.getChildAt(i);
            var sourceStr = child["source"];
            if (sourceStr != null && sourceStr != "") {
                this.skinSourceArray.push(sourceStr);
            }
            if (child.numChildren > 0)
                this.findChild(child);
        }
    };
    ViewBase.prototype.calcGroupSource = function () {
        for (var _i = 0, _a = this["info"].resGroup; _i < _a.length; _i++) {
            var groupName = _a[_i];
            var resItemArray = RES.getGroupByName(groupName);
            for (var _b = 0, resItemArray_1 = resItemArray; _b < resItemArray_1.length; _b++) {
                var resItem = resItemArray_1[_b];
                this.groupSourceArray.push(resItem.name);
            }
        }
    };
    ViewBase.prototype.compareSource = function () {
        for (var _i = 0, _a = this.skinSourceArray; _i < _a.length; _i++) {
            var src = _a[_i];
            if (this.groupSourceArray.indexOf(src) < 0)
                LogUtils.Warn("\u3010\u9762\u677Fskin\u7684\u8D44\u6E90\u672A\u52A0\u5230\u8D44\u6E90\u7EC4\u3011skin:" + this.skinName + " resName:" + src);
        }
    };
    return ViewBase;
}(UIBase));
__reflect(ViewBase.prototype, "ViewBase");
//# sourceMappingURL=ViewBase.js.map