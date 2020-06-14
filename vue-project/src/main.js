import Vue from 'vue';
import App from './App.vue';
import ColorDirective from './color';
import ElasticColorDirective from './elastic';
import Modify from './modify';

Vue.directive('colored', ColorDirective);
Vue.directive('elastic', ElasticColorDirective);
Vue.directive('modify', Modify);

export const eventEmitter = new Vue();

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app');
