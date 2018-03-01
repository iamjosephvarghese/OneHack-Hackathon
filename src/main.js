// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import firebase from 'firebase'
import store from './store'
import { sync } from 'vuex-router-sync'
import router from './router'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VTooltip,
  VForm,
  VDatePicker,
  VSpeedDial,
  VTextField,
  VCard,
  VIcon,
  vDialog,
  vSelect,
  VGrid,
  VToolbar,
  transitions
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VSpeedDial,
    VNavigationDrawer,
    VFooter,
    VList,
    VForm,
    VDatePicker,
    VTextField,
    vDialog,
    vSelect,
    VCard,
    VTooltip,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    transitions
  },
  theme: { 
    primary: '#D81B60', 
    secondary: '#C2185B', 
    accent: '#03A9F4', 
    error: '#f44336', 
    warning: '#ffeb3b', 
    info: '#2196f3',
    success: '#4caf50' 
  }
})

Vue.config.productionTip = false

firebase.initializeApp(store.getters.getFirebaseConfig)

let app

sync(store, router)

router.beforeEach((to, from, next) => {
  var currentUser = firebase.auth().currentUser
  console.log(currentUser)
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth) {
    if (currentUser) {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
  next()
})
/* eslint-disable no-new */
firebase.auth().onAuthStateChanged(
  function (user) {
    if (!app) {
      app = new Vue({
        el: '#app',
        router,
        store,
        components: { App },
        template: '<App/>'
      })
    }
  })

