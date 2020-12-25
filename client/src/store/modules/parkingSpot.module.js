import {A_CREATE_PARKING_SPOT, A_PARKING_SPOT_VACATED_FROM_SERVER} from "@/store/actions/parkingSpot.actions";
import {M_ADD_PARKING_SPOT} from "@/store/mutations/parkingSpot.mutations";

export default {
    namespaced: true,
    state: {
        freeSpots: []
    },
    actions: {
        async [A_PARKING_SPOT_VACATED_FROM_SERVER]({commit, state}, parkingSpot) {
            const existingParkingSpotIds = state.freeSpots.map(spot => spot._id)
            if (!existingParkingSpotIds.includes(parkingSpot._id)) {
                commit(M_ADD_PARKING_SPOT, parkingSpot)
            }
        },
        async [A_CREATE_PARKING_SPOT](_, coordinates) {
            this._vm.$socket.client.emit('ParkingCreated', coordinates);
        }
    },
    mutations: {
        [M_ADD_PARKING_SPOT](state, parkingSpot) {
            state.freeSpots.push(parkingSpot)
        }
    }
}