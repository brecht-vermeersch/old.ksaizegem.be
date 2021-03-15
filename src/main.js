import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'normalize.css';
import '@/assets/scss/styles.scss';

import DirectusImg from "@/components/DirectusImg.vue"

Vue.config.productionTip = false

Vue.component('d-img', DirectusImg)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
