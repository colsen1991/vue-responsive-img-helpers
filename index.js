export default {
  install (Vue) {
    Vue.prototype.$createSrc = function (baseSrc, w = null, auto = 'format', fm = 'jpg', fit = 'max', q = 45) {
      return `${baseSrc}?auto=${auto}&fm=${fm}&q=${q}&fit=${fit}${w ? `&w=${w}` : ''}`
    }

    Vue.prototype.$createSizes = function (standard = '50vw', isMobile = false) {
      return `(max-width: 768px) ${isMobile ? '100vw' : standard}, ${standard}`
    }

    Vue.prototype.$createSrcSet = function (src, from = 400, to = 1400, step = 100) {
      let srcSet = ''
      let firstSrcDone = false

      for (let i = from; i <= to; i += step) {
        srcSet += `${firstSrcDone ? ', ' : ''}${src}&w=${i} ${i}w`

        if (!firstSrcDone) firstSrcDone = true
      }

      return srcSet
    }
  }
}