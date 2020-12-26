import {ParkingSpotApi} from "@/api/parkingSpot";
import {AuthApi} from "@/api/auth";

export default class ApiService {
    static auth = AuthApi
    static parkingSpot = ParkingSpotApi
}