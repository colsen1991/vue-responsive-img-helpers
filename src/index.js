function createSrc (baseSrc, w = null, q = null, auto = 'compress', fit = 'max', hr = 0.56) {
  return `${baseSrc}?auto=${auto}&fit=${fit}${w ? `&w=${w}` : ''}${q ? `&q=${q}` : ''}${hr && w ? `&h=${w*hr}` : ''}`
}

function createSrcSet (src, hr = 0.56, from = 400, to = 1400, step = 100) {
  let srcSet = ''
  let firstSrcDone = false

  for (let i = from; i <= to; i += step) {
    srcSet += `${firstSrcDone ? ', ' : ''}${src}&w=${i}${hr ? `&h=${i*hr}` : ''} ${i}w`

    if (!firstSrcDone) firstSrcDone = true
  }

  return srcSet
}

module.exports = {
  install (Vue) {
    Vue.prototype.$createSrc = createSrc

    Vue.prototype.$createSrcLegacy = function (baseSrc, w = null, q = null, auto = 'compress', fit = 'max') {
      return createSrc(baseSrc, w, q, auto, fit, null)
    }

    Vue.prototype.$createSizes = function (standard = '50vw', isMobile = false) {
      return `(max-width: 768px) ${isMobile ? '100vw' : standard}, ${standard}`
    }

    Vue.prototype.$createSrcSet = createSrcSet

    Vue.prototype.$createSrcSetLegacy = function (src, from = 400, to = 1400, step = 100) {
      return createSrcSet(src, null, from, to, step)
    }
  }
}
