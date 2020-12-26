<template>
  <div class="home">
    <h1 class="header">Find Free Parking Spots In Your Area</h1>
    <b-button :loading="isLoading" v-if="canVacateParking" class="action-button" size="is-large" @click="onParkingVacated">Vacate Parking</b-button>
    <Map :parking-spots="freeParkingSpots"/>
  </div>
</template>

<script>
import Map from '@/components/map/Map.vue'
import { mapState } from "vuex";
import {A_CREATE_PARKING_SPOT} from "@/store/actions/parkingSpot.actions";
import ApiService from "@/api";
import {M_ADD_PARKING_SPOT} from "@/store/mutations/parkingSpot.mutations";

export default {
  name: 'Home',
  components: {
    Map
  },
  data() {
    return {
      isLoading: false
    }
  },
  async mounted() {
    const parkingSpots = await ApiService.parkingSpot.getAll();
    for (const parkingSpot of parkingSpots) {
      this.$store.commit(`parkingSpot/${M_ADD_PARKING_SPOT}`, parkingSpot)
    }
  },
  computed: {
    ...mapState("location", {
      currentLocationCoordinates: "coordinates",
    }),
    ...mapState("parkingSpot", {
      freeParkingSpots: "freeSpots",
    }),
    canVacateParking() {
      return this.currentLocationCoordinates && this.currentLocationCoordinates.length
    }
  },
  methods: {
    async onParkingVacated() {
      this.isLoading = true
      await this.$store.dispatch(`parkingSpot/${A_CREATE_PARKING_SPOT}`, { coordinates: this.currentLocationCoordinates })
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