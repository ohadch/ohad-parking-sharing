import { Router } from "express";
import {getAll, getOne} from "./ParkingSpot.controller";

export const parkingSpotRouter = Router();

parkingSpotRouter.route("/")
    .get(getAll)

parkingSpotRouter.route("/:id")
    .get(getOne)
