//////////////////////misc.js//////////////////
/* 
dependency: none 
collection of miscellanous functions
*/
(function() {

  function RND(start, end) {
    return Math.floor(Math.random() * (++end - start) + start);
  }

  function probable(probability) {
    if (probability <= 0 || isNaN(probability)) probability = 0;
    if (probability > 100) probability = 100;
    if (probability >= RND(0, 100)) {
      return true;
    }
    return false;
  }

  function coinFlip() {
    var flip = RND(0, 1);
    if (flip) return true;
    return false;
  }

  function RGBtoHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);

    function componentToHex(c) {
      var hex = c.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    }
  }

  function measureSpeed(func) {
    var start = window.performance.now();
    var args = [];
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
    func.apply(this, args);
    var end = window.performance.now();
    var lapse = (end - start).toFixed(3);
    console.log("It took: " + lapse + "ms");
    return "It took: " + lapse + "ms";
  }

  function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  }
  window.RND = RND;
  window.coinFlip = coinFlip;
  window.probable = probable;
  window.RGBtoHex = RGBtoHex;
  window.measureSpeed = measureSpeed;
  window.wait = wait;

})();
////////////////////end of misc.js ////////////////////
