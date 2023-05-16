import api from '../../api/index'

const state = {
  username: 'xiaoming',
  userid: -1,
  token: null,
  isLogined: false,
}

const mutations = {
  SET_NAME: (state, data = '') => {
    state.username = data
  },
  SET_ID: (state, data = 0) => {
    state.userid = data
  },
  SET_TOKEN: (state, data) => {
    state.token = data;
  },
  SET_ISLOGINED: (state, data) => {
    state.isLogined = data;
  }
}

const actions = {
  changeId({ commit }, data = Number) {
    commit('SET_ID', data)
  },
  login({ commit }, loginForm) {
    console.log('触发到了action哦');
    api.user.articleList().then(res=>{
      console.log('这里是回调', res);
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}


