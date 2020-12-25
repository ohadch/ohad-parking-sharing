import { Router } from "express";
import {getAll, getOne, vacateParking} from "./ParkingSpot.controller";

export const parkingSpotRouter = Router();

parkingSpotRouter.route("/")
    .get(getAll)

parkingSpotRouter.route("/:id")
    .get(getOne)

parkingSpotRouter.route("/vacate")
    .post(vacateParking)

