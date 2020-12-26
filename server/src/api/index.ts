import { Router } from "express";
import {parkingSpotRouter} from "./parkingSpot";
import {authRouter} from "./auth";

export const apiRouter = Router();

apiRouter.use("/auth", authRouter);
apiRouter.use("/parking-spot", parkingSpotRouter);