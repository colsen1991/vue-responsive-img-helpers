'use strict';

module.exports = {
  install: function install(Vue) {
    Vue.prototype.$createSrc = function (baseSrc) {
      var w = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var q = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var auto = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'compress';
      var fit = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'max';

      return baseSrc + '?auto=' + auto + '&fit=' + fit + (w ? '&w=' + w : '') + (q ? '&q=' + q : '');
    };

    Vue.prototype.$createSizes = function () {
      var standard = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '50vw';
      var isMobile = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      return '(max-width: 768px) ' + (isMobile ? '100vw' : standard) + ', ' + standard;
    };

    Vue.prototype.$createSrcSet = function (src) {
      var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 400;
      var to = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1400;
      var step = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;

      var srcSet = '';
      var firstSrcDone = false;

      for (var i = from; i <= to; i += step) {
        srcSet += '' + (firstSrcDone ? ', ' : '') + src + '&w=' + i + ' ' + i + 'w';

        if (!firstSrcDone) firstSrcDone = true;
      }

      return srcSet;
    };
  }
};
