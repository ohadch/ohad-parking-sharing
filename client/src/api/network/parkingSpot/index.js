import NetworkService from "@/api/network";

export class ParkingSpotApi {

    static getAll() {
        return NetworkService.get("/parking-spot")
    }
}