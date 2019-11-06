import Vue from 'vue';
import Main from './main.vue';
let MessageConstructor = Vue.extend(Main);
let seed = 1;
let instance;
let instances = [];

const Message = function (options) {
  let id = 'message_' + seed++;

  options.onClose = function () {
    Message.close(id);
  };

  instance = new MessageConstructor({
    data: options
  });

  instance.id = id;

  instance.$mount();

  document.body.appendChild(instance.$el);

  let verticalOffset = options.offset || 20;
  instances.forEach(item => {
    verticalOffset += item.$el.offsetHeight + 16;
  });
  instance.verticalOffset = verticalOffset;

  instances.push(instance);
}

Message.close = function (id) {
  let len = instances.length;
  let index = -1;
  let removedHeight;
  for (let i = 0; i < len; i++) {
    if (id === instances[i].id) {
      removedHeight = instances[i].$el.offsetHeight;
      index = i;
      document.body.removeChild(instances[i].$el);
      instances.splice(i, 1);
      break;
    }
  }
  if (len <= 1 || index === -1 || index > instances.length - 1) return;
  for (let i = index; i < len - 1; i++) {
    let dom = instances[i].$el;
    dom.style['bottom'] =
      parseInt(dom.style['bottom'], 10) - removedHeight - 16 + 'px';
  }
};

export default {
  install (Vue, options) {
    Vue.prototype.$message = Message
  }
}