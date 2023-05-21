import api from "../../api/index";
import { message } from "ant-design-vue";

const state = {
  userInfo: {},
  token: null,
  isLogined: false,
};

const mutations = {
  SET_INFO: (state, data = "") => {
    state.userInfo = data;
  },
  SET_TOKEN: (state, data) => {
    state.token = data;
  },
  SET_ISLOGINED: (state, data) => {
    state.isLogined = data;
  },
};

const actions = {
  login({ commit }, loginForm) {
    return new Promise((resolve, reject) => {
      api.user.login(loginForm).then((res) => {
        if (res.code) {
          commit("SET_TOKEN", res.token);
          commit("SET_ISLOGINED", true);
          message.success("登录成功");
          resolve()
        } else {
          message.error("登录失败，请重试");
          reject()
        }
      });
    });
  },
  register({ commit }, registerForm) {
    const registerData = {
      username: registerForm.userName,
      password: registerForm.password,
      captcha: registerForm.captcha,
    };
    return new Promise((resolve, reject) => {
      api.user.register(registerData).then((res) => {
        if (res.code) {
          message.success(res.message);
        } else {
          message.error(res.message);
        }
        resolve(res.code);
      });
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
