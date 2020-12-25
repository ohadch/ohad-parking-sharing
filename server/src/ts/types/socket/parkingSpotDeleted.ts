import {IParkingSpotDocument} from "../models";

export interface IParkingSpotDeletedInputEventPayload {
    id: string
}

export interface IParkingSpotDeletedOutputEventPayload {
    parkingSpot: IParkingSpotDocument
}