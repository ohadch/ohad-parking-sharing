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
    static vacate(coordinates) {
        return NetworkService.post("/api/parking-spot/vacate", { coordinates })
    }
}