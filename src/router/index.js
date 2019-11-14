import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)
import login from "@/views/login/index.vue"
import loginMobile from "@/views/login/mobile-login.vue"

import home from "@/views/home/index.vue"
import user from "@/views/user/index.vue"
import recommend from "@/views/recommend/index.vue"
import cloud from "@/views/cloud/index.vue"
import video from "@/views/video/index.vue"

import song from "@/views/song/index.vue"


import test from "@/views/userTest.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
    children: [
      {
        path: "/",
        redirect: "recommend"
      },
      {
        path: "/user",
        name: "我的",
        component: user
      },
      {
        path: "/recommend",
        name: "发现",
        component: recommend
      },
      {
        path: "/cloud",
        name: "云村",
        component: cloud
      },
      {
        path: "/video",
        name: "视频",
        component: video
      },
      {
        path: "/song/:id",
        name: "song",
        component: song
      },
    ]
  },
  {
    path: "/test",
    name: "test",
    component: test
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
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
