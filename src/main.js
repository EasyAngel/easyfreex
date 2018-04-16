// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// 懒加载
import Vuelazyload from 'vue-lazyload'

// 瀑布流
import vueWaterfallEasy from 'vue-waterfall-easy'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)
 
 // 懒加载
Vue.use(Vuelazyload, {
preLoad: 1,    //预加载高度的比例
error: 'http://cdn.uehtml.com/201402/1392662591495_1140x0.gif',  //图像的src加载失败
loading: 'http://cdn.uehtml.com/201402/1392662591495_1140x0.gif', //src的图像加载
attempt: 1,  //尝试计数
listenEvents: [ 'scroll', 'mousewheel' ] //你想要监听的事件,我个人喜欢全部监听，方便
});
// 注册瀑布流组件
export default {
	 components: {
	 vueWaterfallEasy
	 } 
}
// 瀑布流
Vue.use(vueWaterfallEasy)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
