import axios from "axios";
import {LOCALSTORAGE_KEYS} from "@/consts";

const HOST = "http://localhost:8000"

export default class NetworkService {

    /**
     *
     * @param {string} endpoint
     * @return {object[]}
     */
    static async get(endpoint) {
        const url = NetworkService.buildUrl(endpoint)
        const headers = NetworkService.getHeaders();
        const response = await axios.get(url, { headers })
        return response.data;
    }

    /**
     *
     * @param {string} endpoint
     * @param {object} data
     */
    static async post(endpoint, data = {}) {
        const url = NetworkService.buildUrl(endpoint)
        const headers = NetworkService.getHeaders();
        const response = await axios.post(url, data, { headers })
        return response.data;
    }

    /**
     *
     * @param {string} endpoint
     * @param {object} data
     */
    static async put(endpoint, data = {}) {
        const url = NetworkService.buildUrl(endpoint)
        const headers = NetworkService.getHeaders();
        const response = await axios.put(url, data, { headers })
        return response.data;
    }

    /**
     *
     * @param {string} endpoint
     */
    static async delete(endpoint) {
        const url = NetworkService.buildUrl(endpoint)
        const headers = NetworkService.getHeaders();
        const response = await axios.delete(url, { headers })
        return response.data;
    }

    static getHeaders() {
        return {
            user: localStorage.getItem(LOCALSTORAGE_KEYS.user)
        }
    }

    /**
     *
     * @param {string} endpoint
     */
    static buildUrl(endpoint) {
        return `${HOST}${endpoint}`
    }

}