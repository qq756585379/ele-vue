// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import VueRouter from 'vue-router';

import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';

Vue.use(Vuex);
Vue.use(VueRouter);

Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: { count: 0 },
  // 添加的商品元素
  addCartEl: {},
  mutations: {
    increment(state) {
      state.count++;
    }
  }
});

const routes = [
  { path: '/', redirect: '/goods' },
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings },
  { path: '/seller', component: seller }
];

const router = new VueRouter({
  linkActiveClass: 'active',
  routes // （缩写）相当于 routes: routes
});

/* eslint-disable no-new */
new Vue({
  router,
  store,
  template: '<App/>',
  components: { App },
  data: {
    eventHub: new Vue()
  }
}).$mount('#app');

router.push('/goods');
