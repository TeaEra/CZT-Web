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
/*
if(getPhoneType() == 'unknown') {
    header('location:http://appsearch.m.sogou.com');
    exit(0);
}
*/
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>搜哪里去哪里活动说明</title>
    <meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="format-detection" content="telephone=no" />
    <!-- -->
    <link rel="stylesheet" href="css/compile/scene-min.css" />
</head>

<body>

    <div class="div-result">
        <div class="scene-result">
            <div class="btn-dec result-search-text" title="搜哪里去哪里" id="id-search-text"></div>
            <div class="btn-dec result-btn-weibo" title="新浪微博" share="weibo"></div>
            <div class="btn-dec result-btn-wechat" title="微信" share="weixin"></div>
            <div class="btn-dec result-btn-moment" title="微信朋友圈" share="friend"></div>
            <div class="btn-dec result-btn-qq" title="QQ" share="QQ"></div>
            <div class="btn-dec result-btn-qzone" title="QQ空间" share="qzone"></div>
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
<script>
    setInterval(function() {
        $('iframe').hide();
    }, 1000);

    //
    $('#id-search-text').bind("click", function () {
        window.location.href = "http://wap.sogou.com/web/searchList.jsp?keyword=搜哪里去哪里";
    });
</script>
</body>
</html>