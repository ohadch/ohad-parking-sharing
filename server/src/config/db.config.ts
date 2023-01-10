import mongoose from "mongoose";
import {MONGO_URI, MONGO_USER, MONGO_PASSWORD} from "../settings";

// Tell mongoose to use es6 implementation of promises
mongoose.Promise = global.Promise;

const InitiateMongoServer = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            auth: {
                user: MONGO_USER,
                password: MONGO_PASSWORD
            },
            useNewUrlParser: true
        });
        console.log("Successfully connected to the MongoDB database");
    } catch (e) {
        console.log(e);
        throw e;
    }
};

module.exports = InitiateMongoServer;