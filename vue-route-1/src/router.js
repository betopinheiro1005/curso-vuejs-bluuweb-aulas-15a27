import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/servicos',
      name: 'servicos',
      component: () => import(/* webpackChunkName: "servicos" */ './views/Servicos.vue')
    },
    {
      path: '/fotos/:id',
      name: 'fotos',
      component: () => import(/* webpackChunkName: "fotos" */ './views/Fotos.vue')
    }

  ]
})
