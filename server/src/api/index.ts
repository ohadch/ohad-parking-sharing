import { Router } from "express";
import {parkingSpotRouter} from "./parkingSpot";

const router = Router();

router.use("/parking-spot", parkingSpotRouter);