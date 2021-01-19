import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 菜单的闭合状态 false：不闭合  true：闭合
    collapsed: false
  },
  mutations: {
    changeCollapsed(state) {
      state.collapsed = !state.collapsed;
    }
  },
  actions: {
    changeCollapsed({commit}){
      commit('changeCollapsed')
    }
  },
  modules: {
  },
});
