import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "./assets/css/reast.css"
import "./assets/css/animate.css"
import "./assets/font/iconfont.css"

import message from "./plugin/message"
Vue.use(message)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
