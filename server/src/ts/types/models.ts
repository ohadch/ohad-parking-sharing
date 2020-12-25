import {Document, Model} from "mongoose";

export interface IParkingSpotDocument extends Document {
    coordinates: string[];
}

export interface IParkingSpotModel extends Model<IParkingSpotDocument> {}