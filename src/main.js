// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VueRouter from 'vue-router';
import Mock from './mock';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import store from './vuex';

import axios from './api/axio_config.js';
import echarts from 'echarts';
Object.defineProperty(Vue.prototype, '$axios', { value: axios });

Vue.use(ElementUI);
Vue.use(VueRouter);
//倒入图表插件
Vue.prototype.$echarts = echarts ;
// 配置路由


Vue.config.productionTip = false;

// 每次进行页面跳转前都要进行验证
// router.beforeEach((to, from, next) => {

//   // 如果进入登录页面，则清空 user 信息
//   if (to.path == '/login') {
//     sessionStorage.removeItem('user');
//   }
  
//   // 从 session 中获取 user 的信息
//   let user=sessionStorage.getItem('user');

//   // 如果没有登录，则回到登录页面
//   if (!user && to.path !=='/login'&&to.path !=='/register') {
//     next({ path: '/login' });
//   } else {
//     next();
//   }
// })


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
