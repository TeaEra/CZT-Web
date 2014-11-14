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

?>

<script>
    <?php if (isApp()) { ?>
        window.location.href = "http://wap.sogou.com/web/searchList.jsp?keyword=搜哪里去哪里";
    <?php } ?>
</script>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>搜哪里去哪里</title>
    <meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="format-detection" content="telephone=no" />
    <!-- -->
    <link rel="stylesheet" href="css/compile/scene-min.css" />
</head>

<body>

    <div class="div-modify">
        <div class="scene-modify">
            <div class="btn-participate btn-dec" title="立即参与" id="js_di_btn"></div>
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
<script src="js/callapp.js"></script>
<script>
    setInterval(function() {
        $('iframe').hide();
    }, 1000);
</script>
</body>
</html>