import Vue from 'vue'
import App from './App'
import routes from './router'
import VueRouter from 'vue-router'
import './config/rem'
Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
	routes,
	mode:'history',  //路由模式
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
