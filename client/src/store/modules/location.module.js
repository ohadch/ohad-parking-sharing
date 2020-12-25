import {M_SET_LOCATION} from "@/store/mutations/location.mutations";

export default {
    namespaced: true,
    state: {
        coordinates: []
    },
    mutations: {
        [M_SET_LOCATION](state, coordinates) {
            state.coordinates = coordinates;
        }
    }
}