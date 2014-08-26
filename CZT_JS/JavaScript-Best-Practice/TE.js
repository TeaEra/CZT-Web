/**
 * Created by TeaEra on 2014-08-06.
 */

var xhr;
function initxhr() {
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
}

