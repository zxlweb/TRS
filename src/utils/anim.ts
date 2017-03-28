/**
 * @fileOverview anim utils
 * @author Max
 */

let raf: any;
if (typeof window !== 'undefined') {
    raf = window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback: Function) {
            window.setTimeout(callback, 1000 / 60);
        };
    raf = raf.bind(window);
}

export { raf as requestAnimationFrame }