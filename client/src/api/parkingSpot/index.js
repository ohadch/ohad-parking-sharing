import NetworkService from "@/api/network";

export class ParkingSpotApi {

    static async getAll() {
        const {parkingSpots} = await NetworkService.get("/api/parking-spot")
        return parkingSpots
    }

    /**
     *
     * @param {[]} coordinates
     */
    static create(coordinates) {
        return NetworkService.post("/api/parking-spot", { coordinates })
    }

    /**
     *
     * @param {string} parkingSpotId
     */
    static delete(parkingSpotId) {
        return NetworkService.delete(`/api/parking-spot/${parkingSpotId}`)
    }
}