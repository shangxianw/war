var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var RedPointData = (function () {
    function RedPointData() {
    }
    RedPointData.prototype.packData = function (redName, parent, children) {
        this.redName = redName;
        this.parent = parent;
        this.children = children;
        this.state = false;
        this.cbArray = [];
    };
    RedPointData.prototype.addRedCB = function (cbFn, thisObj) {
        this.cbArray.push([cbFn, thisObj]);
    };
    RedPointData.prototype.removeCB = function (cbFn, thisObj) {
        var array = DataUtils.CopyArray(this.cbArray);
        for (var i = 0; i < array.length; i++) {
            var item = this.cbArray[i];
            if (item[0] == cbFn && item[1] == thisObj) {
                this.cbArray.splice(i, 1);
            }
        }
    };
    /**
     * 更新红点
     * 红点规则：当前节点显示，则父节点极其更上层必定显示，不处理子节点(理论上更新的节点应该是从最底层开始)
     * 			当前节点不显示，父节点极其更上层应该检测他的其他子节点的显示情况，只要有一个显示，则该父节点显示
     */
    RedPointData.prototype.update = function (state) {
        if (state == true) {
            this.state = state;
        }
        else {
            var newState = false;
            for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
                var child = _a[_i];
                var pPointInfo_1 = RedPointMgr.Ins().redMap.get(child);
                if (pPointInfo_1 == null)
                    continue;
                if (pPointInfo_1.state == true) {
                    newState = true;
                    break;
                }
            }
            this.state = newState;
        }
        for (var _b = 0, _c = this.cbArray; _b < _c.length; _b++) {
            var item = _c[_b];
            item[0].call(item[1], this.state);
        }
        var pPointInfo = RedPointMgr.Ins().redMap.get(this.parent);
        if (pPointInfo == null)
            return null;
        pPointInfo.update(state);
    };
    RedPointData.prototype.destroy = function () {
        this.children.length = 0;
        this.cbArray.length = 0;
    };
    return RedPointData;
}());
__reflect(RedPointData.prototype, "RedPointData");
//# sourceMappingURL=RedPointData.js.map