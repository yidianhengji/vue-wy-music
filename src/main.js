import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "./assets/css/reast.css"
import "./assets/css/animate.css"
import "./assets/font/iconfont.css"

import message from "./plugin/message"
import swipe from "./plugin/swipe"
Vue.use(message)
Vue.use(swipe)

Vue.config.productionTip = false

let vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
window.vm = vm