import {Document, Model} from "mongoose";

export interface IParkingSpotDocument extends Document {
    coordinates: [number, number];
}

export interface IParkingSpotModel extends Model<IParkingSpotDocument> {}