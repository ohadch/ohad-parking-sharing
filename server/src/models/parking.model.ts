import mongoose, {Schema} from "mongoose";
import {IParkingDocument, IParkingModel} from "../ts/types";


const ParkingSchema: Schema = new Schema({
    coordinates: {type: String, required: true, minLength: 4},
}, { timestamps: true })


const ParkingModel: IParkingModel = mongoose.model<IParkingDocument, IParkingModel>('Parking', ParkingSchema);
export default ParkingModel;