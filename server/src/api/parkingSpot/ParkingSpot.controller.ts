import {RequestHandler} from "express";
import ParkingSpotModel from "../../models/ParkingSpot.model";
import {IGetAllParkingSpotsResponse} from "../../ts/types/api/parkingSpot/getAll";
import {IGetOneParkingSpotParams, IGetOneParkingSpotResponse} from "../../ts/types/api/parkingSpot/getOne";
import {IVacateParkingBody} from "../../ts/types/api/parkingSpot/vacate";


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

export const vacateParking : RequestHandler = async (req, res) => {
    const { coordinates } = req.body as unknown as IVacateParkingBody
    console.log(`Will vacate parking at ${coordinates}`)
    const spot = await ParkingSpotModel.create({ coordinates })
    return res.json({ spot });
}