<template>
  <div class="home">
    <h1 class="header">Parking Spots Map</h1>
    <b-button class="action-button" size="is-large" @click="onParkingVacated">Vacate Parking</b-button>
    <Map :coordinates-arrays="coordinates"/>
  </div>
</template>

<script>
import Map from '@/components/map/Map.vue'

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
  methods: {
    onParkingVacated() {
      alert("Not Implemented")
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