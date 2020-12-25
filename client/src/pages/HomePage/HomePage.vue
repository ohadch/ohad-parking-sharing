<template>
  <div class="home">
    <h1>Parking Spots Map</h1>
    <Map :coordinates="[]" />
  </div>
</template>

<script>
import Map from "@/components/Map";

export default {
  name: '',
  components: {
    Map
  }
}
</script>
