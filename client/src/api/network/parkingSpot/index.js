import NetworkService from "@/api/network";

export class ParkingSpotApi {

    static getAll() {
        return NetworkService.get("/api/parking-spot")
    }

    /**
     *
     * @param {[]} coordinates
     */
    static vacate(coordinates) {
        return NetworkService.post("/api/parking-spot/vacate", { coordinates })
    }
}