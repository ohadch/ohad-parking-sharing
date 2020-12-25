import axios from "axios";

const HOST = "http://localhost:8000"

export default class NetworkService {

    /**
     *
     * @param {string} endpoint
     * @return {object[]}
     */
    static async get(endpoint) {
        const url = NetworkService.buildUrl(endpoint)
        const response = await axios.get(url)
        return response.data;
    }

    /**
     *
     * @param {string} endpoint
     * @param {object} data
     */
    static async post(endpoint, data = {}) {
        const url = NetworkService.buildUrl(endpoint)
        const response = await axios.post(url, data)
        return response.data;
    }

    /**
     *
     * @param {string} endpoint
     * @param {object} data
     */
    static async put(endpoint, data = {}) {
        const url = NetworkService.buildUrl(endpoint)
        const response = await axios.put(url, data)
        return response.data;
    }

    /**
     *
     * @param {string} endpoint
     */
    static async delete(endpoint) {
        const url = NetworkService.buildUrl(endpoint)
        const response = await axios.get(url)
        return response.data;
    }

    /**
     *
     * @param {string} endpoint
     */
    static buildUrl(endpoint) {
        return `${HOST}${endpoint}`
    }

}