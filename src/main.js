import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//element
import '@/config/element.js'
//api
import api from '@/request/api/index'
Vue.prototype.$api = api


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
