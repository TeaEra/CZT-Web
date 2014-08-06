/**
 * Created by TeaEra on 2014-08-06.
 */

// RegEx
var str = "life is very much like a mirror.";
var result = str.match(/is|a/g);
console.log(result);

var outter = [];
function clouseTest() {
    var array = ["one", "two", "three", "four"];
    for (var i=0; i<array.length; ++i) {
        var x = {};
        x.no = i;
        x.text = array[i];
        x.invoke = function () {
            console.log(i);
        }
        outter.push(x);
    }
}
clouseTest();
for (var each in outter) {
    outter[each].invoke();
}
// 会多一个undefined?

var outter2 = [];
function clouseTest2() {
    var array = ["one", "two", "three", "four"];
    for (var i=0; i<array.length; ++i) {
        var x = {};
        x.no = i;
        x.text = array[i];
        x.invoke = function (no) {
            return function () {
                console.log(no);
            };
        }(i);
        outter2.push(x);
    }
}
clouseTest2();
for (var each in outter2) {
    outter2[each].invoke();
}
// 会多一个undefined?

// Closure:
// http://stackoverflow.com/questions/111102/how-do-javascript-closures-work

var Level1 = function () {
    this.show1 = function () {
        console.log(1);
    };
};
var Level2 = function () {
    this.show2 = function () {
        console.log(2);
    };
};
var Level3 = function () {
    this.show3 = function () {
        console.log(3);
    };
};
Level2.prototype = new Level1();
Level3.prototype = new Level2();
var testLevel3 = new Level3();
testLevel3.show1();
testLevel3.show2();
testLevel3.show3();
// Finally undefined?

/*
* console:
* console.log()
* console.info()
* console.dir()
* console.trace()
*
*/

(function () {
    document.write("<div id='panel'></div>");
})();