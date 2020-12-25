<template>
  <div class="card">
    <div class="card-content">
      <vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true"
              data-projection="EPSG:4326" style="height:700px">
        <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>

        <vl-feature id="position-feature" v-for="coordinates in coordinatesArrays" :key="JSON.stringify(coordinates)">
          <vl-geom-point :coordinates="coordinates"></vl-geom-point>
          <vl-style-box>
            <vl-style-icon :src="require(`../assets/parking-icon.png`)" :scale="0.05" :anchor="[0.5, 1]"></vl-style-icon>
          </vl-style-box>
        </vl-feature>


        <vl-layer-tile id="osm">
          <vl-source-osm></vl-source-osm>
        </vl-layer-tile>
      </vl-map>
    </div>
  </div>
</template>

<script>

import {COORDINATES} from "@/consts";

export default {
  name: "Map",
  props: {
    coordinatesArrays: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      zoom: COORDINATES.HOVEVEY_TSIYON.zoom,
      center: COORDINATES.HOVEVEY_TSIYON.coordinates,
      rotation: 0,
      geolocPosition: undefined,
    }
  },
}
</script>