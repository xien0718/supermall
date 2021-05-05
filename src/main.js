import Vue from 'vue'
import App from './App.vue'
import router from './router' //自动寻找index.js
import store from './store'
import toast from 'components/common/toast' //引入toast
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
Vue.use(toast) //安装toast
Vue.use(VueLazyLoad, {
  loading: require('assets/img/common/placeholder.png')
})
Vue.config.productionTip = false
FastClick.attach(document.body) //全局使用fastclick插件
Vue.prototype.$bus = new Vue()
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
