'use strict';

function createSrc(src, _ref) {
  var _ref$width = _ref.width,
      width = _ref$width === undefined ? 1600 : _ref$width,
      _ref$fit = _ref.fit,
      fit = _ref$fit === undefined ? 'crop' : _ref$fit,
      _ref$heightRatio = _ref.heightRatio,
      heightRatio = _ref$heightRatio === undefined ? .5625 : _ref$heightRatio,
      _ref$suffix = _ref.suffix,
      suffix = _ref$suffix === undefined ? '' : _ref$suffix;

  return src + '?auto=compress&fit=' + fit + (width ? '&w=' + width : '') + (heightRatio && width ? '&h=' + width * heightRatio : '') + suffix;
}

module.exports = {
  install: function install(Vue) {
    Vue.prototype.$createSrc = createSrc;

    Vue.prototype.$createSizes = function (_ref2) {
      var _ref2$desktop = _ref2.desktop,
          desktop = _ref2$desktop === undefined ? '50vw' : _ref2$desktop,
          _ref2$tablet = _ref2.tablet,
          tablet = _ref2$tablet === undefined ? '75vw' : _ref2$tablet,
          _ref2$mobile = _ref2.mobile,
          mobile = _ref2$mobile === undefined ? '100vw' : _ref2$mobile;

      return '(max-width: 768px) ' + mobile + ', (min-width: 769px) and (max-width: 1023px) ' + tablet + ', ' + desktop;
    };

    Vue.prototype.$createSrcSet = function (src, _ref3) {
      var _ref3$fit = _ref3.fit,
          fit = _ref3$fit === undefined ? 'crop' : _ref3$fit,
          _ref3$heightRatio = _ref3.heightRatio,
          heightRatio = _ref3$heightRatio === undefined ? .5625 : _ref3$heightRatio,
          _ref3$max = _ref3.max,
          max = _ref3$max === undefined ? 1600 : _ref3$max,
          _ref3$min = _ref3.min,
          min = _ref3$min === undefined ? 100 : _ref3$min,
          _ref3$increment = _ref3.increment,
          increment = _ref3$increment === undefined ? 100 : _ref3$increment,
          _ref3$suffix = _ref3.suffix,
          suffix = _ref3$suffix === undefined ? '' : _ref3$suffix;

      var srcSet = '';
      var firstSrcDone = false;

      for (var width = min; width <= max; width += increment) {
        srcSet += '' + (firstSrcDone ? ', ' : '') + createSrc(src, { width: width, fit: fit, heightRatio: heightRatio, suffix: suffix }) + ' ' + width + 'w';

        if (!firstSrcDone) {
          firstSrcDone = true;
        }
      }

      return srcSet;
    };
  }
};
