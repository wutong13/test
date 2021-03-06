// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

//定义全局指令
Vue.directive("fonce",{
  inserted:function(el){
el.focus()
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',          //绑定一个元素
  components: { App },  //模板，根组件
  template: '<App/>'    //
})
