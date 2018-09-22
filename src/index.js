function createSrc (src, w, fit, hr) {
  return `${src}?auto=compress&fit=${fit}${w ? `&w=${w}` : ''}${hr && w ? `&h=${w*hr}` : ''}`
}

module.exports = {
  install (Vue) {
    Vue.prototype.$createSrc = createSrc

    Vue.prototype.$createSizes = function (standard = '50vw', isMobile = false) {
      return `(max-width: 768px) ${isMobile ? '100vw' : standard}, ${standard}`
    }

    Vue.prototype.$createSrcSet = function (src, fit, hr) {
      let srcSet = ''
      let firstSrcDone = false

      for (let w = 100; w <= 1600; w += 100) {
        srcSet += `${firstSrcDone ? ', ' : ''}${createSrc(src, w, fit, hr)} ${w}w`

        if (!firstSrcDone) firstSrcDone = true
      }

      return srcSet
    }
  }
}
