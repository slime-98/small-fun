import Vue from 'vue';
import Vuex from 'vuex';
import { setCookie, getUserCooke, removeUserCookie} from '@/utils/userCookie';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    collapsed: false, // 菜单的闭合状态 false：不闭合  true：闭合
    user: getUserCooke()
  },
  mutations: {
    changeCollapsed(state) {
      state.collapsed = !state.collapsed;
    },
    setUserInfo(state, userInfo) {
      state.user = userInfo;
    },
    removeUserInfo(state) {
      state.user = {};
    }
  },
  actions: {
    changeCollapsed({ commit }) {
      commit('changeCollapsed')
    },
    setUserInfo({ commit }, userInfo) {
      commit('setUserInfo', userInfo)
      setCookie(userInfo)
    },
    removeUserInfo({ commit }){
      commit('removeUserInfo')
      removeUserCookie()
    }
  },
  modules: {
  },
});
