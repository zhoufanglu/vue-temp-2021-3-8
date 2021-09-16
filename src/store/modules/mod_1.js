
const mod_1 = {
  state: {
    userInfo: {
      token: '',
      userName: 'test',
    },
    theme: {
      color: '#409EFF'
    }
  },

  mutations: {
    SET_RISK_USER_INFO(state, val) {
      state.userInfo = Object.assign(state.userInfo, val)
    },
    setTheme(state,val) {
      state.theme = val
    }
  },

  actions: {
    setRiskUserInfo({ commit }, val) {
      commit('SET_RISK_USER_INFO', val)
    },
  },
}

export default mod_1
