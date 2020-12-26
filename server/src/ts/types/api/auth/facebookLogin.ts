import {IUserDocument} from "../../models";

export interface IFacebookAuthResponse {
    "accessToken": string,
    "userID": string,
    "expiresIn": number,
    "signedRequest": string,
    "graphDomain": string,
    "data_access_expiration_time":  number
}

export interface IFacebookLoginRequestBody {
    facebookAuthResponse: IFacebookAuthResponse
}

export interface IFacebookLoginResponse {
    user: IUserDocument
}