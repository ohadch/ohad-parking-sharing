<template>
  <div class="home">
    <h1 class="header">Parking Spots Map</h1>
    <b-button :loading="isLoading" v-if="canVacateParking" class="action-button" size="is-large" @click="onParkingVacated">Vacate Parking</b-button>
    <Map :coordinates-arrays="coordinates"/>
  </div>
</template>

<script>
import Map from '@/components/map/Map.vue'
import { mapState } from "vuex";
import ApiService from "@/api";

export default {
  name: 'Home',
  components: {
    Map
  },
  data() {
    return {
      isLoading: false,
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
    async onParkingVacated() {
      this.isLoading = true
      await ApiService.parkingSpot.vacate(this.currentLocationCoordinates)
      this.isLoading = false
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