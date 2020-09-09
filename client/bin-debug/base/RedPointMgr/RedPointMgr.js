var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 红点管理器
 * 当一次性需要更新的红点数目过多时，可考虑分帧处理
 */
var RedPointMgr = (function () {
    function RedPointMgr() {
        this.init();
    }
    RedPointMgr.prototype.init = function () {
        this.redMap = new Hash();
        this.initRedData(RedConfig, "");
    };
    /**
     * 初始化红点配置
     * 将每个红点的父子关系都理顺
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
    /**
     * 添加红点监听
     * 可注册多个相同的监听(redName, cbFn, thisObj 完全相同那种)
     */
    RedPointMgr.prototype.addListenter = function (redName, cbFn, thisObj) {
        if (redName == null || cbFn == null || thisObj == null || this.redMap.has(redName) == false) {
            return false;
        }
        var redData = this.redMap.get(redName);
        redData.addRedCB(cbFn, thisObj);
        return true;
    };
    /**
     * 动态添加红点监听
     * 用于动态创建的子项，如列表子项
     */
    RedPointMgr.prototype.addlistener2 = function (redName, parent, cbFn, thisObj) {
        if (redName == null || cbFn == null || thisObj == null || this.redMap.has(parent) == false) {
            return false;
        }
        var redData = new RedPointData();
        redData.packData(redName, parent, []);
        this.redMap.set(redName, redData);
        redData.addRedCB(cbFn, thisObj);
        return true;
    };
    RedPointMgr.prototype.removeListenter = function (redName, cbFn, thisObj) {
        if (this.redMap.has(redName) == false) {
            return true;
        }
        if (redName == null || cbFn == null || thisObj == null) {
            return false;
        }
        var redData = this.redMap.get(redName);
        redData.removeCB(cbFn, thisObj);
        return true;
    };
    /**
     * 更新红点
     * 会处理其父节点极其上层节点关系，不会处理子节点
     */
    RedPointMgr.prototype.update = function (redName, state) {
        if (this.redMap.has(redName) == false) {
            return false;
        }
        var redData = this.redMap.get(redName);
        redData.update(state);
        return true;
    };
    RedPointMgr.prototype.destroy = function () {
        for (var _i = 0, _a = this.redMap.values(); _i < _a.length; _i++) {
            var item = _a[_i];
            item.destroy();
        }
        this.redMap.destroy();
        this.redMap = null;
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