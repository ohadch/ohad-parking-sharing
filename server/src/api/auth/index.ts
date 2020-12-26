import {Router} from "express";
import {facebookRouter} from "./facebook";

export const authRouter = Router();

authRouter.use("/facebook", facebookRouter)