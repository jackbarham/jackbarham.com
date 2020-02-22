import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueLazyload from 'vue-lazyload';

Vue.config.productionTip = false;

Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
