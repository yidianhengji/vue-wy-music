import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)
import home from "@/views/home/index.vue"
import login from "@/views/login/index.vue"
import loginMobile from "@/views/login/mobile-login.vue"
import user from "@/views/user.vue"
const routes = [
  {
    path: "/",
    name: "home",
    component: home
  },
  {
    path: "/user",
    name: "user",
    component: user
  },
  {
    path: "/login",
    name: "登录",
    component: login
  },
  {
    path: "/mobileLogin",
    name: "手机号登陆",
    component: loginMobile
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
