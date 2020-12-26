import { Router } from "express";
import {parkingSpotRouter} from "./parkingSpot";
import {userRouter} from "./auth";

export const apiRouter = Router();

apiRouter.use("/user", userRouter);
apiRouter.use("/parking-spot", parkingSpotRouter);