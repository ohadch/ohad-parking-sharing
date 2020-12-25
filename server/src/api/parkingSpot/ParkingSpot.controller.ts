import {RequestHandler} from "express";
import ParkingSpotModel from "../../models/ParkingSpot.model";
import {IGetAllParkingSpotsResponse} from "../../ts/types/api/parkingSpot/getAll";
import {IGetOneParkingSpotParams, IGetOneParkingSpotResponse} from "../../ts/types/api/parkingSpot/getOne";


export const getAll : RequestHandler = async (req, res) => {
    const parkingSpots = await ParkingSpotModel.find().exec();
    const response : IGetAllParkingSpotsResponse = { parkingSpots }
    return res.json(response)
}

export const getOne : RequestHandler = async (req, res) => {
    const { id } = req.params as unknown as IGetOneParkingSpotParams
    const spot = await ParkingSpotModel.find(id).exec();
    const response : IGetOneParkingSpotResponse = spot
    return res.json(response);
}