// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
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

router.beforeEach((to, from, next) => {
  console.log(to.fullPath)
  console.log(to.meta)
  next()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
