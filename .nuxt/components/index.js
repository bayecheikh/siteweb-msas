export { default as BarChart } from '../..\\components\\BarChart.vue'
export { default as Breadcrumb } from '../..\\components\\Breadcrumb.vue'
export { default as HeaderOffcanvasMenuWithTransparent } from '../..\\components\\HeaderOffcanvasMenuWithTransparent.vue'
export { default as HeaderWithTopbar } from '../..\\components\\HeaderWithTopbar.vue'
export { default as Navigation } from '../..\\components\\Navigation.vue'
export { default as OffCanvasMobileMenu } from '../..\\components\\OffCanvasMobileMenu.vue'
export { default as ResponsiveMobileMenu } from '../..\\components\\ResponsiveMobileMenu.vue'
export { default as TheFooter } from '../..\\components\\TheFooter.vue'
export { default as TheHeader } from '../..\\components\\TheHeader.vue'
export { default as HeroSlider } from '../..\\components\\hero\\HeroSlider.vue'
export { default as PolicyServicePolicy } from '../..\\components\\policy\\ServicePolicy.vue'

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
