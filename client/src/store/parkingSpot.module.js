import {A_GET_ALL_PARKING_SPOTS} from "@/store/actions/parkingSpot.actions";
import ApiService from "@/api";
import {M_ADD_PARKING_SPOT} from "@/store/mutations/parkingSpot.mutations";

export default {
    namespaced: true,
    state: {
        freeSpots: []
    },
    actions: {
        async [A_GET_ALL_PARKING_SPOTS]({commit, state}) {
            const parkingSpots = await ApiService.parkingSpot.getAll();
            const existingParkingSpotIds = state.freeSpots.map(spot => spot._id)
            for (const parkingSpot of parkingSpots) {
                if (!existingParkingSpotIds.includes(parkingSpot._id))
                commit(M_ADD_PARKING_SPOT, parkingSpot)
            }
        }
    },
    mutations: {
        [M_ADD_PARKING_SPOT](state, parkingSpot) {}
    }
}