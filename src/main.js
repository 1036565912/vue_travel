// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'

//  引入初始化css样式文件
//  由于不同设备浏览器的初始样式不一致 这里引入统一的初始化样式
import './assets/styles/reset.css'
//  引入border样式 纠正不同倍的屏幕对于1px有偏差
import './assets/styles/border.css'

Vue.config.productionTip = false
//  由于移动的点击事件存在300毫秒的延迟 导致用户体验不好 这里引入第三方的fastclick包 来解决这个问题
FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
