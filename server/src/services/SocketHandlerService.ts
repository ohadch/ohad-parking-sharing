import {Socket} from "socket.io";
import {SocketInputEvent} from "../ts/enums/socket";
import ParkingSpotModel from "../models/ParkingSpot.model";
import {IParkingSpotCreatedPayload, IParkingSpotDeletedPayload} from "../ts/types/socket/parkingSpot";

export default class SocketHandlerService {
    socket: Socket

    public constructor(socket: Socket) {
        this.socket = socket
    }

    public handle() {
        this.socket.on(SocketInputEvent.ParkingCreated, this.handleParkingSpotCreated.bind(this));
        this.socket.on(SocketInputEvent.ParkingDeleted, this.handleParkingSpotDeleted.bind(this));
    }

    public async handleParkingSpotCreated(payload: IParkingSpotCreatedPayload) {
        const { coordinates } = payload;

        console.log(`Will create parking at ${JSON.stringify(payload.coordinates)}`)
        const spot = await ParkingSpotModel.create({ coordinates })
        console.log(spot)
        
        // TODO: broadcast spot to all clients
    }

    public async handleParkingSpotDeleted(payload: IParkingSpotDeletedPayload) {
        const spot = await ParkingSpotModel.findById(payload.id).exec()
        console.log(`Will delete parking ${spot._id} at ${JSON.stringify(spot.coordinates)}`)
        await spot.delete();

        // TODO: broadcast deletion to all clients
    }
}