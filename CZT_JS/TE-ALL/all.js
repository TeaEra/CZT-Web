/**
 * Created by chenzhengtong on 2014/10/9.
 */

(function () {
    "use strict";

    // Init the module;
    window.all = window.all || {};

    /**
     * [Link](http://bbs.html5cn.org/thread-80269-1-1.html)
     *
     * from Mozilla Aurora 11;
     * only 'window.navigator.battery' available for now;
     *
     */
    window.all.test_battery = function () {
        // 获取电池对象!
        var battery = navigator.battery || navigator.webkitBattery || navigator.mozBattery;

        if (! battery) {
            return;
        }

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

    /**
     * [Link](https://gist.github.com/padolsey/527683)
     *
     */
    window.all.get_IE_version = function () {
        // for-loop saves characters over while
        for (
            var v = 3,
            // b just as good as a div with 2 fewer characters
            el = document.createElement('b'),
            // el.all instead of el.getElementsByTagName('i')
            // empty array as loop breaker (and exception-avoider) for non-IE and IE10+
            all = el.all || [];
            // i tag not well-formed since we know that IE5-IE9 won't mind
            el.innerHTML = '<!--[if gt IE ' + (++v) + ']><i><![endif]-->',
            all[0];
        );
        // instead of undefined, returns the documentMode for IE10+ compatibility
        // non-IE will still get undefined as before
        return v > 4 ? v : document.documentMode;
    };

    /**
     * Created by TeaEra on 2014-08-06.
     */
    window.all.get_xhr = function () {
        var xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        }
        else if(window.ActionXObject) {
            xhr = new ActiveXObject("Msxml2.XMLHTTP")
                | new ActiveXObject("Microsoft.XMLHTTP");
        }
        else {
            throw new Error("xhr is not supported");
        }
        return xhr;
    };

})();