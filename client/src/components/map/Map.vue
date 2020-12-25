<template>
  <div class="card">
    <div class="card-content">
      <vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true"
              data-projection="EPSG:4326" style="height:700px">
        <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>

        <vl-geoloc @update:position="geolocPosition = $event">
          <template slot-scope="geoloc" v-if="geoloc.position" id="position-feature">
            <MapIcon :icon="require(`../../assets/location-icon.png`)" :coordinates="geoloc.position" :scale="0.05"/>
          </template>
        </vl-geoloc>
        <MapIcon :icon="require(`../../assets/parking-icon.png`)" v-for="coordinates in coordinatesArrays"
                 :coordinates="coordinates" :key="JSON.stringify(coordinates)"/>

        <vl-layer-tile id="osm">
          <vl-source-osm></vl-source-osm>
        </vl-layer-tile>
      </vl-map>
    </div>
  </div>
</template>

<script>

import {COORDINATES} from "@/consts";
import MapIcon from "@/components/map/MapIcon";
import {M_SET_LOCATION} from "@/store/mutations/location.mutations";

export default {
  name: "Map",
  components: {
    MapIcon
  },
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
  watch: {
    geolocPosition(oldVal, newVal) {
      this.$store.commit(`location/${M_SET_LOCATION}`, newVal);
    }
  }
}
</script>