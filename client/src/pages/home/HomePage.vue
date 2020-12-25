<template>
  <div class="home">
    <h1 class="header">Parking Spots Map</h1>
    <b-button v-if="canVacateParking" class="action-button" size="is-large" @click="onParkingVacated">Vacate Parking</b-button>
    <Map :coordinates-arrays="coordinates"/>
  </div>
</template>

<script>
import Map from '@/components/map/Map.vue'
import { mapState } from "vuex";

export default {
  name: 'Home',
  components: {
    Map
  },
  data() {
    return {
      coordinates: [
        // [34.771,32.078],
        // [34.771,32.075],
      ]
    }
  },
  computed: {
    ...mapState("location", {
      currentLocationCoordinates: "coordinates"
    }),
    canVacateParking() {
      return this.currentLocationCoordinates && this.currentLocationCoordinates.length
    }
  },
  methods: {
    onParkingVacated() {
      alert(JSON.stringify(this.currentLocationCoordinates))
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 2em;
  font-weight: bold;
}
.action-button {
  margin: 10px;
}
</style>