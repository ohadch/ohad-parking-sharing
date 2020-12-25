import {Socket} from "socket.io";
import {SocketInputEvent, SocketOutputEvent} from "../ts/enums/socket";
import ParkingSpotModel from "../models/ParkingSpot.model";
import {
    IParkingSpotDeletedInputEventPayload,
    IParkingSpotDeletedOutputEventPayload
} from "../ts/types/socket/parkingSpotDeleted";
import {
    IParkingSpotCreatedInputEventPayload,
    IParkingSpotCreatedOutputEventPayload
} from "../ts/types/socket/parkingSpotCreated";
import {io} from "../config";

export default class SocketHandlerService {
    socket: Socket

    public constructor(socket: Socket) {
        this.socket = socket
    }

    public handle() {
        this.socket.on(SocketInputEvent.ParkingSpotCreated, this.handleParkingSpotCreated.bind(this));
        this.socket.on(SocketInputEvent.ParkingSpotDeleted, this.handleParkingSpotDeleted.bind(this));
    }

    public async handleParkingSpotCreated(payload: IParkingSpotCreatedInputEventPayload) {
        const { coordinates } = payload;

        console.log(`Will create parking at ${JSON.stringify(payload.coordinates)}`)
        const parkingSpot = await ParkingSpotModel.create({ coordinates })

        const outputPayload : IParkingSpotCreatedOutputEventPayload = {
            parkingSpot
        }

        io.emit(SocketOutputEvent.ParkingSpotCreated, outputPayload);
    }

    public async handleParkingSpotDeleted(payload: IParkingSpotDeletedInputEventPayload) {
        const parkingSpot = await ParkingSpotModel.findById(payload.id).exec()
        console.log(`Will delete parking ${parkingSpot._id} at ${JSON.stringify(parkingSpot.coordinates)}`)
        await parkingSpot.delete();
        const outputPayload : IParkingSpotDeletedOutputEventPayload = {
            parkingSpot
        }
        io.emit(SocketOutputEvent.ParkingSpotDeleted, outputPayload);
    }
}