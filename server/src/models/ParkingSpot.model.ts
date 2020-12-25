import mongoose, {Schema} from "mongoose";
import {IParkingSpotDocument, IParkingSpotModel} from "../ts/types/models";


const ParkingSpotSchema: Schema = new Schema({
    coordinates: {type: Array, required: true},
}, { timestamps: true })


const ParkingSpotModel: IParkingSpotModel = mongoose.model<IParkingSpotDocument, IParkingSpotModel>('ParkingSpot', ParkingSpotSchema);
export default ParkingSpotModel;