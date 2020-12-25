import Vue from 'vue'
import Vuex from 'vuex'
import parkingSpot from "./parkingSpot.module";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    parkingSpot
  }
})
