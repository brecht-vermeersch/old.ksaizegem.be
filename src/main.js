import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'normalize.css';
import '@/assets/scss/styles.scss';

import DirectusImg from "@/components/DirectusImg.vue"
import VueGtag from "vue-gtag";
import Spinner from 'vue-simple-spinner'

Vue.config.productionTip = false

Vue.component('d-img', DirectusImg)
Vue.component('spinner', Spinner)

Vue.use(VueGtag, {
  config: { id: "G-C7RJHM2S7C" }
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
