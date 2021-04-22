import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Calculatorpage from '../views/Calculatorpage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/calculatorpage',
    name: 'Calculatorpage',
    component: Calculatorpage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
