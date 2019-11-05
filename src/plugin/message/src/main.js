import Vue from 'vue';
import Main from './main.vue';
let MessageConstructor = Vue.extend(Main);
let seed = 1;
let instance;
export default {
  install (Vue, options) {
    Vue.prototype.$message = function (options) {
      let id = 'message_' + seed++;
      instance = new MessageConstructor({
        data: options
      });
      instance.id = id;
      instance.$mount();
      document.body.appendChild(instance.$el);

      if (options.duration > 0) {
        options.timer = setTimeout(() => {
          document.body.removeChild(instance.$el);
        }, options.duration);
      }

    }
  }
}