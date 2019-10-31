import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/home/index.vue")
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/home/index.vue")
  },
  {
    path: "/login",
    name: "登录",
    component: () => import("../views/login/index.vue")
  },
  {
    path: "/mobileLogin",
    name: "手机号登陆",
    component: () => import("../views/login/mobile-login.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
