import {RequestHandler} from "express";
import UserModel from "../../../models/User.model";
import {IFacebookLoginRequestBody, IFacebookLoginResponse} from "../../../ts/types/api/auth/facebookLogin";

export const login : RequestHandler = async (req, res) => {
    const { facebookAuthResponse }  = req.body as IFacebookLoginRequestBody;
    const user = await UserModel.getOrCreateByFacebookCredentials(facebookAuthResponse.userID)
    console.log(`User ${user.id} logged in`);
    const response : IFacebookLoginResponse = { user }
    res.json(response);
}