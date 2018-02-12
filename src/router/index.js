import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Implementation from '@/components/Implementation'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: 'implementation',
      name: 'implementation',
      component: Implementation
    }
  ]
})
