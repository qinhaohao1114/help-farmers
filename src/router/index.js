import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './../pages/home/Home'
import Card from './../pages/card/Card'
import Order from './../pages/order/Order'

Vue.use(VueRouter)

export default new VueRouter({
  router:[
    {
      path:'/home',
      component: Home
    },
    {
      path:'/card',
      component: Card
    },
    {
      path:'/order',
      component: Order
    }
  ]
})
