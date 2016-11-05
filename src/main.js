import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import Hello from './components/Hello.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// We want to apply VueResource and VueRouter
// to our Vue instance
Vue.use(VueResource)
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: Home
  }, {
    path: '/hello',
    component: Hello
  }, {
    path: '/',
    component: App
  }, {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({routes})

new Vue({router}).$mount('#app')
