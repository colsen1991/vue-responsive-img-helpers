function createSrc (src, {width = 1600, fit = 'crop', heightRatio = .5625, suffix = ''}) {
  return `${src}?auto=compress&fit=${fit}${width ? `&w=${width}` : ''}${heightRatio && width ? `&h=${width*heightRatio}` : ''}${suffix}`
}

module.exports = {
  install (Vue) {
    Vue.prototype.$createSrc = createSrc

    Vue.prototype.$createSizes = function ({desktop = '50vw', tablet = '75vw', mobile = '100vw'}) {
      return `(max-width: 768px) ${mobile}, (min-width: 769px) and (max-width: 1023px) ${tablet}, ${desktop}`
    }

    Vue.prototype.$createSrcSet = function (src, {fit = 'crop', heightRatio = .5625, max = 1600, min = 100, increment = 100, suffix = ''}) {
      let srcSet = ''
      let firstSrcDone = false

      for (let width = min; width <= max; width += increment) {
        srcSet += `${firstSrcDone ? ', ' : ''}${createSrc(src, {width, fit, heightRatio, suffix})} ${width}w`

        if (!firstSrcDone) {
          firstSrcDone = true
        }
      }

      return srcSet
    }
  }
}
