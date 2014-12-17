/**
 * Created by chenzhengtong on 2014/12/16.
 */

(function () {
    window.sgs = window.sgs || {};

    window.sgs.set_cookie = function (name, value, days) {
        //
        var exp = new Date();
        exp.setTime(exp.getTime() + 1000*60*60*24*days);
        document.cookie = name + "="+ escape(value) + ";expires=" + exp.toUTCString();
    };

    //为了删除指定名称的cookie，可以将其过期时间设定为一个过去的时间
    window.sgs.del_cookie = function (name, domain, path) {
        var date = new Date();
        date.setTime(date.getTime() - 10000);
        //
        var params = [name, "=nothing;expires=", date.toGMTString()]
        if (domain) {
            params.push(";domain=" + domain);
        }
        if (path) {
            params.push(";path=" + path);
        }
        document.cookie = params.join("");
    };

    window.sgs.get_cookie = function (name) {
        if (document.cookie.length > 0) {
            var c_start = document.cookie.indexOf(name + "=");
            if (c_start != -1) {
                var c_start = c_start + name.length + 1;
                var c_end = document.cookie.indexOf(";", c_start);
                if (c_end == -1)
                    c_end = document.cookie.length;
                return unescape(document.cookie.substring(c_start, c_end));
            }
        }
        return "";
    }

})();