/**
 * Created by TeaEra on 2014-08-06.
 */

function initxhr() {
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    }
    else if(window.ActionXObject) {
        xhr = new ActiveXObject("Msxml2.XMLHTTP");
    }
    else {
        throw new Error("xhr is not supported");
    }
}

