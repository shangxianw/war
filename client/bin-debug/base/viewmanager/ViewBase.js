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
    function ViewBase() {
        var query = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            query[_i] = arguments[_i];
        }
        var _this = this;
        if (query != null && query[0] != null) {
            var param = query[0];
            if (param == null)
                _this = _super.call(this, param) || this;
            else {
                if (param.length = 1)
                    _this = _super.call(this, param[0]) || this;
                else if (param.length = 2)
                    _this = _super.call(this, param[0], param[1]) || this;
                else if (param.length = 3)
                    _this = _super.call(this, param[0], param[1], param[2]) || this;
                else if (param.length = 4)
                    _this = _super.call(this, param[0], param[1], param[2], param[3]) || this;
                else if (param.length = 5)
                    _this = _super.call(this, param[0], param[1], param[2], param[3], param[4]) || this;
                // 不够就加
            }
        }
        else {
            _this = _super.call(this, query) || this;
        }
        _this.layer = LayerManager.Ins().panel;
        _this.resGroup = [];
        return _this;
    }
    ViewBase.prototype.show = function () {
    };
    ViewBase.prototype.hide = function () {
    };
    ViewBase.prototype.closeSelf = function () {
        ViewManager.Ins().close(this);
    };
    return ViewBase;
}(UIBase));
__reflect(ViewBase.prototype, "ViewBase");
//# sourceMappingURL=ViewBase.js.map