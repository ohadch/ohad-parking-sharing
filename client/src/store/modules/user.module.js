import {A_FACEBOOK_LOG_IN, A_LOG_OUT} from "@/store/actions/user.actions";
import {M_SET_USER} from "@/store/mutations/user.mutations";
import ApiService from "@/api";
import {LOCALSTORAGE_KEYS} from "@/consts";

export default {
    namespaced: true,
    state: {
        user: localStorage.getItem(LOCALSTORAGE_KEYS.user)
            ? JSON.parse(localStorage.getItem(LOCALSTORAGE_KEYS.user))
            : undefined
    },
    actions: {
        async [A_FACEBOOK_LOG_IN]({ commit }, authResponse) {
            const user = await ApiService.auth.facebookLogin(authResponse);
            commit(M_SET_USER, user)
        },
        [A_LOG_OUT]({ commit }) {
            commit(M_SET_USER, undefined)
        },
    },
    mutations: {
        [M_SET_USER](state, user) {
            user
                ? localStorage.setItem(LOCALSTORAGE_KEYS.user,  JSON.stringify(user))
                : localStorage.removeItem(LOCALSTORAGE_KEYS.user)

            state.user = user;
        }
    }
}