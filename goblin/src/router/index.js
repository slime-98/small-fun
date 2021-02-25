import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/layout/Home.vue';

Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/index',
    component: Home,
    meta: {
      title: '首页',
      icon: 'home',
      hidden: false
    },
    children: [{
      path: '/index',
      name: 'Index',
      meta: {
        title: '统计',
        icon: 'line-chart',
        hidden: false
      },
      component: () => import('../views/layout/page/index.vue')
    }]
  },
  {
    path: '/echarts',
    name: 'ECharts',
    component: Home,
    meta: {
      title: 'ECharts',
      icon: 'line-chart',
      hidden: false
    },
    children: [
      {
        path: '/echarts_1',
        name: 'echarts_1',
        meta: {
          title: 'echarts_1',
          icon: 'google',
          hidden: false
        },
        component: () => import('../views/layout/page/echarts/echarts_1.vue')
      },
      {
        path: '/echarts_2',
        name: 'echarts_2',
        meta: {
          title: 'title',
          icon: 'google',
          hidden: false
        },
        component: () => import('../views/layout/page/echarts/echarts_2.vue')
      },
      {
        path: '/echarts_3',
        name: 'echarts_3',
        meta: {
          title: 'legend',
          icon: 'google',
          hidden: false
        },
        component: () => import('../views/layout/page/echarts/echarts_3.vue')
      },
      {
        path: '/echarts_4',
        name: 'echarts_4',
        meta: {
          title: 'grid',
          icon: 'google',
          hidden: false
        },
        component: () => import('../views/layout/page/echarts/echarts_4.vue')
      },
      {
        path: '/polar',
        name: 'echarts_5',
        meta: {
          title: '极坐标系',
          icon: 'google',
          hidden: false
        },
        component: () => import('../views/layout/page/echarts/echarts_5.vue')
      },
      {
        path: '/radar',
        name: 'echarts_6',
        meta: {
          title: '雷达图坐标系',
          icon: 'google',
          hidden: false
        },
        component: () => import('../views/layout/page/echarts/echarts_6.vue')
      },
      {
        path: '/dataZoom',
        name: 'echarts_7',
        meta: {
          title: '区域缩放',
          icon: 'google',
          hidden: false
        },
        component: () => import('../views/layout/page/echarts/echarts_7.vue')
      },
    ]
  },
  {
    path: '/webGl',
    name: 'WebGl',
    component: Home,
    meta: {
      title: 'WebGl',
      icon: 'block',
      hidden: false
    },
    children: [
      {
        path: '/webGl_1',
        name: 'webGl_1',
        meta: {
          title: 'webGl_1',
          icon: 'qq',
          hidden: false
        },
        component: () => import('../views/layout/page/webGl/webGl_1.vue')
      },
    ]
  },
  {
    path: '/three',
    name: 'Three',
    component: Home,
    meta: {
      title: 'Three',
      icon: 'deployment-unit',
      hidden: false
    },
    children: [
      {
        path: '/three_1',
        name: 'Three_1',
        meta: {
          title: 'Three_1',
          icon: 'bug',
          hidden: false
        },
        component: () => import('../views/layout/page/three/three_1.vue')
      },
    ]
  }
];
const router = new VueRouter({
  routes,
});

export default router;
