// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router'
import store from './store/store'//引入vuex，store
import { ToastPlugin } from 'vux'; //引入toast组件
import  { LoadingPlugin } from 'vux'
Vue.use(LoadingPlugin)
Vue.use(ToastPlugin);
FastClick.attach(document.body)

Vue.config.productionTip = false
/* eslint-disable no-new */
if (process.env.NODE_ENV === 'development') {
  new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
  })
} else {
  document.addEventListener('deviceready', function () {
    new Vue({
      el: '#app',
      router,
      store,
      template: '<App/>',
      components: { App }
    })
    window.navigator.splashscreen.hide()
  }, false);
}

