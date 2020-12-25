import { Router } from "express";
import {parkingSpotRouter} from "./parkingSpot";

export const apiRouter = Router();

apiRouter.use("/parking-spot", parkingSpotRouter);