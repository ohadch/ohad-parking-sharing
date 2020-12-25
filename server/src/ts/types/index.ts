import {Document, Model} from "mongoose";

export interface IParkingDocument extends Document {
    coordinates: string;

}

export interface IParkingModel extends Model<IParkingDocument> {}