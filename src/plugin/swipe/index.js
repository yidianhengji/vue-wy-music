import Vue from "vue"
import Swipe from "./src/swipe"
import SwipeItem from "./src/swipe-item"

export default {
  install (Vue, options) {
    Vue.component(Swipe.name, Swipe);
    Vue.component(SwipeItem.name, SwipeItem);
  }
}