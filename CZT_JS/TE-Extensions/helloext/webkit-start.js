(function () {
    //
    "use strict";

    if (window.localStorage) {
        console.log("Yep, localStorage available;");
    }
    else {
        console.log("No localStorage;");
    }

    /*var bottom_div = document.createElement("div");
    bottom_div.innerHTML = "<h3>testing..............................</h3>";
    document.body.appendChild(bottom_div);*/

    window.show_welcome = function () {
        alert("Welcome!");
    };
})();