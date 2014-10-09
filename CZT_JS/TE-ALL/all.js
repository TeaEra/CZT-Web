/**
 * Created by chenzhengtong on 2014/10/9.
 */

(function () {
    "use strict";

    // Init the module;
    window.all = window.all || {};

    /**
     * Link: http://bbs.html5cn.org/thread-80269-1-1.html
     *
     * from Mozilla Aurora 11;
     * only 'window.navigator.battery' available for now;
     */
    window.all.test_battery = function () {
        // 获取电池对象!
        var battery = navigator.battery || navigator.webkitBattery || navigator.mozBattery;

        // 显示一些有用属性值
        console.warn("电池充电状态: ", battery.charging); // true
        console.warn("电量水平: ", battery.level); // 0.58
        console.warn("电池使用时间: ", battery.dischargingTime);

        // 设置一些事件**
        battery.addEventListener("chargingchange", function(e) {
            console.warn("电池充电状态变化: ", battery.charging);
        }, false);
        battery.addEventListener("chargingtimechange", function(e) {
            console.warn("电池充电时间变化: ", battery.chargingTime);
        }, false);
        battery.addEventListener("dischargingtimechange", function(e) {
            console.warn("电池使用时间变化: ", battery.dischargingTime);
        }, false);
        battery.addEventListener("levelchange", function(e) {
            console.warn("电量水平变化: ", battery.level);
        }, false);
    };

})();