import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _43b5e9c5 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _d45b261c = () => interopDefault(import('..\\pages\\activites\\index.vue' /* webpackChunkName: "pages/activites/index" */))
const _0dbcafb0 = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _79f590d0 = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _2d9ed284 = () => interopDefault(import('..\\pages\\checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _155b8f1d = () => interopDefault(import('..\\pages\\compare.vue' /* webpackChunkName: "pages/compare" */))
const _305f60d8 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _13864ce4 = () => interopDefault(import('..\\pages\\home-cosmetics.vue' /* webpackChunkName: "pages/home-cosmetics" */))
const _b7735be6 = () => interopDefault(import('..\\pages\\home-fashion-five.vue' /* webpackChunkName: "pages/home-fashion-five" */))
const _3ea3e2fe = () => interopDefault(import('..\\pages\\home-fashion-four.vue' /* webpackChunkName: "pages/home-fashion-four" */))
const _6043ea7c = () => interopDefault(import('..\\pages\\home-fashion-seven.vue' /* webpackChunkName: "pages/home-fashion-seven" */))
const _53ebcf52 = () => interopDefault(import('..\\pages\\home-fashion-six.vue' /* webpackChunkName: "pages/home-fashion-six" */))
const _70a3805a = () => interopDefault(import('..\\pages\\home-fashion-three.vue' /* webpackChunkName: "pages/home-fashion-three" */))
const _225558c1 = () => interopDefault(import('..\\pages\\home-fashion-two.vue' /* webpackChunkName: "pages/home-fashion-two" */))
const _c9023d02 = () => interopDefault(import('..\\pages\\login-register.vue' /* webpackChunkName: "pages/login-register" */))
const _326c2c7c = () => interopDefault(import('..\\pages\\marches-publics\\index.vue' /* webpackChunkName: "pages/marches-publics/index" */))
const _7b305a43 = () => interopDefault(import('..\\pages\\missions\\index.vue' /* webpackChunkName: "pages/missions/index" */))
const _6593e4f8 = () => interopDefault(import('..\\pages\\my-account.vue' /* webpackChunkName: "pages/my-account" */))
const _5e5c740f = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _4aedca30 = () => interopDefault(import('..\\pages\\qui-sommes-nous\\index.vue' /* webpackChunkName: "pages/qui-sommes-nous/index" */))
const _a3e68724 = () => interopDefault(import('..\\pages\\shop.vue' /* webpackChunkName: "pages/shop" */))
const _6465a590 = () => interopDefault(import('..\\pages\\shop-grid-full-width.vue' /* webpackChunkName: "pages/shop-grid-full-width" */))
const _20bcefd8 = () => interopDefault(import('..\\pages\\shop-grid-no-sidebar.vue' /* webpackChunkName: "pages/shop-grid-no-sidebar" */))
const _418a0c5a = () => interopDefault(import('..\\pages\\shop-grid-right-sidebar.vue' /* webpackChunkName: "pages/shop-grid-right-sidebar" */))
const _b9f7b202 = () => interopDefault(import('..\\pages\\shop-grid-two-column.vue' /* webpackChunkName: "pages/shop-grid-two-column" */))
const _814db590 = () => interopDefault(import('..\\pages\\shop-list-full-width.vue' /* webpackChunkName: "pages/shop-list-full-width" */))
const _31d3ea6d = () => interopDefault(import('..\\pages\\shop-list-standard.vue' /* webpackChunkName: "pages/shop-list-standard" */))
const _4ddbdc36 = () => interopDefault(import('..\\pages\\terms-conditions.vue' /* webpackChunkName: "pages/terms-conditions" */))
const _ff3ab086 = () => interopDefault(import('..\\pages\\wishlist.vue' /* webpackChunkName: "pages/wishlist" */))
const _92f4f94c = () => interopDefault(import('..\\pages\\blog\\blog-right-sidebar.vue' /* webpackChunkName: "pages/blog/blog-right-sidebar" */))
const _edf9d374 = () => interopDefault(import('..\\pages\\blog\\blog-without-sidebar.vue' /* webpackChunkName: "pages/blog/blog-without-sidebar" */))
const _1373364b = () => interopDefault(import('..\\pages\\marches-publics\\decret-statut.vue' /* webpackChunkName: "pages/marches-publics/decret-statut" */))
const _ed334894 = () => interopDefault(import('..\\pages\\marches-publics\\mission.vue' /* webpackChunkName: "pages/marches-publics/mission" */))
const _642699e5 = () => interopDefault(import('..\\pages\\marches-publics\\organnigramme.vue' /* webpackChunkName: "pages/marches-publics/organnigramme" */))
const _f86755c2 = () => interopDefault(import('..\\pages\\missions\\blog-right-sidebar.vue' /* webpackChunkName: "pages/missions/blog-right-sidebar" */))
const _1fdc8acb = () => interopDefault(import('..\\pages\\missions\\blog-without-sidebar.vue' /* webpackChunkName: "pages/missions/blog-without-sidebar" */))
const _223b6598 = () => interopDefault(import('..\\pages\\product\\product-affiliate.vue' /* webpackChunkName: "pages/product/product-affiliate" */))
const _5325dfff = () => interopDefault(import('..\\pages\\qui-sommes-nous\\decret-statut.vue' /* webpackChunkName: "pages/qui-sommes-nous/decret-statut" */))
const _f011472c = () => interopDefault(import('..\\pages\\qui-sommes-nous\\mission.vue' /* webpackChunkName: "pages/qui-sommes-nous/mission" */))
const _b84d78ce = () => interopDefault(import('..\\pages\\qui-sommes-nous\\organnigramme.vue' /* webpackChunkName: "pages/qui-sommes-nous/organnigramme" */))
const _d7c868ac = () => interopDefault(import('..\\pages\\activites\\_slug.vue' /* webpackChunkName: "pages/activites/_slug" */))
const _1129f240 = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _30b58b34 = () => interopDefault(import('..\\pages\\marches-publics\\_slug.vue' /* webpackChunkName: "pages/marches-publics/_slug" */))
const _7979b8fb = () => interopDefault(import('..\\pages\\missions\\_slug.vue' /* webpackChunkName: "pages/missions/_slug" */))
const _64c33f33 = () => interopDefault(import('..\\pages\\product\\_slug.vue' /* webpackChunkName: "pages/product/_slug" */))
const _493728e8 = () => interopDefault(import('..\\pages\\qui-sommes-nous\\_slug.vue' /* webpackChunkName: "pages/qui-sommes-nous/_slug" */))
const _636dc48a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _43b5e9c5,
    name: "about"
  }, {
    path: "/activites",
    component: _d45b261c,
    name: "activites"
  }, {
    path: "/blog",
    component: _0dbcafb0,
    name: "blog"
  }, {
    path: "/cart",
    component: _79f590d0,
    name: "cart"
  }, {
    path: "/checkout",
    component: _2d9ed284,
    name: "checkout"
  }, {
    path: "/compare",
    component: _155b8f1d,
    name: "compare"
  }, {
    path: "/contact",
    component: _305f60d8,
    name: "contact"
  }, {
    path: "/home-cosmetics",
    component: _13864ce4,
    name: "home-cosmetics"
  }, {
    path: "/home-fashion-five",
    component: _b7735be6,
    name: "home-fashion-five"
  }, {
    path: "/home-fashion-four",
    component: _3ea3e2fe,
    name: "home-fashion-four"
  }, {
    path: "/home-fashion-seven",
    component: _6043ea7c,
    name: "home-fashion-seven"
  }, {
    path: "/home-fashion-six",
    component: _53ebcf52,
    name: "home-fashion-six"
  }, {
    path: "/home-fashion-three",
    component: _70a3805a,
    name: "home-fashion-three"
  }, {
    path: "/home-fashion-two",
    component: _225558c1,
    name: "home-fashion-two"
  }, {
    path: "/login-register",
    component: _c9023d02,
    name: "login-register"
  }, {
    path: "/marches-publics",
    component: _326c2c7c,
    name: "marches-publics"
  }, {
    path: "/missions",
    component: _7b305a43,
    name: "missions"
  }, {
    path: "/my-account",
    component: _6593e4f8,
    name: "my-account"
  }, {
    path: "/privacy-policy",
    component: _5e5c740f,
    name: "privacy-policy"
  }, {
    path: "/qui-sommes-nous",
    component: _4aedca30,
    name: "qui-sommes-nous"
  }, {
    path: "/shop",
    component: _a3e68724,
    name: "shop"
  }, {
    path: "/shop-grid-full-width",
    component: _6465a590,
    name: "shop-grid-full-width"
  }, {
    path: "/shop-grid-no-sidebar",
    component: _20bcefd8,
    name: "shop-grid-no-sidebar"
  }, {
    path: "/shop-grid-right-sidebar",
    component: _418a0c5a,
    name: "shop-grid-right-sidebar"
  }, {
    path: "/shop-grid-two-column",
    component: _b9f7b202,
    name: "shop-grid-two-column"
  }, {
    path: "/shop-list-full-width",
    component: _814db590,
    name: "shop-list-full-width"
  }, {
    path: "/shop-list-standard",
    component: _31d3ea6d,
    name: "shop-list-standard"
  }, {
    path: "/terms-conditions",
    component: _4ddbdc36,
    name: "terms-conditions"
  }, {
    path: "/wishlist",
    component: _ff3ab086,
    name: "wishlist"
  }, {
    path: "/blog/blog-right-sidebar",
    component: _92f4f94c,
    name: "blog-blog-right-sidebar"
  }, {
    path: "/blog/blog-without-sidebar",
    component: _edf9d374,
    name: "blog-blog-without-sidebar"
  }, {
    path: "/marches-publics/decret-statut",
    component: _1373364b,
    name: "marches-publics-decret-statut"
  }, {
    path: "/marches-publics/mission",
    component: _ed334894,
    name: "marches-publics-mission"
  }, {
    path: "/marches-publics/organnigramme",
    component: _642699e5,
    name: "marches-publics-organnigramme"
  }, {
    path: "/missions/blog-right-sidebar",
    component: _f86755c2,
    name: "missions-blog-right-sidebar"
  }, {
    path: "/missions/blog-without-sidebar",
    component: _1fdc8acb,
    name: "missions-blog-without-sidebar"
  }, {
    path: "/product/product-affiliate",
    component: _223b6598,
    name: "product-product-affiliate"
  }, {
    path: "/qui-sommes-nous/decret-statut",
    component: _5325dfff,
    name: "qui-sommes-nous-decret-statut"
  }, {
    path: "/qui-sommes-nous/mission",
    component: _f011472c,
    name: "qui-sommes-nous-mission"
  }, {
    path: "/qui-sommes-nous/organnigramme",
    component: _b84d78ce,
    name: "qui-sommes-nous-organnigramme"
  }, {
    path: "/activites/:slug",
    component: _d7c868ac,
    name: "activites-slug"
  }, {
    path: "/blog/:slug",
    component: _1129f240,
    name: "blog-slug"
  }, {
    path: "/marches-publics/:slug?",
    component: _30b58b34,
    name: "marches-publics-slug"
  }, {
    path: "/missions/:slug",
    component: _7979b8fb,
    name: "missions-slug"
  }, {
    path: "/product/:slug?",
    component: _64c33f33,
    name: "product-slug"
  }, {
    path: "/qui-sommes-nous/:slug?",
    component: _493728e8,
    name: "qui-sommes-nous-slug"
  }, {
    path: "/",
    component: _636dc48a,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
