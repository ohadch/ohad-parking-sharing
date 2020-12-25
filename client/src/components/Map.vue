<template>
  <div class="card">
    <div class="card-content">
      <vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true"
              data-projection="EPSG:4326" style="height: 400px">
        <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>

        <vl-geoloc @update:position="geolocPosition = $event">
          <template>
            <vl-feature v-if="coordinates && coordinates.length">
              <vl-geom-multi-point :coordinates="coordinates"></vl-geom-multi-point>
            </vl-feature>
          </template>
        </vl-geoloc>

        <vl-layer-tile id="osm">
          <vl-source-osm></vl-source-osm>
        </vl-layer-tile>
      </vl-map>
    </div>
  </div>
</template>

<script>
export default {
  name: "Map",
  props: {
    coordinates: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      zoom: 2,
      center: [0, 0],
      rotation: 0,
      geolocPosition: undefined,
    }
  },
}
</script>