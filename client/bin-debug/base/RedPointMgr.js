var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var RedType = {
    "main_jundui": {
        "kazu": {
            "hero_upgrade": {},
            "hero_new": {},
            "haha": {}
        },
        "lingzhu": {}
    },
    "main_kazu": {},
    "saishi": {
        "zbs": {
            "duanwei": {},
            "count": {}
        },
        "pws": {}
    }
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
var RedPointMgr = (function () {
    function RedPointMgr() {
        this.init();
    }
    RedPointMgr.prototype.init = function () {
        this.redMap = new Hash();
        this.initRedData(RedType, "");
    };
    /**
     * 初始化红点配置
     * 将每个红点的父子关系都罗列好
     */
    RedPointMgr.prototype.initRedData = function (obj, pName) {
        for (var key in obj) {
            var children = [];
            for (var childKey in obj[key]) {
                children.push(childKey);
            }
            var redData = new RedPointData();
            redData.packData(key, pName, children);
            this.redMap.set(key, redData);
            this.initRedData(obj[key], key);
        }
    };
    RedPointMgr.prototype.addListenter = function (redName, cbFn, thisObj) {
        if (this.redMap.has(redName) == false) {
            return false;
        }
        var redData = this.redMap.get(redName);
        redData.addRedCB(cbFn, thisObj);
        return true;
    };
    RedPointMgr.prototype.removeListenter = function (redName, cbFn, thisObj) {
        if (this.redMap.has(redName) == false) {
            return true;
        }
        var redData = this.redMap.get(redName);
        redData.removeCB(cbFn, thisObj);
        return true;
    };
    RedPointMgr.prototype.update = function (redName, state) {
        if (this.redMap.has(redName) == false) {
            return false;
        }
        var redData = this.redMap.get(redName);
        redData.update(state);
        return true;
    };
    RedPointMgr.prototype.destroy = function () {
    };
    RedPointMgr.Ins = function () {
        if (RedPointMgr.Instance == null)
            RedPointMgr.Instance = new RedPointMgr();
        return RedPointMgr.Instance;
    };
    return RedPointMgr;
}());
__reflect(RedPointMgr.prototype, "RedPointMgr");
//# sourceMappingURL=RedPointMgr.js.map