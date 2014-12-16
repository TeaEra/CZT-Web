<?php
function getPhoneType() {
    if(!isset($_SERVER)) {
        return 'unknown';
    }

    $ua = strtolower($_SERVER['HTTP_USER_AGENT']);
    if(strpos($ua, 'android') !== false) {
        return 'android';
    }else if(strpos($ua, 'iphone') !== false || strpos($ua, 'ipad') !== false || strpos($ua, 'ios') !== false) {
        return 'ios';
    }else {
        return 'unknown';
    }
}

function isApp() {
    $ua = $_SERVER['HTTP_USER_AGENT'];
    $ua = strtolower($ua);
    if(strpos($ua, 'sogousearch') !== false) {
        return true;
    }else {
        return false;
    }
}

function isIos() {
    $ua = $_SERVER['HTTP_USER_AGENT'];
    $ua = strtolower($ua);
    if(strpos($ua, 'ios') !== false || strpos($ua, 'iphone') !== false) {
        return true;
    }else {
        return false;
    }
}

function isLenovo() {
    $ua = $_SERVER['HTTP_USER_AGENT'];
    $ua = strtolower($ua);
    if (strpos($ua, 'lenovo') !== false) {
        return true;
    } else {
        return false;
    }
}

if(getPhoneType() == 'unknown') {
    header('location:http://appsearch.m.sogou.com');
    exit(0);
}
/**/
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
    <title>人生不过一场旅行</title>
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="format-detection" content="telephone=no" />
    <!-- -->
    <link rel="stylesheet" type="text/css" href="css/compile/normalize.css">
    <link rel="stylesheet" href="css/compile/scene-min.css" />
    <link rel="stylesheet" href="css/compile/style-1.css" />
</head>

<body>

    <!-- seamless="seamless" -->
    <iframe class="tc-iframe" scrolling="yes" frameBorder="0" id="id-tc-iframe" 
        src="http://app.ly.com/client/piaojiajihuo.html?eventid=213">
    </iframe>
    <!--
    <iframe class="tc-iframe" scrolling="yes" frameBorder="0" id="id-tc-iframe" 
        src="http://61.155.159.109:5010/client/piaojia/Aboutpiaojia.html?actid=213">
    </iframe>
    -->
    <div id="id-ios-div"></div>

<div class="div-popup" id="id-div-popup">
    <!-- -->
    <div class="share-box">
        <div class="t">拉帮结伙抢门票，一起出去玩！</div>
        <ul id="js_share_list">
            <li>
                <a href="" class="wb" share="weibo"></a>
            </li>
            <li>
                <a href="" class="wx" share="weixin"></a>
            </li>
            <li>
                <a href="" class="pyq" share="friend"></a>
            </li>
            <li>
                <a href="" class="qq" share="QQ"></a>
            </li>
            <li>
                <a href="" class="qzone" share="qzone"></a>
            </li>
        </ul>
    </div>
    <!-- -->
    <div class="div-rule-result">
        <p class="p-title"><a href="javascript:void(0);" id="id-tc-rule" />活动规则</a>
        <div id="id-tc-rule-content" style="display:none;" class="">
            <p>1.下载搜狗搜索客户端</p>
            <p>2.打开客户端参与活动，领取门票激活码</p>
            <p>3.使用同程旅游客户端兑换景点门票</p>
        </div>
        <p class="p-title"><a href="javascript:void(0);" id="id-tc-list" />可兑换门票景点</a>
        <div id="id-tc-list-content" style="display:none;">
            <div class="tc-custom-select">
                <select class="tc-addr-select" id="id-tc-addr-select">
                </select>
                <div class="tc-addr-select-after tc-ib" id="id-tc-addr-select-after">▼</div>
            </div>
            <p id="id-tc-addr-list" class="tc-addr-list">
            </p>
        </div>
    </div>
</div>

<script src="js/zepto.min.js"></script>
<script src="js/pb.js?1e"></script>
<script>
    var statParams = {
        pt: '<?php echo getPhoneType();?>',
        isapp: '<?php echo isApp() ? "yes" : "no"?>',
        from: '<?php echo empty($_GET["ch"]) ? "" : $_GET["ch"];?>'
    };
    pb('pv', $.extend({site: 'index', act: 'show'}, statParams));
</script>
<script src="js/share.js"></script>
<!--<script src="js/callapp.js"></script>-->
<script src="js/tc-scene.js"></script>
<script>
    //
    $('#id-tc-rule').bind("click", function () {
        $('#id-tc-rule-content').toggle();
        if($('#id-tc-rule-content').css('display') !== 'none') {
            location.hash = "#id-tc-rule-content";
        }
    });
    $('#id-tc-list').bind("click", function () {
        $('#id-tc-list-content').toggle();
        location.hash = "#id-tc-list-content";
    });
    //
    //var h_popup = $('#id-div-popup').height() > 136 ? $('#id-div-popup').height() : 136;
    var h_popup = $('#id-div-popup').height();
    var h1 = document.documentElement.clientHeight - h_popup;
    var h2 = $(window).height() - h_popup;
    var h3 = window.innerHeight - h_popup;
    var h_min = Math.min(h1, h2, h3);
    <?php if (isIos()) { ?>
        $('#id-ios-div').height(h_popup);
    <?php } ?>
    <?php if (isLenovo()) { ?>
        $('#id-ios-div').height(h_popup);
    <?php } ?>
    //alert(document.documentElement.clientHeight + "-" + h_min + "-" + $('#id-div-popup').height());
    $('#id-tc-iframe').height(h_min);
    $('#id-tc-iframe').css('max-height', h_min);
</script>
<script type="text/javascript">
    !(function (window)
    {
        var document = window.document;
        var resizejs = function ()
        {
            /*var zoom = document.documentElement.clientWidth / 320;
            zoom = zoom < 1 ? 1 : zoom > 2 ? 2 : zoom;
            document.getElementById('id-tc-iframe').style.zoom = 1 / zoom;*/
            //
            //var h_popup = $('#id-div-popup').height() > 136 ? $('#id-div-popup').height() : 136;
            var h_popup = $('#id-div-popup').height();
            var h1 = document.documentElement.clientHeight - h_popup;
            var h2 = $(window).height() - h_popup;
            var h3 = window.innerHeight - h_popup;
            var h_min = Math.min(h1, h2, h3);
            <?php if (isIos()) { ?>
                $('#id-ios-div').height(h_popup);
            <?php } ?>
            <?php if (isLenovo()) { ?>
                $('#id-ios-div').height(h_popup);
            <?php } ?>
            //alert(document.documentElement.clientHeight + "-" + h_min + "-" + $('#id-div-popup').height());
            $('#id-tc-iframe').height(h_min);
            $('#id-tc-iframe').css('max-height', h_min);
        };
        window.addEventListener("resize", resizejs, false);
        resizejs();
    })(window);/**/
</script>
</body>
</html>