<template>
  <div class="home">
    <h1>Parking Spots Map</h1>
    <Map :coordinates-arrays="coordinates"/>
  </div>
</template>

<script>
import Map from '@/components/Map.vue'

export default {
  name: 'Home',
  components: {
    Map
  },
  data() {
    return {
      coordinates: [
        [34.771,32.078]
      ]
    }
  }
}
</script>
