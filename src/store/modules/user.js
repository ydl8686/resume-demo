import api from "../../api/index";
import { message } from "ant-design-vue";

const state = {
  username: "xiaoming",
  userid: -1,
  token: null,
  isLogined: false,
};

const mutations = {
  SET_NAME: (state, data = "") => {
    state.username = data;
  },
  SET_ID: (state, data = 0) => {
    state.userid = data;
  },
  SET_TOKEN: (state, data) => {
    state.token = data;
  },
  SET_ISLOGINED: (state, data) => {
    state.isLogined = data;
  },
};

const actions = {
  changeId({ commit }, data = Number) {
    commit("SET_ID", data);
  },
  login({ commit }, loginForm) {
    api.user.articleList().then((res) => {
      console.log("这里是回调", res);
    });
  },
  register({ commit }, registerForm) {
    const registerData = {
      username: registerForm.userName,
      password: registerForm.password,
    };
    api.user.register(registerData).then((res) => {
      if (res.code !== 0) {
        message.success('注册成功')
      }
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
