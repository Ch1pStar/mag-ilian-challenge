(function check() {
    "use strict";

    var es6supported = true;

    if (typeof Symbol == "undefined") es6supported = false;
    try {
        eval("class Foo {}");
        eval("let bar = (x) => x+1");
    } catch (e) { es6supported = false; }

    if (!es6supported) {
        alert("ECMAScript 6 is required to run this challenge. Unfortunately your browser doesn't support it.")
    }
})();