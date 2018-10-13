import Vue from 'vue';
import Router from 'vue-router';

import HelloWorld from '@/components/HelloWorld';

Vue.use(Router);
// 路由模块，匹配url
export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes:[
    {
    path:'/',
    redirect: '/HelloWorld'
  },{
    path:'/HelloWorld',
    name:'HelloWorld',
    component:HelloWorld
  }
  ]
}
);

