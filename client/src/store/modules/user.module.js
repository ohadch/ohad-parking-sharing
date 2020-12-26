import {A_FACEBOOK_LOG_IN, A_LOG_OUT} from "@/store/actions/user.actions";
import {M_SET_USER} from "@/store/mutations/user.mutations";

export default {
    namespaced: true,
    state: {
        user: undefined
    },
    actions: {
        [A_FACEBOOK_LOG_IN]({ commit }, facebookUserId) {
            commit(M_SET_USER, user)
        },
        [A_LOG_OUT]({ commit }) {
            commit(M_SET_USER, undefined)
        },
    },
    mutations: {
        [M_SET_USER](state, user) {
            state.user = user;
        }
    }
}