import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLayers from 'vuelayers'
import 'vuelayers/lib/style.css'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import VueSocketIOExt from 'vue-socket.io-extended';
import io from 'socket.io-client';

import {HOST, LOCALSTORAGE_KEYS} from "@/consts";

Vue.config.productionTip = false
const socket = io(HOST, {
  extraHeaders: {
    user: localStorage.getItem(LOCALSTORAGE_KEYS.user)
  }
});

Vue.use(VueSocketIOExt, socket, { store });
Vue.use(Buefy)
Vue.use(VueLayers)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
