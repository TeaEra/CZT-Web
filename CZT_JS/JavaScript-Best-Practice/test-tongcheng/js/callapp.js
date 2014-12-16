(function(){
    var ua = window.navigator.userAgent.toString().toLowerCase(),
        isApp = (ua.indexOf("sogousearch") > 0),
        isAndroid = (ua.indexOf("android") > 0),
        isIos = (ua.indexOf("ios") > 0)||(ua.indexOf("iphone")>0),
        clientAppType = getClientAppType();

    function getUrlParams(paraname) {
        var str = location.href;
        var sValue = str.match(new RegExp("[?&]" + paraname + "=([^&]*)(&?)", "i"));
        if (sValue ? sValue[1] : sValue == null)
            return sValue ? sValue[1] : sValue;
    }


    function getClientAppType() {
        var type = 0, B = ua;
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
            if (B.indexOf("sogoumobilebrowser") != -1 || B.indexOf("qqbrowser") != -1 || B.indexOf("baidu") != -1 || isSelfBrowser(B)) {
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
    }

    function createIFrame(url){
        var iframe = document.createElement("iframe");
        iframe.src = url;
        iframe.style.display = "none";
        document.body.appendChild(iframe);
        return iframe;
    }

    //点击元素，完整schema, 下载url
    function addCallApp(obj, schema, url){
        obj.addEventListener("click",function(e){
            e.preventDefault();
            pb('cl', $.extend({'uigs_cl': 'download'}, statParams));

            if(clientAppType==0) {
                location.href = url;
                return false;
            }
            var ifrm = createIFrame(schema);
            if (clientAppType == 1) {
                var	clickedAt = +new Date;
                setTimeout(function() {
                    if( +new Date - clickedAt < 700){
                        location.href=url;
                    }
                }, 500);
            } else if (clientAppType == 2) {
                ifrm.addEventListener("load",function(){
                    location.href=url;
                },false);
            }
            return false;
        },false);
    }

    function init() {
        if(isApp) {
            $('#js_di_btn').click(function() {
                pb('cl', $.extend({'uigs_cl': 'tongcheng'}, statParams));
            });
            //return;
        }

        // TODO: url;
        var url = 'http://appsearch.m.sogou.com/tongcheng/index.php?ch=' + statParams.from;
        //var url = 'http://10.134.30.154:8081/tongcheng/scene-result.php?ch=' + statParams.from;
        if(isIos) {
            var schema = "sogousearch://?url="+encodeURIComponent(url);
            var downloadUrl = 'https://itunes.apple.com/app/id891230263';
        }else {
            var schema = "sogousearch://extension4result?url="+encodeURIComponent(url);
            //var downloadUrl = 'http://appsearch.m.sogou.com/apks/SogouSearch_1205.apk';
            var downloadUrl = 'http://appsearch.m.sogou.com/apks/SogouSearch_1239.apk';
        }
        addCallApp($('#js_di_btn')[0], schema, downloadUrl);
    }
    init();
})();