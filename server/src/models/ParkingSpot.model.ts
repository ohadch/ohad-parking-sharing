import mongoose, {Schema} from "mongoose";
import {IParkingSpotDocument, IParkingSpotModel} from "../ts/types";


const ParkingSpotSchema: Schema = new Schema({
    coordinates: {type: String, required: true, minLength: 4},
}, { timestamps: true })


const ParkingSpotModel: IParkingSpotModel = mongoose.model<IParkingSpotDocument, IParkingSpotModel>('ParkingSpot', ParkingSpotSchema);
export default ParkingSpotModel;