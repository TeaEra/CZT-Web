/**
 * Created by chenzhengtong on 2014/12/15.
 */

(function () {

    "use strict";

    // 保存当前页面UA信息
    window.curr_info = window.curr_info || {};
    // 保存sogou-search相关函数
    window.sgs = window.sgs || {};

    window.sgs.get_url_params = function (paraname) {
        var str = location.href;
        var sValue = str.match(new RegExp("[?&]" + paraname + "=([^&]*)(&?)", "i"));
        if (sValue ? sValue[1] : sValue == null)
            return sValue ? sValue[1] : sValue;
    };

    window.sgs.is_app = function () {
        var ua = window.curr_info.ua;
        return (ua.indexOf("sogousearch") !== -1);
    };

    window.sgs.is_android = function () {
        var ua = window.curr_info.ua;
        return (ua.indexOf("android") !== -1);
    };

    window.sgs.is_ios = function () {
        var ua = window.curr_info.ua;
        return (ua.indexOf("ios") !== -1) || (ua.indexOf("iphone") !== -1)
            || (ua.indexOf("ipad") !== -1);
    };

    window.sgs.get_phone_type = function () {
        //
        if (window.curr_info.is_ios) {
            return "ios";
        }
        if (window.curr_info.is_android) {
            return "android";
        }
        return "unknown";
    };

    window.sgs.get_client_app_type = function () {
        var type = 0, B = window.curr_info.ua;
        function isSelfBrowser(B) {
            if (B.indexOf("qqbrowser") != -1 || B.indexOf("sogoumobilebrowser") != -1 || B.indexOf("baidu") != -1 ||
                B.indexOf("360browser") != -1 || B.indexOf("opera") != -1 || B.indexOf("chrome") != -1 ||
                B.indexOf("firefox") != -1 || B.indexOf("2345browser") != -1 || B.indexOf("maxthon") != -1 ||
                B.indexOf("ucbrowser") != -1) {
                return false;
            }
            return true;
        }
        if (B.indexOf("android") != -1) {
            if (B.indexOf("sogoumobilebrowser") != -1 || B.indexOf("qqbrowser") != -1
                    || B.indexOf("baidu") != -1 || isSelfBrowser(B)) {
                if (B.indexOf("sogoumobilebrowser") != -1 || B.indexOf("baidu") != -1) {
                    type = 2;
                }else{
                    type = 1;
                }
            }
        }else {
            type = 1;
        }
        return type;
    };

    window.sgs.create_iframe = function (url) {
        var iframe = document.createElement("iframe");
        iframe.src = url;
        iframe.style.display = "none";
        document.body.appendChild(iframe);
        return iframe;
    }

    //点击元素，完整schema, 下载url
    window.sgs.add_call_app = function (obj, schema, url, statParams) {
        obj.addEventListener("click",function(e){
            e.preventDefault();

            //window.sgs.pb('cl', $.extend({'uigs_cl': 'download'}, statParams));

            var clientAppType = window.curr_info.client_app_type;

            if(clientAppType === 0) {
                location.href = url;
                return false;
            }
            var ifrm = window.sgs.create_iframe(schema);
            if (clientAppType === 1) {
                var	clicked_at = +new Date;
                setTimeout(function() {
                    if (+new Date - clicked_at < 700) {
                        location.href = url;
                    }
                }, 500);
            } else if (clientAppType == 2) {
                ifrm.addEventListener("load", function() {
                    location.href = url;
                }, false);
            }
            return false;
        },false);
    }

    window.sgs.pb = function(type, params){
        try{
            var uniqueid = (new Date().getTime())*1000 + Math.round(Math.random()*1000),
                refer = document.referrer;
            var imgurl = ["http://pb.sogou.com/"+type+".gif?uigs_productid=appsearch&type=app_tongcheng&uigs_t="];
            imgurl.push((new Date()).getTime());
            for(var k in params) {
                imgurl.push('&', k, '=', params[k]);
            }
            imgurl.push("&uniqueid=", uniqueid);
            imgurl.push('&uigs_refer=', refer);
            (new Image()).src = imgurl.join("");
        }catch(e){
            console.log(e);
        }
    };

    window.curr_info.ua = window.navigator.userAgent.toString().toLowerCase();
    window.curr_info.is_app = window.sgs.is_app();
    window.curr_info.is_android = window.sgs.is_android();
    window.curr_info.is_ios = window.sgs.is_ios();
    window.curr_info.client_app_type = window.sgs.get_client_app_type();
    // ios客户端下载地址
    window.curr_info.ios_link = "https://itunes.apple.com/us/app/sou-gou-sou-suo-ji-su-sou/id891230263?mt=8";
    // android客户端下载地址
    window.curr_info.android_link = "http://appsearch.m.sogou.com/apks/SogouSearch_1312.apk";
    // 客户端主页
    window.curr_info.pc_link = "http://appsearch.m.sogou.com";
    // ios schema
    window.curr_info.ios_schema_prefix = "sogousearch://?url=";
    // android schema
    window.curr_info.android_schema_prefix = "sogousearch://extension4result?url=";

})();