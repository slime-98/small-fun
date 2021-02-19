import Vue from 'vue';
import Vcharts from 'v-charts'
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/ant-design-vue';
import echarts from 'echarts';

Vue.use(Vcharts);
Vue.config.productionTip = false;
Vue.prototype.echarts = echarts;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
