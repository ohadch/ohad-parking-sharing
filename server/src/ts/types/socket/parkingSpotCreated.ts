import {IParkingSpotDocument} from "../models";

export interface IParkingSpotCreatedInputEventPayload {
    coordinates: [number, number]
}

export interface IParkingSpotCreatedOutputEventPayload {
    parkingSpot: IParkingSpotDocument
}