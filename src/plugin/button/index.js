

import GButton from './src/button';

/* istanbul ignore next */
GButton.install = function(Vue) {
  Vue.component(GButton.name, GButton);
};

export default GButton;