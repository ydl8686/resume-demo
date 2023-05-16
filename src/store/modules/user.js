const state = {
  username: 'xiaoming',
  userid: -1,
}

const mutations = {
  SET_NAME: (state, data = '') => {
    state.username = data
  },
  SET_ID: (state, data = 0) => {
    state.userid = data
  }
}

const actions = {
  changeId({ commit }, data = Number) {
    commit('SET_ID', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}


