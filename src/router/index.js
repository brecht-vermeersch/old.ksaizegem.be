import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/geleidingen',
    name: 'Geleidingen',
    component: () => import(/* webpackChunkName: "geleidingen" */ '../views/Geleidingen.vue')
  },
  {
    path: '/geleidingen/:id',
    name: 'Geleiding',
    component: () => import(/* webpackChunkName: "geleidingen" */ '../views/GeleidingDetail.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "geleidingen" */ '../views/Contact.vue')
  },
  {
    path: '/inschrijven',
    name: 'Inschrijven',
    component: () => import(/* webpackChunkName: "geleidingen" */ '../views/Inschrijven.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
