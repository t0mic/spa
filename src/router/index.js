import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Implementation from '@/components/Implementation'
import About from '@/components/About'
import TestFeature from '@/components/TestFeature'
import Routing from '@/components/Routing'
import Resource from '@/components/Resource'

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
    },
    {
      path: 'about',
      name: 'about',
      component: About
    },
    {
      path: 'test',
      name: 'test',
      component: TestFeature
    },
    {
      path: 'routing',
      name: 'routing',
      component: Routing
    },
    {
      path: 'resource',
      name: 'resource',
      component: Resource
    },
    {
      path: '*',
      component: Home
    }
  ]
})
