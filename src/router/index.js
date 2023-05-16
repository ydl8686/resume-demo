import Vue from "vue";
import VueRouter from "vue-router";
import store from '../store/index'
import { message } from 'ant-design-vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home/timeline",
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
    redirect: "/home/timeline",
    children: [
      {
        path: "timeline",
        component: () => import("../components/TimeLine.vue"),
        meta: {
          isAuth: true,
        },
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  console.log('看看路由', to);
  const { isAuth } = to.meta;
  const isLogined = store.state.user.isLogined;
  if (isAuth) {
    if (isLogined) {
      next();
    } else {
      message.error('还未登录，跳转至登录页面')
      router.push("/login");
    }
  } else {
    next();
  }
});

export default router;
