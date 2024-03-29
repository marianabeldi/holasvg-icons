export const Footer = () => import('../../components/global/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const InfoBox = () => import('../../components/global/InfoBox.vue' /* webpackChunkName: "components/info-box" */).then(c => wrapFunctional(c.default || c))
export const PrevNext = () => import('../../components/global/PrevNext.vue' /* webpackChunkName: "components/prev-next" */).then(c => wrapFunctional(c.default || c))
export const AppSearchInput = () => import('../../components/AppSearchInput.vue' /* webpackChunkName: "components/app-search-input" */).then(c => wrapFunctional(c.default || c))
export const Author = () => import('../../components/Author.vue' /* webpackChunkName: "components/author" */).then(c => wrapFunctional(c.default || c))
export const Logo = () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const TheHeader = () => import('../../components/TheHeader.vue' /* webpackChunkName: "components/the-header" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
