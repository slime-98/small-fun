import Vue from 'vue';
import Vcharts from 'v-charts'
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/ant-design-vue'

Vue.use(Vcharts);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
