import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Antd from "ant-design-vue";
import moment from "moment";
import "ant-design-vue/dist/antd.css";

Vue.use(Antd);

Vue.config.productionTip = false;
Vue.prototype.$moment = moment;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
