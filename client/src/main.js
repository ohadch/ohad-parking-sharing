import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLayers from 'vuelayers'
import 'vuelayers/lib/style.css'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css
import VueSocketIOExt from 'vue-socket.io-extended';
import io from 'socket.io-client';

import {HOST} from "@/consts";

Vue.config.productionTip = false
const socket = io(HOST);

Vue.use(VueSocketIOExt, socket, { store });
Vue.use(Buefy)
Vue.use(VueLayers)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
