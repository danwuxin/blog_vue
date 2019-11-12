import Vue from 'vue'
import App from './App'
import router from './router'
import d2Admin from '@/plugin/d2admin'

Vue.use(d2Admin)


new Vue({
  router,
  el: '#app',
  router,
  render: h => h(App)
})
