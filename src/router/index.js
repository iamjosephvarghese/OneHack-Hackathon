import Vue from 'vue'
import Router from 'vue-router'
import DashView from '@/components/DashView'
import Login from '@/components/Login'
import FoodsAvailable from '@/components/FoodsAvailable'
import FoodRequests from '@/components/FoodRequests'

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
    },
    {
      path: '/foods',
      component: FoodsAvailable,
      name: 'FoodsAvailable',
      meta: {requiresAuth: true}
    },
    {
      path: '/foodrequests',
      component: FoodRequests,
      name: 'FoodRequests',
      meta: {requiresAuth: true}
    }

  ],
  mode: 'history',
  linkExactActiveClass: 'active',
  scrollBehavior: (to, from, savedPosition) => {
    return savedPosition || { x: 0, y: 0 }
  }
})
