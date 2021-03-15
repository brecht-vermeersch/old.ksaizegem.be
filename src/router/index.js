import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "geleidingen" */ '../views/Home.vue')
  },
  {
    path: '/geleidingen',
    name: 'Geleidingen',
    component: () => import(/* webpackChunkName: "geleidingen" */ '../views/Geleidingen.vue')
  },
  {
    path: '/geleidingen/:naam',
    name: 'Geleiding',
    component: () => import(/* webpackChunkName: "geleidingen" */ '../views/GeleidingDetail.vue'),
    meta: {
      sitemap: {
        slugs: ["Kabouters", "Piepjongknapen", "Jongknapen", "Jonghernieuwers", "Hernieuwers"]
      }
    }
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
