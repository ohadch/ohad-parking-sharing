import {IParkingSpotDocument} from "../../models";

export interface IGetOneParkingSpotParams {
    id: string
}

export interface IGetOneParkingSpotResponse extends IParkingSpotDocument {}