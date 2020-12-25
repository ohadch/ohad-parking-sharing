import Vue from 'vue'
import Vuex from 'vuex'
import parkingSpot from "./parkingSpot.module";
import location from "./location.module";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    parkingSpot,
    location
  }
})
