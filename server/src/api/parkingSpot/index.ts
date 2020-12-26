import { Router } from "express";
import {create, getAll, getOne, remove} from "./ParkingSpot.controller";
import {authMiddleware} from "../../middlewares/auth.middleware";

export const parkingSpotRouter = Router();

parkingSpotRouter.use(authMiddleware)

parkingSpotRouter.route("/")
    .get(getAll)
    .post(create)

parkingSpotRouter.route("/:id")
    .get(getOne)
    .delete(remove)
