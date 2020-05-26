import Vue from 'vue'
import App from './App.vue'
import SimpleVueValidator from 'simple-vue-validator'
import router from './router'

Vue.use(SimpleVueValidator)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
