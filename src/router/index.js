import Vue from 'vue'
import Router from 'vue-router'
import DashView from '@/components/DashView'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      component: DashView,
      name: 'DashView',
      meta: {requiresAuth: true}
    }
  ],
  mode: 'history',
  linkExactActiveClass: 'active',
  scrollBehavior: (to, from, savedPosition) => {
    return savedPosition || { x: 0, y: 0 }
  }
})
