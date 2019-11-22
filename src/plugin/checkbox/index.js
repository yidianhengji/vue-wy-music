import GCheckbox from './src/checkbox';
import GCheckboxGroup from './src/checkbox-group';

GCheckbox.install = function (Vue) {
  Vue.component(GCheckbox.name, GCheckbox);
  Vue.component(GCheckboxGroup.name, GCheckboxGroup);
};

export default GCheckbox;