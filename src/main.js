import Vue from 'vue'
import App from './App.vue'

// BOOTSTRAP
import {
  BootstrapVue,
  IconsPlugin
} from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(IconsPlugin)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

// ROUTER

import router from './router'

// Vue X

import Vuex from 'vuex'
Vue.use(Vuex)

import {
  store
} from "./store/store";


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')