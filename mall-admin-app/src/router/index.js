import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/layout/Home.vue';
import Login from '../views/layout/Login.vue'
import store from '@/store';
import getMenuRoutes from '@/utils/permission'

Vue.use(VueRouter);
const anycRouterMap = [
  {
    path: '/product',
    name: 'Product',
    component: Home,
    meta: {
      title: '商品',
      icon: 'shop',
      hidden: false
    },
    children: [
      {
        path: '/list',
        name: 'List',
        meta: {
          title: '商品列表',
          icon: 'unordered-list',
          hidden: false
        },
        component: () => import('../views/layout/page/productList.vue')
      },
      {
        path: '/add',
        name: 'Add',
        meta: {
          title: '添加商品',
          icon: 'plus',
          hidden: false
        },
        component: () => import('../views/layout/page/productAdd.vue')
      },
      {
        path: '/category',
        name: 'Category',
        meta: {
          title: '类目管理',
          icon: 'ordered-list',
          hidden: false
        },
        component: () => import('../views/layout/page/category.vue')
      }
    ]
  }
]
const routes = [
  {
    path: '/',
    name: 'Home',
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
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
      icon: 'mail',
      hidden: true
    },
    component: Login,
  }
];
console.log(anycRouterMap)
const router = new VueRouter({
  routes,
});

// 路由拦截
let isAddRoutes = false; // 判断是否添加过路由
router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    if (store.state.user.appkey) {
      if (!isAddRoutes) {
        const menuRoutes = getMenuRoutes(store.state.user.role, anycRouterMap); // 调用方法匹配角色对应权限
        store.dispatch('changeMenuRoutes', routes.concat(menuRoutes)).then(() => {
          router.addRoutes(menuRoutes);
          next();
        });
        isAddRoutes = true
      }
      return next();
    } else {
      return next('/login')
    }
  }
  return next()
})
export default router;
