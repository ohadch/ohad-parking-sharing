import {Document, Model} from "mongoose";

export interface IUserDocument extends Document {
    facebookUserId?: string
}

export interface IUserModel extends Model<IUserDocument> {}