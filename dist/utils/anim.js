"use strict";
exports.__esModule = true;
var raf;
exports.requestAnimationFrame = raf;
if (typeof window !== 'undefined') {
    exports.requestAnimationFrame = raf = window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
    exports.requestAnimationFrame = raf = raf.bind(window);
}
