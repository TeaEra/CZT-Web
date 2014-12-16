function appShare(params, parentNode){
    var that = this,
        ua=navigator.userAgent.toLowerCase(),
        isApp = (ua.indexOf("sogousearch") > 0),
        isIos = (ua.indexOf("android") < 0),
        timer, tried = 20, cb = "share_cb_"+parseInt(Math.random()*10000);

    params = params||{};
    parentNode = parentNode||document.body;
    that.share_obj = {obj:{}};

    function isInstalled(stype){
        return isIos?(window["is"+stype.toLowerCase()+"installed"]):(window.JSInvoker["is"+stype.replace("Qzone", "QZone")+"Installed"]());
    }

    window[cb] = function(result){
        if (result > 0){
            return params.success&&params.success();
        }
        fail(result);
    }

    function fail(reason, stype){
        params.fail&&params.fail(reason, stype);
    }

    function share(stype, obj){
        if (!window.JSInvoker){
            if (tried > 0){
                timer = setTimeout(function(){
                    tried--;
                    share(stype, obj);
                }, 20);
            }else{
                fail(3);
            }
            return;
        }
        var object = $.extend({}, that.share_obj.obj, that.share_obj[stype.toLowerCase()], obj);
        object.to_app = 1;
        if (stype == "Friend"){
            stype = "Weixin";
            object.to_app = 8;
        }

        if (params.start){
            params.start(object, stype);
        }
        if (isInstalled(stype)){
            window.JSInvoker["shareTo"+stype]&&window.JSInvoker["shareTo"+stype](JSON.stringify(object), "window."+cb);
        }else{
            fail(2, stype);
        }
    }

    $(parentNode).find("[share]").each(function(){
        this.onclick = function(){
            if (!isApp){
                fail(1);
                return;
            }
            clearTimeout(timer);
            pb('cl', $.extend({'uigs_cl': 'share_' + $(this).attr("share")}, statParams));
            share($(this).attr("share").replace(/^(\w)/g, function(a){return a.toUpperCase()}),
                JSON.parse($(this).attr("sobj")||"null"));

            return false;
        }

    });


    //没有装的app图标不显示
    var n = 20, t;
    function init() {
        if (!window.JSInvoker){
            if (n > 0){
                t = setTimeout(function(){
                    n--;
                    init();
                }, 20);
            }else{

            }
            return;
        }

        $(parentNode).find("[share]").each(function(){
            if(isApp && (
                (($(this).attr('share') == 'weixin' || $(this).attr('share') == 'friend') && !isInstalled('Weixin')) ||
                ($(this).attr('share') == 'QQ' && !isInstalled('QQ')) ||
                ($(this).attr('share') == 'qzone' && (!isInstalled('QQ') || !isInstalled('Qzone')))
                )
            ) {
                $(this).parent().hide();
                return true;
            }
        });
        $('#js_share_list').show();
    }
    init();
}

// TODO: url;
// http://.../tongcheng/index.php
var shareUrl = 'http://appsearch.m.sogou.com/tongcheng/index.php';
//var shareUrl = 'http://10.134.30.154:8081/tongcheng/index.php';
var code = '';
var tc_title = '搜狗搜索送景点门票！';
var tc_content = '搜狗搜索送500万张景点门票，速速来领！';

function makeShareUrl(baseUrl, code, channel) {
    return baseUrl + '?c2=' + code + '&ch=' + channel + '&fr=1004';
}

var shareContent = {
    weibo: {
        title: '',
        description: tc_content,
        url: makeShareUrl(shareUrl, code, 'weibo'),
        img_url: 'http://help.sogou.com/weixin/images/sogou.jpg'
    },
    weixin: {
        url: makeShareUrl(shareUrl, code, 'weixin')
    },
    friend: {
        title: tc_title,
        url: makeShareUrl(shareUrl, code, 'friend')
    },
    qq: {
        url: makeShareUrl(shareUrl, code, 'qq')
    },
    qzone: {
        url: makeShareUrl(shareUrl, code, 'qzone')
    }
}

var s = new appShare({
    fail: function(reason, stype){
        if(stype == 'Weibo') {
            shareToWeibo();
        }
    },
    start: function(o){}
});
s.share_obj.obj = {
    url: '',
    title: tc_title,
    description: tc_content,
    to_app: 1,
    img_url: 'http://help.sogou.com/weixin/images/sogou.jpg',
    common: ''
}
s.share_obj = $.extend(s.share_obj, shareContent);


var twshare = function(surl, url, title, img, w, h){
    var _t = encodeURIComponent(title);
    var _url = encodeURIComponent(url);
    var _pic = encodeURIComponent(img);
    var _u = surl+_url+'&pic='+_pic+'&title='+_t;
    window.open( _u,'', 'width='+w+', height='+h+', top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}

function shareToWeibo() {
    var url = shareContent['weibo']['url'];
    var imagelink = shareContent['weibo']['img_url'];
    var content = shareContent['weibo']['description'];
    twshare('http://service.weibo.com/share/share.php?appkey=1239861421&url=',url,content,imagelink,615,505);
}