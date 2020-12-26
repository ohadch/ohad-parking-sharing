import {Router} from "express";
import {login} from "./facebook.controller";

export const facebookRouter = Router();

facebookRouter.route("/login")
    .post(login)