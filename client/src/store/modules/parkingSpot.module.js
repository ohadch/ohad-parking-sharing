import {A_PARKING_SPOT_CREATED} from "@/store/actions/parkingSpot.actions";
import {M_ADD_PARKING_SPOT} from "@/store/mutations/parkingSpot.mutations";

export default {
    namespaced: true,
    state: {
        freeSpots: []
    },
    actions: {
        async [A_PARKING_SPOT_CREATED]({commit, state}, { parkingSpot }) {
            const existingParkingSpotIds = state.freeSpots.map(spot => spot._id)
            if (!existingParkingSpotIds.includes(parkingSpot._id)) {
                commit(M_ADD_PARKING_SPOT, parkingSpot)
            }
        }
    },
    mutations: {
        [M_ADD_PARKING_SPOT](state, parkingSpot) {
            state.freeSpots.push(parkingSpot)
        }
    }
}