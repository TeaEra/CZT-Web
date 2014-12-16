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
    if(strpos($ua, 'ios') !== false) {
        return true;
    }else {
        return false;
    }
}

if(getPhoneType() == 'unknown') {
    header('location:http://appsearch.m.sogou.com');
    exit(0);
}
/**/
?>

<script>
    <?php if (isApp()) { ?>
        window.location.href = "scene-result.php";
    <?php } ?>
</script>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <!-- height=device-height, -->
    <meta name="viewport" content="width=device-width,height=device-height,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
    <title>人生不过一场旅行</title>
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="format-detection" content="telephone=no" />
    <!-- -->
    <link rel="stylesheet" type="text/css" href="css/compile/normalize.css">
    <link rel="stylesheet" href="css/compile/scene-min.css" />
    <link rel="stylesheet" href="css/compile/style-1.css" />
</head>

<body style="background-color: white;">

    <div class="div-modify">
        <img src="img/tc.png" alt="" data-url=" ">
    </div>
    <div class="tc-center">
        <div class="div-btn">
            <input type="button" id="js_di_btn" value="立即参与" />
        </div>
    </div>
    <div class="div-rule">
        <!-- -->
        <p class="p-title tc-padding-bottom">活动规则：</p>
        <p>1.下载搜狗搜索客户端</p>
        <p>2.打开客户端参与活动，领取门票激活码</p>
        <p>3.使用同程旅游客户端兑换景点门票</p>
        <!-- -->
        <div class="tc-padding-top" style="width: 296px; border-bottom: 1px solid lightgray;"></div>
        <!-- -->
        <p class="p-title tc-padding-bottom tc-padding-top">以下景点免费去，门票领起来！</p>
        <div class="tc-custom-select">
            <select class="tc-addr-select" id="id-tc-addr-select">
            </select>
            <div class="tc-addr-select-after tc-ib" id="id-tc-addr-select-after">▼</div>
        </div>
        <p id="id-tc-addr-list" class="tc-padding-bottom">
        </p>
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
<script src="js/callapp.js"></script>
<script src="js/tc-scene.js"></script>
</body>
</html>