// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'

import Ajax from './utils/ajax'
import * as Filters from './utils/filter'

import 'font-awesome/css/font-awesome.min.css'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/reset.css'
import './assets/common.css'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.prototype.$http = Ajax

/*
 * 循环注册全局过滤器
 */
Object.keys(Filters).forEach(key => {
	Vue.filter(key, Filters[key])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
