import Vue from 'vue'
import App from './App'
import store from './store'

new Vue({
  el:'#app',
  router,
  store,
  render:h=>h(App)
})
