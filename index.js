'use strict';

function createSrc(src, w, fit, hr) {
  return src + '?auto=compress&fit=' + fit + (w ? '&w=' + w : '') + (hr && w ? '&h=' + w * hr : '');
}

module.exports = {
  install: function install(Vue) {
    Vue.prototype.$createSrc = createSrc;

    Vue.prototype.$createSizes = function () {
      var standard = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '50vw';
      var isMobile = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      return '(max-width: 768px) ' + (isMobile ? '100vw' : standard) + ', ' + standard;
    };

    Vue.prototype.$createSrcSet = function (src, fit, hr) {
      var srcSet = '';
      var firstSrcDone = false;

      for (var w = 100; w <= 1600; w += 100) {
        srcSet += '' + (firstSrcDone ? ', ' : '') + createSrc(src, w, fit, hr) + ' ' + w + 'w';

        if (!firstSrcDone) firstSrcDone = true;
      }

      return srcSet;
    };
  }
};
