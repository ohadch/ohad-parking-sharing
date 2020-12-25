import Vue from 'vue'
import Vuex from 'vuex'
import parkingSpot from "./modules/parkingSpot.module";
import location from "./modules/location.module";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    parkingSpot,
    location
  }
})
