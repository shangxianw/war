var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var TestUtils = (function () {
    function TestUtils() {
    }
    /**测试是否有未销毁的定时器 */
    TestUtils.CheckLongTimer = function () {
    };
    return TestUtils;
}());
__reflect(TestUtils.prototype, "TestUtils");
//# sourceMappingURL=TestUtils.js.map