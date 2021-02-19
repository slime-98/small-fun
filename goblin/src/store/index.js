import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    collapsed: false, // 菜单的闭合状态 false：不闭合  true：闭合
    menuRoutes: [], // 存储菜单路由
  },
  mutations: {
    changeCollapsed(state) {
      state.collapsed = !state.collapsed;
    },
    changeMenuRoutes(state, routes) {
      state.menuRoutes = routes
    }
  },
  actions: {
    changeCollapsed({ commit }) {
      commit('changeCollapsed')
    },
    changeMenuRoutes({ commit }, routes) {
      commit('changeMenuRoutes', routes)
    }
  },
  modules: {
  },
});
