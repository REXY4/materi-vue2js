import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './index.css';
// add this
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
