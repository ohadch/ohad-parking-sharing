import {M_SET_LOCATION} from "@/store/mutations/location.mutations";

export default {
    namespaced: true,
    state: {
        coordinates: []
    },
    mutations: {
        /**
         *
         * @param state
         * @param {[number, number]} coordinates
         */
        [M_SET_LOCATION](state, coordinates) {
            state.coordinates = coordinates;
        }
    }
}