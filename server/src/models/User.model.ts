import mongoose, {Schema} from "mongoose";
import {IUserDocument, IUserModel} from "../ts/types/models";


const UserSchema: Schema = new Schema({
    facebookUserId: {type: String, required: false}
}, { timestamps: true })


const UserModel: IUserModel = mongoose.model<IUserDocument, IUserModel>('User', UserSchema);
export default UserModel;