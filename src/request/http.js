import axios from "axios";
import store from "../store/index";
import { message } from "ant-design-vue";


const toLogin = () => {
  router.replace({
    path: "/login",
    query: {
      redirect: router.currentRoute.fullPath,
    },
  });
};

const errorHandler = (status, other) => {
  switch (status) {
    case 401:
      toLogin();
      break;
    case 404:
      message.error("请求的页面不存在");
      break;
    default:
      message.error(other);
      break;
  }
};

var instance = axios.create({ timeout: 1000 * 12 });

instance.interceptors.request.use(
  (config) => {
    if (store.state.user.token) {
      config.headers.Authorization = token; // 添加token至请求头
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (res) => {
    return (res.status+'').startsWith('2') ? Promise.resolve(res.data) : Promise.reject(res);
  },
  (err) => {
    const { response } = error;
    errorHandler(response.status, response.data.message);
    return Promise.reject(response);
  }
);

export default instance;