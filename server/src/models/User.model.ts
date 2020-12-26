import mongoose, {Schema} from "mongoose";
import {IUserDocument, IUserModel} from "../ts/types/models";


const UserSchema: Schema = new Schema({
    facebookUserId: {type: String, required: false}
}, { timestamps: true })



UserSchema.statics.getOrCreateByFacebookCredentials = async function (facebookUserId: string) {
    const existing = await UserModel.findOne({ facebookUserId } ).exec();
    if (existing) {
        return existing;
    }

    return UserModel.create({ facebookUserId });
}


const UserModel: IUserModel = mongoose.model<IUserDocument, IUserModel>('User', UserSchema);
export default UserModel;