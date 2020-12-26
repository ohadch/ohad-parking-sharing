import {RequestHandler} from "express";
import ParkingSpotModel from "../../models/ParkingSpot.model";
import {IGetAllParkingSpotsResponse} from "../../ts/types/api/parkingSpot/getAll";
import {IGetOneParkingSpotParams, IGetOneParkingSpotResponse} from "../../ts/types/api/parkingSpot/getOne";
import {
    IParkingSpotCreatedInputEventPayload,
    IParkingSpotCreatedOutputEventPayload
} from "../../ts/types/socket/parkingSpotCreated";
import {io} from "../../config";
import {SocketOutputEvent} from "../../ts/enums/socket";
import {
    IParkingSpotDeletedInputEventPayload,
    IParkingSpotDeletedOutputEventPayload
} from "../../ts/types/socket/parkingSpotDeleted";

export const getAll : RequestHandler = async (req, res) => {
    const parkingSpots = await ParkingSpotModel.find().exec();
    const response : IGetAllParkingSpotsResponse = { parkingSpots }
    return res.json(response)
}

export const getOne : RequestHandler = async (req, res) => {
    const { id } = req.params as unknown as IGetOneParkingSpotParams
    const spot = await ParkingSpotModel.findById(id).exec();
    const response : IGetOneParkingSpotResponse = spot
    return res.json(response);
}

export const create : RequestHandler = async (req, res) => {
    const { coordinates } = req.body as unknown as IParkingSpotCreatedInputEventPayload
    console.log(`Will create parking at ${JSON.stringify(coordinates)}`)
    const parkingSpot = await ParkingSpotModel.create({ coordinates })

    const outputPayload : IParkingSpotCreatedOutputEventPayload = {
        parkingSpot
    }

    io.emit(SocketOutputEvent.ParkingSpotCreated, outputPayload);
    res.json(outputPayload)
}

export const remove : RequestHandler = async (req, res) => {
    const { id } = req.params as unknown as IParkingSpotDeletedInputEventPayload
    const parkingSpot = await ParkingSpotModel.findById(id).exec()
    console.log(`Will delete parking ${parkingSpot._id} at ${JSON.stringify(parkingSpot.coordinates)}`)
    await parkingSpot.delete();
    const outputPayload : IParkingSpotDeletedOutputEventPayload = {
        parkingSpot
    }
    io.emit(SocketOutputEvent.ParkingSpotDeleted, outputPayload);
    return res.json(outputPayload);
}
