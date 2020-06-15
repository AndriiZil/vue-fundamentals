import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource)
Vue.http.options.root = 'http://localhost:3000/'

Vue.http.interceptors.push(request => {
  request.headers.set('Auth', 'RAND TOKEN ' + Math.random())
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
